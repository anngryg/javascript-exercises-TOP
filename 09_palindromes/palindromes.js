const palindromes = function (input) {
       let lowerCase = input.toLowerCase();
       let replace = lowerCase.replace(/[^a-z0-9]/g, "")
       let split = replace.split('');
       let reverse = split.reverse();
       let join = reverse.join('');
       if(join===replace){
        return true;
       }else{
        return false;
       }

};

// Do not edit below this line
module.exports = palindromes;
