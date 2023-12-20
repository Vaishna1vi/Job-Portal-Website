// imports of express js framework
// const express = require('express'); // This is common JS

// without require method we can also use import export method using type: module key- value pair for importing files

// Packages imports
import express from 'express'; // This is module JS
import dotenv from 'dotenv'; 
import colors from 'colors' // It is used for decoration of console or terminal messages
import cors from 'cors'
import morgan from 'morgan'

// Files imports
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js'

// Dotenv configuration
dotenv.config()
//dotenv.config({path: './config'}) // If env file is located in different folder or directory then we have to give path of that specific location.

// mongodb connection
connectDB();

// rest object of express
const app=express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes used for browser
// app.get('/', (req, res) => {
// res.send('<h1>Welcome to my job portal</h1>');
// }); // Temporary routing
app.use('/api/v1/test', testRoutes)

// Extracting the port from env file
const PORT = process.env.PORT || 8080

// listening on the terminal 
app.listen(PORT, ()=> {
    console.log(`Node server running in ${process.env.DEV_MODE} mode on localhost ${PORT}`.bgBlack.magenta);
});