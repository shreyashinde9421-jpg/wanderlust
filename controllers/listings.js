const Listing = require("../models/listing.js");
const axios = require("axios");
const apiKey = process.env.OPENCAGE_API_KEY;
const { timeAgo } = require("../controllers/reviews.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Oops! This listing doesn’t exist anymore.");
    return res.redirect("/listings");
  }

  // Build query from listing data
  const query = `${listing.location}, ${listing.country}`;
  const apiKey = process.env.OPENCAGE_API_KEY;

  let lat = null, lng = null;
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${apiKey}`
    );
    if (response.data.results.length > 0) {
      lat = response.data.results[0].geometry.lat;
      lng = response.data.results[0].geometry.lng;
    }
  } catch (err) {
    console.error("Geocoding error:", err.message);
  }

  res.render("listings/show.ejs", { listing, lat, lng, invalidLocation: !lat || !lng, timeAgo});
};

module.exports.createNewListing = async (req, res) => {

    console.log(req.body.listing.category);

    if (!req.body.listing.category) {
        req.body.listing.category = [];
    }

    if (!Array.isArray(req.body.listing.category)) {
        req.body.listing.category = [req.body.listing.category];
    }

    // FIX NESTED ARRAY
    if (Array.isArray(req.body.listing.category[0])) {
        req.body.listing.category = req.body.listing.category[0];
    }

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Oops! This listing doesn’t exist anymore. Try browsing similar options below.");
        return res.redirect("/listings");
    }

    let originalImgUrl = listing.image.url;
    originalImgUrl = originalImgUrl.replace(
        "/upload/",
        "/upload/w_300,h_200,c_fill/"
    );
    res.render("listings/edit.ejs", {listing, originalImgUrl});
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    // ✔ FIX CATEGORY
    if (!req.body.listing.category) {
        req.body.listing.category = [];
    }

    if (!Array.isArray(req.body.listing.category)) {
        req.body.listing.category = [req.body.listing.category];
    }

    // ✔ FIX NESTED ARRAY
    if (Array.isArray(req.body.listing.category[0])) {
        req.body.listing.category = req.body.listing.category[0];
    }

    // ✔ IMPORTANT FIX: use only listing object
    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true, runValidators: true }
    );

    // image update
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};