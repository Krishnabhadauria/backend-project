const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

// USER REGISTER CONTROLLER   -- POST /api/auth/register

function userRegisterController(req, res) {
    const { email, name, password } = req.body;
    const isExists = userModel.findOne({ email });
    if (isExists) {
        return res.status(400).json({ message: "Email already exists", status: "failed" });
    }
    const user = await userModel.create({
         email, name, password 
    });
}

module.exports = {
    userRegisterController
}