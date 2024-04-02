const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
	name: String,
	location: String,
	review: String
});

module.exports = mongoose.model('Reviews', reviewSchema);