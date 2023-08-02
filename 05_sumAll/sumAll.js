const sumAll = function(x,y) {
    let output = 0;
        for(i=x; i<=y; i++){
            output = output + i;
        }
    
    return output;
};
console.log(sumAll(3,5))
// Do not edit below this line
module.exports = sumAll;
