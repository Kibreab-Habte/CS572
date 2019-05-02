

const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type' : 'text/plain'});
    const myData = fs.readFileSync(path.join(_dirname,'info.txt'));
    
    readMyFileSync(myData, res);
    readMyFileAsync(myData, res);
    readMyFileStream(myData, res);

}).listen(1339, () => console.log('server started, listening 1339'))


//file reading using sync
function readMyFileSync(path, resp){
    const d = fs.readFileSync(path);
    resp.write(d);
}

//reading file using async
function readMyFileAsync(path, resp){

    fs.readFile(path, (err, data) => {

        if(err) console.log(err);
        else resp.write(data);
    });
}
//stream file reading
function readMyFileStream(path, resp){
    fs.createReadStream(path).pipe(resp);
}