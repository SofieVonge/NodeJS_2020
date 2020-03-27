//get the route on videos without the slash, always want the first page first!
$.get("videos?page=1", (data) => {
    // a map is a foreach function
    data.response.map((video) => {
        
        $("#video-gallery")
        .append(`<a href="/player/${video.fileName}">${video.title}</a>`);
    });

});
