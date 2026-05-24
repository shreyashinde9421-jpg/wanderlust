const User = require("../models/user.js");

// Render signup page
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

// Signup + auto login (SAFE VERSION)
module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({ email, username });

        const registeredUser = await User.register(newUser, password);

        // Auto login safely
        req.login(registeredUser, (err) => {
            if (err) return next(err);

            req.flash("success", "Welcome to Wanderlust");
            return res.redirect("/listings");
        });

    } catch (e) {
        req.flash("error", e.message);
        return res.redirect("/signup");
    }
};

// Render login page
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

// Login success handler
module.exports.login = (req, res) => {
    req.flash("success", "Welcome back to Wanderlust");

    const redirectUrl = res.locals.redirectUrl || "/listings";

    return res.redirect(redirectUrl);
};

// Logout (safe + modern Passport v0.6+)
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);

        req.flash("success", "You are logged out!");
        return res.redirect("/listings");
    });
};