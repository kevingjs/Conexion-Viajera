import React, { createContext } from 'react';
import ReviewsAPI from './api/ReviewsAPI';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
	const state = {
		reviewsAPI: ReviewsAPI()
	};

	return (
		<GlobalState.Provider value={state}>
			{ children }
		</GlobalState.Provider>
	);
};