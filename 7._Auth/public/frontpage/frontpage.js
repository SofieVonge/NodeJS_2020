function validateLogIn() {

    const username = document.forms.login.username.value;
    const password = document.forms.login.password.value;

    if (username && password) {

        //ajax call checking wether username and password fits together.
        return true;

    } else {
        alert("Please provide username and password");
        return false;
    }

}