const repeatString = function(string, repeat) {
    if (repeat < 0) {return "ERROR"};
    let stringRepeated ="";
    for (i = 1; i <= repeat ; i++){
        stringRepeated += string;
    };
    return stringRepeated
};

// Do not edit below this line
module.exports = repeatString;
