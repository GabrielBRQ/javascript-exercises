const fibonacci = function(position) {
    let fiboArray = [0, 1];
    
    for (let i = 1; i <= position; i++){
        if (i == position){
            return fiboArray[i];
        }
        fiboArray.push(fiboArray[i] + fiboArray[i - 1])
    }
    return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
