function validateForm() {
    //validate the file extension to be a videofile

    //validate the size so we don't get a too large video
    return true;
}

function handleFileUpload(file) {
    const file = file[0];
    const fileSize = file.size;
    const mimeArray = file.type.split("/");
    const fileType = mimeArray[0];
}