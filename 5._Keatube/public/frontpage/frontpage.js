//get the route on videos without the slash
$.get("videos", (data) => {
    // a map is a foreach function
    data.response.map((video) => {
        
        $("#video-gallery")
        .append(`<a href="/player${video.path}">${video.title}</a>`);
    });

});
