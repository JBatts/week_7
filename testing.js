// What is a JS testing framework?
// A pile of JS code for testing JS
// e.g Chai, Nose
// Unit Testing - Testing a Single Unit (e.g. a function)
// Not Black Box testing which test the whole application from the outside

function testMe(a, b) {
    return a * b;
}

// console.log(testMe(10, 9)); // Expect 90
testData = [
    { inputs: [1, 10], output: 10 },
    { inputs: [2, 10], output: 20 },
    { inputs: [3, 10], output: 30 },
    { inputs: [4, 10], output: 40 },
    { inputs: [5, 10], output: 50 },
    { inputs: [6, 10], output: 60 },
    { inputs: [7, 10], output: 70 },
    { inputs: [8, 10], output: 80 },
    { inputs: [9, 10], output: 90 },
    { inputs: [10, 10], output: 1100 },
];

// specific on-liner without runner function
testData.forEach((t, i) => console.log(i, testMe(...t.inputs) === t.output ? "Pass" : "Fail"));
// Generic one liner definition of generic runner function
const runner1 = (fn,ioList)=> ioList.forEach((t,i) => console.log(i, fn(...t.inputs) === t.output ? "Pass" : "Fail"))
runner1(testMe, testData); // use runner1

function runner(fn, ioList){
    ioList.forEach((test, i) => {
        result = fn(...test.inputs); // ... spread ,
        success = result === test.output; // Math expected?
        if(success){
            console.log("you did it", i)
        } else {
            console.log("That shit dont work", i)
        }
    });
}

runner(testMe, testData)

function solution(number){
  let i = 0 
  const divisible = 3 % 3 || 5 % 5
  if (i < number){
    i++
    if(i == divisible){
      return i
    }
  }
}