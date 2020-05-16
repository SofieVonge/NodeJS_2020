
async function getUsers() { 

    const response = await fetch("/users");
    const data = await response.json();

    return data.response;
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

            getUsers().then((users) => {
                users.map((user) => {
                    if (user.username === username) {
                     alert("User already exists");
                     return false;
                    }
                });

                return true;
            });

            return true;
    
        }

    } else { //password OR username don't exist
        alert("Please provide username and password");
       return false;
    }  

}
