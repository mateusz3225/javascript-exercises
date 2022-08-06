const findTheOldest = function(people) {

return people.reduce((oldest , current)=> {
if (!oldest.yearOfDeath){
    oldest.yearOfDeath=new Date().getFullYear();
};
if (!current.yearOfDeath){
    current.yearOfDeath=new Date().getFullYear();
};
    const oldestAge= oldest.yearOfDeath -oldest.yearOfBirth;
    const currentAge= current.yearOfDeath -current.yearOfBirth;
    return oldestAge < currentAge ? current : oldest;


});



}

// Do not edit below this l ine
module.exports = findTheOldest;
