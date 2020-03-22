const router = require("express").Router();

const uuid4 = require("uuid").v4; //uuid4() will give an unique id

//we need the uuid4 to get a unique id for the path to avoid collision for videos with same title
const videos = [{ 
                id: "", 
                title: "NightSky",
                thumbnail: "", 
                description: "Watch this sky", 
                path: "/fcabc752-c387-4cde-b890-a3e39acb269d.mp4",
                uploadDate: "", 
                category: "Science", 
                tags: ["stars", "night"],
            }];

router.get("/videos", (req, res) => {
    return res.send({response: videos});
});

//export the js object in router
module.exports = router;