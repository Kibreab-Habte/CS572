
const fs = require('fs');
const url = require('url');

process.on('message', (ur) =>{
    console.log(ur);
    //console.log(typeof ur)
    //let filePath = url.parse(ur, true).query.url;
    //console.log(filePath);
    let fileData = fs.createReadStream(ur);
    let dataFromFile = "";
    fileData.on('data', (chunk) => {
        dataFromFile += chunk;
    });

    fileData.on('end', ()=>{
        process.send(dataFromFile);
    });
});