
const express = require('express');
const axios = require('axios');
const url = require('url');

const app = express();
const port = 3000;
const myurl = 'https://randomuser.me/api/?results=10';

app.enable('case sensitive routing');
app.enable('trust proxy');
app.enable('strict routing')
app.disable('x-powered-by')

function parseSourceUrl(r) {
    const page = r.query.page || 1;
    const jsonUrl = new URL(myurl)
    jsonUrl.searchParams.append('page', page);

    return jsonUrl.toString();
}


app.get('/users', (req, res) => {
    const sourceUrl = parseSourceUrl(req);
    console.log("I have received a request and my source url is: "+sourceUrl)
    fetchData(sourceUrl, req, res);
}).listen(port, ()=> console.log('Listening and started with my port : '+port))

function pagination(req, res){

    const query = req.query;

    const uObj = {
        protocol : req.protocol,
        hostname: req.hostname,
        port : port,
        pathname : req.path,
        query : query
    };

    const page = parseInt(query.page || 1);
    const previousPage = page -1 ;
    const nextPage = page +1;

    const links = {};
    if(previousPage > 0){
        query.page = previousPage;
        uObj.query = query;
        links.last = url.format(uObj);
    }
    query.page = nextPage;
    uObj.query = query;
    links.next = url.format(uObj)

    res.links(links);
}

//fetch the data
async function fetchData(url, req, res){

    console.log("I am here")
    try{
        const dataResponse = await axios.get(url);
        sendData(dataResponse, req, res);
    }catch(err){

        console.log(err);
        res.end(err);
    }
}

//send data 
function sendData(resu, req, res){

    pagination(req, res);
    res.set({
        'Cache-Control' : 'private, max-age=86400',
        'Last-Modified' : new Date()});
       // console.log(resu)

    res.send(resu.data)
}