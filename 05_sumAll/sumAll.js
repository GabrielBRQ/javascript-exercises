const sumAll = function(firstNum, lastNum) {
    let sum = 0;

    if (firstNum > 0 && lastNum > 0 && Number.isInteger(firstNum)
       && Number.isInteger(lastNum)){

        if (firstNum > lastNum){
            for (let i = lastNum; i <= firstNum; i++){
                console.log(i);
                sum += i;
            }
            return sum;
        };

        for (let i = firstNum; i <= lastNum; i++){
            console.log(i);
            sum += i;
        };
        return sum;
    };  
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
