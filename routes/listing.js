const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const { populate } = require("../models/review.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listings.js");

router
    .route("/")
    // Index Route
    .get(wrapAsync (listingController.index))
    // Create Route
    .post(upload.single('image[url]'), validateListing, wrapAsync (listingController.createNewListing));

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
    .route("/:id")
    // Show Route
    .get(wrapAsync (listingController.showListing))
    // Update Route
    .put(isLoggedIn, isOwner, upload.single('image[url]'), validateListing, wrapAsync (listingController.updateListing))
    // Delete Route
    .delete(isLoggedIn, isOwner, wrapAsync (listingController.deleteListing));
    
// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync (listingController.renderEditForm));

module.exports = router;