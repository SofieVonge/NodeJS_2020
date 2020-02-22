//får fat i teleportknappen via id'et
$("#teleport-btn").click(() =>{
    //får fat i inputtet til venstre og sætter inputtet til højre lig med venstre og omvendt
    const left = $(".input-left").val()
    const right = $(".input-right").val()
    $(".input-right").val(left);
    $(".input-left").val(right);
});
