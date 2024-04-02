import { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewsAPI = () => {
	const [ reviews, setReviews ] = useState([]);

	const getReviews = async () => {
		const res = await axios.get("/api/reviews");
		const { data: { status, success, content } } = res

		if (success) setReviews([...reviews, ...content]);
	};

	useEffect(() => {
		getReviews();
	}, []);

	return {
		reviews: [ reviews, setReviews ]
	};
};

export default ReviewsAPI;