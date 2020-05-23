

function logIn() {

    const username = document.forms.login.username.value;
    const password = document.forms.login.password.value;

    if (username && password) {

        fetch("/login", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username, password})})
        .then(response => response.json())
        .then(data => {
            if (data.response === true) {
                window.location.reload();
            } else {
                alert(data.response);
            }       
        });

        return;

        
    } else {
        alert("Please provide username and password");
        return;
    }

}