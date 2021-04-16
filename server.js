const express = require('express');
//back-end common JS module syntax
//front-end React => ES2015 module syntax = import from
const dotenv = require('dotenv');
//helps you create global variables for ports, database URLs, etc,.
const colors = require('colors');
const morgan = require('morgan');
//to do logging

const connectDB = require('./config/db')

//let dotenv know where the config file is
dotenv.config({path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
