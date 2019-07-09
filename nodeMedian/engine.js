const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const tst = /^[\d]+$/
let mode = true
let numberOfDigits = false
let nums = [];

const median = () => {
  const toCalc = [];
  nums.forEach((item) => {
    toCalc.push(parseInt(item));
    console.log(calculateMedian(toCalc))
  })
  nums = [];
  ask()
}

const calculateMedian = (nums) => {
  let sorted = nums.sort()
  console.log('nums',nums);
  return !(sorted.length % 2) ? (sorted[(sorted.length / 2) -1] + sorted[(sorted.length / 2)]) / 2 : sorted[Math.floor(sorted.length / 2)]
}

const inputDigits = () => {
  if(numberOfDigits--){
    readline.question(``, (num) => {
      if(tst.test(num)){
        nums.push(num)
      }else{
        ++numberOfDigits;
        console.log('wrong number, pls repeat')
      }
      inputDigits()
    })
  } else {
    median(nums)
  }
}

const ask = () => {
  readline.question(`Number of digits?`, (num) => {
    if(tst.test(num)){
      mode = false;
      numberOfDigits = num
      inputDigits()
    } else {
      ask()
    }
  })
}

module.exports = {
  ask,
  inputDigits,
  calculateMedian,
  median
}
