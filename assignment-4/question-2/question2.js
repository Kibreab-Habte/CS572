
const {Subject} = require('rxjs');
const {fork} = require('child_process');
const http = require('http');

const subject = new Subject();

subject.subscribe(sendFile);

function sendFile(reqResData){
    reqResData.res.end(reqResData.data)
}

http.createServer((req, res)=>{
    const childProcess = fork('./fileReader.js')
    childProcess.send('C:/Users/HP/Documents/CS572-MWA/assignments/assignment-4/simple.txt');
    childProcess.on('message', data => {
        subject.next({req, res, data})
    });
}).listen(4000, () => console.log('Listening'))