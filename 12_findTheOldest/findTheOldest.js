const findTheOldest = function(array) {
let oldest = array[0]

for (let i = 1; i< array.length; i += 1) {
  if (getage(array[i]) > getage(oldest)) {
    oldest = array[i]
  }
}

return oldest;
};

function getage(person) {
  if (!person.yearOfDeath) {
      person.yearOfDeath = 2022
  }
  return person.yearOfDeath - person.yearOfBirth
};
  

// Do not edit below this line
module.exports = findTheOldest;
