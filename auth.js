
const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const { signupSchema, loginSchema } = require("../schemas/authSchema");

let users = [];

router.post("/signup", validate(signupSchema), (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    users.push({ name, email, password });
    res.send("Signup successful!");
});

router.post("/login", validate(loginSchema), (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.send("Login successful!");
    } else {
        res.send("Invalid email or password");
    }
});

module.exports = router;
