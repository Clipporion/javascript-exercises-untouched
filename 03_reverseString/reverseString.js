const reverseString = function(string) {
  let stringArray = string.split("");
  let reverseArray = [];
  for (let i = stringArray.length; i >= 0; i--) {
    reverseArray.push(stringArray[i])
  }
  return reverseArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
