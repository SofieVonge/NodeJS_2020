//getting the id out of the url string
const url = window.location.href;
let videoId = url.substr(url.lastIndexOf("/") +  1);

//use ajax to get the json info about this specific video

$.get(`/videos/${videoId}`)
    .done((data) => {

        $("#title").text(data.response.title);

        //injecting the video id into the source
const player = `<video id="player" controls>
                <source src="/${videoId}">
                Your browser does not support the video tag
                /video>`;

$("#player").append(player);

$("#description").text(data.response.description);

$("#views").text("Number of views " + data.response.views);

let no = 1;
data.response.comments.map(comment => {
  $("#comments").append(`Comment: ${no}: ` + comment + "<br>"); 
  no++; 
});



})
    .catch((error) => {
        $("#title").text("Couldn't find the video");
});


function validateForm() {
    const comment = document.forms.commentUpload.comment.value;

    const commentMaxLength = 2048;

    if (comment.length > commentMaxLength) {
        return false;
    }

    return true;
}


