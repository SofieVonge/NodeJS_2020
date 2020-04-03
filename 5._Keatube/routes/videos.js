const router = require("express").Router(); //a dummy router object to import and set up in app.js

//const uuid4 = require("uuid").v4; //uuid4() will give an unique id
const crypto = require("crypto"); //crypto lies in nodejs, can do the same as uuid4

//console.log(crypto.randomBytes(18).toString("hex")); //randomly making a filename

//setting up multers
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },
    filename: (req, file, cb) => {
        const mimetypeArray = file.mimetype.split("/"); //splits the array at /
        
        if (mimetypeArray[0] === "video") {
            const extention = mimetypeArray[mimetypeArray.length -1];
            const fileName = crypto.randomBytes(18).toString("hex") //random filename

            cb(null, fileName + "." + extention);
        } else {
            cb("Error: The file is not a video");
        }
        
       }
});

const upload = multer({storage: storage}); //setting the destination for where our videos go to, see storage dest

//we need the uuid4 to get a unique id for the path to avoid collision for videos with same title
const videos = [{  
                title: "NightSky",
                thumbnail: "", 
                description: "Watch this sky", 
                fileName: "fcabc752-c387-4cde-b890-a3e39acb269d.mp4",
                uploadDate: "", 
                category: "Science", 
                tags: ["stars", "night"],
            }];

 const videosPerPage = 12;

 //here we need to do some kind of pagination so we don't get ALL videos at once
 //we need to know: how many videos we want to display at once and what page number we are on
router.get("/videos", (req, res) => {
    
    const page = Number(req.query.page) ? Number(req.query.page) : 1; //show page 1 unless they choose another page
    const start = videosPerPage * (page - 1);
    const end = start + videosPerPage;

    return res.send({response: videos.slice(start, end)});
});

router.get("/videos/:id", (req, res) => {
    //find returns an object, filter returns an array
    const video = videos.find(video => video.fileName === req.params.id);
    return res.send({response: video});
});

//upload.single is from multer, uploadedVideo is from the name in the form
router.post("/videos", upload.single("uploadedVideo"), (req, res) => {
    //console.log(req.file) contains the file and fileinformation
    //console.log(req.body) is the formdata

    const tagArray = req.body.tags.split("/\s*[,\s]\s*/"); //reqEx, expensive!

    const video = {title: req.body.title.trim(),
                    thumbnail: "", 
                    description: req.body.description,
                    fileName: req.file.filename, 
                    uploadDate: new Date(), 
                    category: req.body.category, 
                    tags: tagArray
                };

    const titleMaxLength = 128;
    const descriptionMaxLength = 2048;

    if (video.title.length === 0 || video.title.length > titleMaxLength) {
        return res.send({response: `The title is longer than ${titleMaxLength} chars .`});
    }

    if (video.description.length > descriptionMaxLength) {
        return res.send({response: `The description is longer than ${descriptionMaxLength} chars.`});
    }

    const fileSizeLimit = 262144000;

    if (req.file.size === 0 || req.file.size > fileSizeLimit) {
        return res.send({response: `The video is bigger than ${fileSizeLimit} bytes.`});
    }
    
    videos.push(video);

    return res.redirect("/"); //take us to the frontpage after uploading file
});


//export the js object in router
module.exports = router;