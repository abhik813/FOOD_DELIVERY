const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { set } = require("mongoose");



router.post("/createuser",
    // [body('email').isEmail(),
    // body('password','Password Length must be more than 5').isLength({ min: 5 })],
    async (req, res) => {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        // try {
        //     await User.create({
        //         name: req.body.name,
        //         email: req.body.email,
        //         location: req.body.location,
        //         password: req.body.password
        //     }).then(res.json({ success: true }));
        // } catch (error) {
        //     console.log(error);
        //     res.json({success:false});
        // }

        const {name,password,email,location} =req.body.Credentials;
        const salt = await bcrypt.genSalt(5);
        let setpassword = await bcrypt.hash(password,salt);

        const data = {
            name : name,
            email : email,
            password:setpassword,
            location : location
        }
        await User.insertMany([data]);
    })

module.exports = router;