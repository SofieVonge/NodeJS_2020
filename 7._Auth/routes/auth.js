const router = require("express").Router();
const User  = require("../models/User.js");


//sign up with promises
router.post("/signup", (req, res) => {
    //unpack username and password at the same time from req.body!
    const { username, password } = req.body;
   
    //validate that username and password is not empty
    if (username && password) {
        //password validation
        if (password.length < 8) { //password not OK
            return res.status(400).send({response: "password must be longer than 8 characters"});  

        } else { //password validated to OK
            try {
                //validate username
                User.query().select().where("username", username).limit(1).then(foundUser => {
                    if (foundUser.length > 0) { //user already exists
                        return res.status(400).send({response: "user already exists"});

                    } else { //if no user exists by that name
                         //add new user
                         User.query().insert({
                             username,
                             password
                            }).then(newUser => {
                                return res.redirect("/");
                               // return res.send({response: `The user ${newUser.username} is created`});
                            });
                    }
                   
                });
            } catch (error) {
                return res.status(500).send({response: "Something went wrong with the DB"}); 
            }
        }

    } else { //password OR username don't exist
       return res.status(400).send({response: "username or password missing"});  
    }  
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username && password) {

        try {
            User.query().select().where("username", username).where("password", password).limit(1).then(found => {
                if (found.length > 0) {
                    return res.redirect("/welcome");
                }

                return res.status(400).send({response: "Username or password invalid"});
            });

        } catch (error) {
            return res.status(500).send({response: "Something went wrong with the DB"}); 
        }

    } else {
        return res.status(400).send({response: "username or password missing"});
    }


    
});

router.get("/logout", (req, res) => {
    return res.redirect("/");
    //return res.status(501).send({response: req.body});
});

module.exports = router;