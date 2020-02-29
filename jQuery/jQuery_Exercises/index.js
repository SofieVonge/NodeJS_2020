$("body").css(
    "text-align", "center"
    );

$("#title").html("New title");

$(".subtitle-box").css(
    "background", "red"
);

$(".temp").hide();

$("div.reason").css(
    "border", "2px dashed black"
);

$("#first-list li").css(
    "font-weight", "bold"
);

$("#first-list li").eq(2).css(
    "text-decoration", "underline"
);

//same as above
//$("ol li").last().css(
//  "text-decoration", "underline"
//);

$("#first-list li").eq(1).css(
    "text-decoration", "line-through"
);

$(".second-list li, span").css(
    "font-style", "italic"
);

$("ul span").css(
    "font-size", "0.5em" //we use em because it's dynamic and more exact compared to the original size, it's relative to the parent
    //to get the relative for the root, we use rem instead
);

$(".unused-box label").remove();

$(".unused-box").html("<p id='ss'>Second Sentence</p>"); //can also use append

$("<p>First Sentence</p>").insertBefore("#ss"); //can also use prepend

$(".unused-box").attr("class", "used-box");

$(document).ready(() => {
$(".used-box").click(()=>{
    $('.used-box').toggleClass('used-boxed-clicked');
    });
});


$(document).ready(() => {
    $("#submit-button").mouseenter(function(){
    $(this).attr("title", "You're ready to click.");
    });
    $("#submit-button").mouseleave(function(){
        $(this).removeAttr("title");
        });
});


$(document).ready(() => {
    $("#submit-button").click(() => {
        let i = $("#first-list li").length +1;
    $("#first-list").append("<li><b>Reason "+ i +"</b></li>");

   });
});

$(document).ready(() => {
    $("#submit-button").click(()=>{
        console.log($(this).parent());
        });
    });















