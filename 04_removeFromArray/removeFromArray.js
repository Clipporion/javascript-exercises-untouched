const removeFromArray = function(input,...args) {

for (let i = 0; i < input.length; i++) {
  for(arg of args){
  if (input[i] === arg) {
    input.splice([i],1);
    i -= 1;
  }
}
}
return input;
};

// Do not edit below this line
module.exports = removeFromArray;
