const findTheOldest = function(people) {
    return people.reduce((a, b) => {
        if (!("yearOfDeath" in a)) a.yearOfDeath = new Date().getFullYear();
        if (!("yearOfDeath" in b)) b.yearOfDeath = new Date().getFullYear();
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge > bAge ? a : b;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
