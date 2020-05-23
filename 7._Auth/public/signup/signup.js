
function signUp() {

    const username = document.forms.signup.username.value;
    const password = document.forms.signup.password.value;

        //validate that username and password is not empty
     if (username && password) {
        //password validation
        if (password.length < 8) { //password not OK
            alert("Password must be longer than 8 characters");
            return false;

        } else { //password validated to OK

            fetch("/signup", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username, password})})
            .then(response => response.json())
            .then(data => {
                if (data.response === true) {
                    window.location.replace("/");
                } else {
                    alert(data.response);
                }       
            });
    
            return;
    
        }

    } else { //password OR username don't exist
        alert("Please provide username and password");
       return false;
    }  

}
