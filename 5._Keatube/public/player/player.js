//getting the id out of the url string

const url = window.location.href;

let videoId = url.substr(url.lastIndexOf("/") +  1);


//injecting the video id into the source
const player = `<video controls>
                <source src="/${videoId}">
                Your browser does not support the video tag
                /video>`;

$("#player").append(player);