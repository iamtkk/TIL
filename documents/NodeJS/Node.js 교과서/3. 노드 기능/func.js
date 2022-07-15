// const value = require('./var');
// console.log(value);

// console.log(value.odd);
// console.log(value.even);

const { odd, even } = require('./var');

function checkOddOrEven(number){
  if(number % 2){
    return odd;
  }else{
    return even;
  }
}

module.exports = checkOddOrEven;