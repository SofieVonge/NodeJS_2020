const router = require("express").Router();

const User  = require("../models/User.js");


router.get("/users", async (req, res) => {
    const allUsersWithElectives = await User.query().select("username").withGraphFetched("electives");
    return res.send({response: allUsersWithElectives});
   
});
/*
router.get("/setsessionvalue", (req, res) => {
    req.session.payingAttention = true;
    console.log(req.session);
    return res.send({response: "OK"});
});

router.get("/getsessionvalue", (req, res) => {
    return res.send({response: req.session.payingAttention});
});*/

/*router.get("/anything/:id", (req, res) => {
    console.log(req.params.id);
    return res.send({});
});*/


router.get("/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    const user = await User.query().findById(id);
    return res.send({responde: user});
   // const userWithElectives = await User.query().select("username").withGraphFetched("electives").where("id", id);
    //return res.send({respnse: userWithElectives});
});


module.exports = router
