
function userExists(name) { 
    console.log("Do we even get here?")
    $.get("users", (data) => {
        console.log("data", data);
        data.response.map((user) => {
            console.log("user:", user);
            if (user.username === name) {
                return true;
            }
        });
    });

    return false;
}

function validateSignUp() {

    const username = document.forms.signup.username.value;
    const password = document.forms.signup.password.value;

        //validate that username and password is not empty
     if (username && password) {
        //password validation
        if (password.length < 8) { //password not OK
            alert("Password must be longer than 8 characters");
            return false;

        } else { //password validated to OK

            console.log("Do we even get here?")
             $.get("users").done((data) => {
                console.log("data", data);
                data.response.map((user) => {
                console.log("user:", user);

                if (user.username === username) {
                    alert("User already exists");
                    return false;
                }
             }); 
        });

    return true;

        }

    } else { //password OR username don't exist
        alert("Please provide username and password");
       return false;
    }  

}
