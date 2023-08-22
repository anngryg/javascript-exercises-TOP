
const findTheOldest = function(arr) {
    let sort = arr.sort(function(a,b){
    liveda = a.passed - a.year;
    livedb = b.passed - b.year;

    if(liveda>livedb){
        return 1;
    }else{
        return -1;
    }
})
return sort.pop()
};

// Do not edit below this line
module.exports = findTheOldest;
