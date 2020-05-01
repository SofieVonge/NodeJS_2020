let fileValid = false;


function validateForm() {
    const title = document.forms.videoupload.title.value.trim(); //trims down all extra whitespaces
    const description = document.forms.videoupload.description.value;
    const tags = document.forms.videoupload.tags.value;
    const category = document.forms.videoupload.category.value;

    const titleMaxLength = 128;

    //can't be empty or longer than 128
    if (title.length === 0 || title.length > titleMaxLength) {
        Swal.fire({
            icon: "error",
            title: "Ooops",
            text: "The title is too short or too long",
        });
        return false;
    }

    const descriptionMaxLength = 2048;

    if (description.length > descriptionMaxLength) {
        Swal.fire("Your description is too long!");
        return false;
    }


    return fileValid;
}

function handleFileUpload(files) {
    const file = files[0];
    const fileSize = file.size;
    const mimeArray = file.type.split("/");
    const fileType = mimeArray[0];

    if (fileType !== "video") {
        fileValid = false;
        Swal.fire("That is an invalid file type.");
        return;
    }

                            //250 mb
    const fileSizeLimit = 262144000;
            
    if (fileSize > fileSizeLimit) {
        fileValid = false;
        Swal.fire("Your file is way too big!");
        return;
    }

    fileValid = true;  
}