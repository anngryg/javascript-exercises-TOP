const fibonacci = function(num) {
    if (num===0){
        return 0;
    }else if (num<0){
        return error;
    }else{
        let firstPrev = 1;
        let secondPrev = 0;
        for (let i=2; i<=num; i++){
            let current = firstPrev + secondPrev;
            secondPrev=firstPrev;
            firstPrev=current;
        }
        return firstPrev
    }
    
};
console.log(fibonacci(8))
// Do not edit below this line
module.exports = fibonacci;
