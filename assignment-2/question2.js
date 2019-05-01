
Array.prototype.odd = function(){

    setTimeout(() => {
        let result = this;
        console.log(result.filter(num => num % 2 == 1))
    },500)
}


Array.prototype.even = function (){

    setTimeout(() => {
        let result = this;
        console.log(result.filter(num => num % 2 == 0))
    }, 500)
}

console.log('start');

[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();

console.log('end')