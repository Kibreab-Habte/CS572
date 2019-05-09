const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const simpleEncrptor = require('simple-encryptor');

const urlDB = 'mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01';
const client = new MongoClient(urlDB, {userNewUrlParser : true});

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('The secret word, reveal it!!!!!')
});

app.get('/secret', (req, res) => {
    secretMessage(res);
});

app.listen(port, () => console.log(`Started and running on port ${port}`));

function secretMessage(res) {
    client.connect((err) => {
        dbConnHandler(err, res);
    });
}

function dbConnHandler(err, res) {

    if(err){
        console.log(err);
        res.end(err.message);
    }
    const db = client.db('homework01');
    const collection = db.collection('data');
    const proj = {projection : {key : 1, message : 1, _id : 0}};

    collection.findOne({}, proj).then((d) => {
        client.close();
        const message = decoMessage(d);
        res.send({message});
    }).catch((err) => {
        client.close();
        console.log(err);
        res.send(err.message);
    });
}

function decoMessage(myData) {
    const {key, msg} = myData;
    const encrypt = simpleEncrptor(key);
    return encrypt.decrypt(msg);
}