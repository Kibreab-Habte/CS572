const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const lecRoute = require('./route/lectures')

const port = process.env.PORT || 4000;
const myDBUrl = 'mongodb://localhost:27017';
const client = new MongoClient(myDBUrl, {useNewUrlParser : true});

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Connected, I am at home'));

 app.use('/api/lectures', (req, res, next) => {
     lecRoute(client, req, res, next);
});

//app.use('/api/lectures',require("./route/lectures"))

app.use((err, req, res, next) => {

    console.log(err);
    res.status(err.status || 500).send(err.message);

});

app.listen(port, () => {
    connectToDb();
    console.log(`Sever started and running on port: ${port}`)
});

function connectToDb(){
    client.connect().then(() => console.log('connected to DB'))
            .catch((err) => {
                client.close()
                console.log(err.message)
            })
        }

process.on('exit', (d) => {
    console.log(d);
    client.close();
})