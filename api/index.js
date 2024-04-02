require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
const reviewRouter = require('../routes/reviewRouter');
const path = require("path");

const app = express();

// SETTINGS
const { PORT = 8080 } = process.env;

// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// CONNECT TO MONGODB
const URI = process.env.DATABASE;

const connectMongo = async () => {
	try {
		await mongoose.connect(URI);
		console.log("Connected to database.");
	} catch (err) {
		console.error(err);
	};
};

connectMongo();

mongoose.connection.on('error', err => {
	console.error(err.message);
});

//ROUTES
app.use('/api', reviewRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static("../client/dist"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
	});
};

//STARTING SERVER
app.listen(PORT, () => {
    console.log(`Server at port ${PORT}`);
});