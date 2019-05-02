
//****************************************************************************** */
//                  1. using dns core module, callback function
//****************************************************************************** */
const dns = require('dns');
const domainName = 'www.mum.edu';

function domainToIP(){
    return (err, addre) =>{
        if(err) console.log(err);
    else console.log(addre[0]);
    }
}


dns.resolve(domainName, (err, add) => {
    if(err) console.log(err);
    else console.log(add[0])
});

//****************************************************************************** */
//                  2. using promise object
//****************************************************************************** */
const{promisify} = require('util');

const dnsPromised = promisify(dns.resolve);
dnsPromised(domainName)
        .then((add) => console.log(add[0]))
        .catch((err) => console.log(err));


//****************************************************************************** */
//              3. using async/await
//****************************************************************************** */

async function dnsAsyncAwait (domainName) {

    try{
        const add = await dnsPromised(domainName);
        console.log(add[0]);

    }catch(err) {
        console.log(err)
    }
}
dnsAsyncAwait(domainName);