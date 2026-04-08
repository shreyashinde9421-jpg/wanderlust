const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/users.js");

router
    .route("/signup")
    // SignUp form
    .get(userController.renderSignupForm)
    // SignUp
    .post(wrapAsync(userController.signup));

router
    .route("/login")
    // Login form
    .get(userController.renderLoginForm)
    // login
    .post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), userController.login);

// logout
router.get("/logout", userController.logout);

module.exports = router;