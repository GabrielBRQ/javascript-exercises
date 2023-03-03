const findTheOldest = function(people) {
    let oldest = [];
    let oldestAge = 0;
    let age = 0;
    for(let i = 0; i < people.length; i++){
        age = calcAge(people[i]);
        if (age > oldestAge){
            oldestAge = age;
            oldest = people[i];
        }
    }
    return oldest;
};

function calcAge(person){
    if (person.yearOfDeath == undefined){
        var date = new Date().getFullYear();
        return date - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;
