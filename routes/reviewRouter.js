const router = require("express").Router();
const reviewCtrl = require("../controllers/reviewCtrl");

router.get("/reviews", reviewCtrl.getReviews);

router.post("/reviews", reviewCtrl.createReview);

module.exports = router;