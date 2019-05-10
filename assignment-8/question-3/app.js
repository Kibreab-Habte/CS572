const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT || 4000;
const mumLocation = {latitude: 41.017654, longitude: -91.9665342 };
let dBase;

const app = express();
const client = new MongoClient('mongodb://localhost:27017');

app.use(express.json());
app.use((req, res, next) =>{
    if(!dBase) {
        client.connect((err) => {
            dBase = client.db('mum_locations');
            req.collection = dBase.collection('locations');
            next();
        });
    }else {
        req.collection = dBase.collection('locations')
        next();
    }
});

app.get('/',(req, res) => {
    console.log('Home is here!!!!!!');
    res.send('Home is here, welcome home!!!!!!!!!!!!!!')
})
app.get('/locations', (req, res, next) => {
    req.collection.find({}).toArray((err, data) => {
        res.json({data :data})
    });
});

app.post('locations', (req, res, next)=>{

    const loc = req.body;
    console.dir(loc)
    req.collection.insertOne(loc);
    res.status(200).send(`location inserted: ${loc}`);
});

app.get('/locations/nearMum', (req, res, next)=>{

    req.collection.find({ loc: {$near: [mumLocation.longitude, mumLocation.latitude ]}})
                .limit(3)
                .toArray((err, l) => {
                    console.dir(l);
                    res.json(l);
                });
});

app.listen(port, () => {
    console.log(`I am running form port: ${port}`);
})

process.on('exit', ()=>{

    console.log('Closing!!!!!!!!!!!!')
    client.close();
})