const removeFromArray = function(arr) {
    const arg = Array.prototype.slice.call(arguments, 1);
    for (word of arg){
        while (arr.find((search) => search === word)){
            const index = arr.findIndex((search) => search === word);
            arr.splice(index,1);
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
