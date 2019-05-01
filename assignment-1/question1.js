
//******************************************************************************************************/
//                          using ES6 features
//******************************************************************************************************/

String.prototype.filterWordsES6 = function(words){
    return this.split(/[ ]/)
    .map(w => words.find(word => w==word) ? "***": w)
    .join(" ");

}
console.log("This house is nice !".filterWordsES6(['house','nice']))

//******************************************************************************************************/
//                                         using Promises
//*************************************************************************************************** */

String.prototype.filterWordsPro = function(words){

    return new Promise((resolve, reject) => {
        resolve(this.split(/[ ]/)
        .map(w => words.find(word => w==word) ? "***" : w)
        .join(" "))
    })
}
console.log("This house is nice !".filterWordsPro(['house', 'nice']))

//******************************************************************************************************/
//              using Async/Await
//******************************************************************************************************/

String.prototype.filterWordsAsyncAwait = async function(words){

    const promise = new Promise((resolve, reject) => {
        resolve(this.split(/[ ]/)
        .map(w => words.find(word => word == w)? "***" : w)
        .join(" "))
    })

    try{

        const result = await promise;
        console.log(result)
    }catch(er){
        console.log(er)
    }
}
"This house is nice !".filterWordsAsyncAwait(['house','nice']);

//******************************************************************************************************/
//                      using observable
//******************************************************************************************************/

String.prototype.filterWords = function(words){
    const {Observable} = rxjs
    let str = this

    const myObs$ = Observable.create(observer=>{
        observer.next(str.split(/[! ]/).map(c=>words.find(el=>c==el)?"*".repeat(c.length):c).join(" "))
    })

    myObs$.subscribe(value=>console.log(value))
}

console.log("This house is so nice!".filterWords(['house','nice']))
