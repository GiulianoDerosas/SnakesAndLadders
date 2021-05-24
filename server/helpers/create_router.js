const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

    const router = express.Router();
    
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((data) => res.json(data))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
      });
    

    router.post('/', (req, res) => {
        const newData = req.body;
        collection
        .insertOne(newData)
        .then((result) => {
          res.json(result.ops[0]);
        })
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({_id: ObjectID(id)})
        .then(data => res.json(data))
    })

    return router;
}

module.exports = createRouter;