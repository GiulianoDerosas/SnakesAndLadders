const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {

    // ADD DATABASE INFORMATION
    // ADD DATABASE INFORMATION
    // ADD DATABASE INFORMATION

});

app.listen(5000, function() {
    console.log(`Server is now running`)
});