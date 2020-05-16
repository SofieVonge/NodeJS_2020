const router = require("express").Router();

const User  = require("../models/User.js");

const Elective = require("../models/Elective.js");

router.get("/electives", async (req, res) => {
    const userId = req.session.userId;
    const electives = await Elective.query().select().where("userId", userId);
    return res.send({response: electives});

});


module.exports = router