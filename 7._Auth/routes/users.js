const router = require("express").Router();

const User  = require("../models/User.js");


router.get("/users", async (req, res) => {
    const allUsersWithElectives = await User.query().select("username").withGraphFetched("electives");
    return res.send({response: allUsersWithElectives});
   
});



router.get("/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    const user = await User.query().findById(id);
    return res.send({responde: user});
   // const userWithElectives = await User.query().select("username").withGraphFetched("electives").where("id", id);
    //return res.send({respnse: userWithElectives});
});

router.get("users/:username", async (req, res) => {
    const username = req.params.username;
    const user = await User.query().select().where("username", username).limit(1);
    return res.send({response: user});
});


module.exports = router
