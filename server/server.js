const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('snakes_and_ladders');
    const taskCollection = db.collection('tasks');
    const taskRouter = createRouter(taskCollection);
    app.use(('/tasks'), taskRouter);
  .then((client) => {})
});

app.listen(5000, function() {
    console.log(`Server is now running`)
});