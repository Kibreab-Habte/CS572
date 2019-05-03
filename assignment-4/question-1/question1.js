
const {Observable} = require('rxjs');
const os = require('os');

//system memory information
let cpu = os.cpus();
let numOfCores = cpu.length;
let ramSize = os.totalmem()/(1024*1024*1024)   //convert to GB

//required function
let checkSystem = ()=>{
    return Observable.create((observer)=>{
        observer.next({
            cpu, numOfCores, ramSize
        });
    });
};

//out-puting based on the conditions
checkSystem().subscribe(data => {
    console.log('Checking your system...')
    if(data.numOfCores < 2){
        console.log("Processor is not supported1")
    }else if(data.ramSize < 4){
        console.log('This app needs at least 4 GB of RAM')
    }else {
        console.log('System is checked successfully')
    }
});