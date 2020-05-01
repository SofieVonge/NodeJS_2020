const router = require("express").Router();
const User  = require("../models/User.js");

//sign up with promises
router.post("/signup", (req, res) => {
    const { username, password } = req.body;

    //validate that username and password is not empty
    if (username && password) {
        //password validation
        if (password.length < 8) {
            return res.status(400).send({response: "password must be longer than 8 characters"});  

        } else {
            try {
                //validate username
                User.query().select().where("username", username).limit(1).then(foundUser => {
                    if (foundUser.length > 0) {
                        //user already exists
                        return res.status(400).send({response: "user already exists"});

                    } else {
                         //add new user
                         User.query().insert({
                             username,
                             password
                            }).then(newUser => {
                                return res.send({response: `The user ${newUser.username} is created`});
                            });
                    }
                   
                });
            } catch (error) {
                return res.status(500).send({response: "Something went wrong with the DB"}); 
            }
        }

    } else {
       return res.status(400).send({response: "username or password missing"});  
    }  
});

router.post("/login", (req, res) => {
    return res.status(501).send({response: req.body});
});

router.get("/logout", (req, res) => {
    return res.status(501).send({response: req.body});
});

module.exports = router;