const repeatString = function(string, num) {
    let phrase = '';
    if (num < 0){
        return 'ERROR';
    }
    for(let i = 1; i <= num; i++){
        phrase += string;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
