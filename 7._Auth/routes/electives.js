const router = require("express").Router();

const User  = require("../models/User.js");

const Elective = require("../models/Elective.js");

router.get("/electives/:userId", async (req, res) => {
    const userId = Number(req.params.userId);
    const electives = await Elective.query().select().where("userId", userId);
    return res.send({responde: electives});

});





module.exports = router