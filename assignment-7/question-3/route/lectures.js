const express = require('express');
const router = express.Router();

let collection;

function parRequest(client, req, res, next) {
    collection = client.db('homework07').collection('lectures');
    router(req, res, next);
}

router.get('/', (req, res, next) => {
    collection.find({}).toArray((err, data) => res.send(data));
});

router.get('/search/:lec', (req, res, next) => {
    const lec = req.params.lec;
    collection.findOne({lec : lec})
            .then((data) => {
                if(!data) return res.status(404).send('The lecture not found') ;
                res.send(data);
            }).catch((err) => {

                res.status(500).send(err.message);
            });
});

router.post('/', (req, res, next) => {
    const lec = req.body;
    collection.insertOne(lec)
                .then(() => res.send(lec))
                .catch((err) => res.status(500).send(`Can't insert the lecture: ${lec}`));

})

router.put('/', (req, res, next) => {

    const lec = req.body;
    console.log(lec.name);
    collection.updateOne({lec : lec.name}, lec)
            .then(() => collection.findOne({lec : lec.name}))
            .then((data) => res.send(data))
            .catch((err) => res.status(500).send(`Can't update lecture: ${lec}`))
})

module.exports = parRequest;