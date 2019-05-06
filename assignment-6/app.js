
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const gRouter = require('./routes/grade');
const iRouter = require('./routes/index');
const errors = require('http-errors')

const app = express();
const port = 1111;
const appStream = fs.createWriteStream(path.join(__dirname,'access.log'), {flags : 'a'});

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(morgan('combined', {stream:appStream}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))
//routers
app.use('/grades', gRouter);
app.use('/', iRouter);


app.use((req, res, next) => {
    next(errors(404, 'url not found ${req.path}'));
});


app.use((error, req, res, next) => {

   // console.log("I am here")
    //console.log("Here I am"+error);
    res.status(error.status || 500);
    res.send('${error.status} : ${error.message}');
});

app.listen(port, () => console.log(`Express application started and runs with port : ${port}`))