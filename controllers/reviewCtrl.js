const Review = require("../models/reviewModel");
const axios = require("axios").default;

const reviewCtrl = {
	getReviews: async (req, res) => {
		try {
			const reviews = await Review.find();

			if (reviews.length < 1) {
				const error = {
					status: 400,
					success: false,
					content: "No reviews available."
				};

				console.error(error);
				return res.status(400).json(error);
			};

			return res.json({
				status: 200,
				success: true,
				content: reviews
			});
		} catch (err) {
			const { message } = err;
			const error = {
				status: 500,
				success: false,
				content: message
			};

			console.error(error);
			return res.status(500).json(error);
		};
	},
	createReview: async (req, res) => {
		try {
			const { body: { name, review } } = req;

			if (!name) {
				const error = {
					status: 400,
					success: false,
					content: "Name value required."
				};

				console.error(error);
				return res.status(400).json(error);
			}

			if (name.length > 20) {
				const error = {
					status: 400,
					success: false,
					content: "Name length must be less than or equal to 20."
				};

				console.error(error);
				return res.status(400).json(error);
			};

			if (!review) {
				const error = {
					status: 400,
					success: false,
					content: "Review value required."
				};

				console.error(error);
				return res.status(400).json(error);
			};
			
			if (review.length > 295) {
				const error = {
					status: 400,
					success: false,
					content: "Review length must be less than or equal to 295."
				};

				console.error(error);
				return res.status(400).json(error);
			};

			const ip = req.headers['true-client-ip'];
			const { data: { status, country, regionName } } = await axios.get(`http://ip-api.com/json/${ip}?fields=status,country,regionName&lang=es`);

			if (status !== 'success') {
				const error = {
					status: 400,
					success: false,
					content: "Could not find address."
				};

				console.error(error);
				return res.status(400).json(error);
			};

			const reviewData = {
				name,
				location: `${regionName}, ${country}`,
				review
			};

			const newReview = new Review({ ...reviewData });
			
			await newReview.save();

			return res.json({
				status: 200,
				success: true,
				content: reviewData
			});
		} catch (err) {
			const { message } = err;
			const error = {
				status: 500,
				success: false,
				content: message
			};

			console.error(error);
			return res.status(500).json(error);
		};
	}
};

module.exports = reviewCtrl;