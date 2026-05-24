const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/users.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");

// SIGNUP
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

// LOGIN
router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: "Account not found. Please sign up first."
        }),
        userController.login
    );

// LOGOUT
router.get("/logout", userController.logout);

module.exports = router;