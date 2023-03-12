const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const secret = "qwertyuioplkjhgfdsazxcvbnm";


router.post("/loginuser", async (req, res) => {

    const { password, email } = req.body.Credentials

    let data = await User.findOne({ email: email });
    if (!data) {
        res.json({ success: "false" });
    }
    else {

        const da = {
            user: {
                id: data.id
            }
        }

        const authtoken = jwt.sign(da,secret);
        let pwdcompare = bcrypt.compare(data.password, password);
        if (!pwdcompare) {
            res.json({ success: "false"});
        }
        else {
            res.json({ success: "true",authtoken:authtoken});
        }
    }
})

module.exports = router;