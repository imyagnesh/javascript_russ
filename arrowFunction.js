// console.log(add(1,2))


// named function

// ECMA SCRIPT 5
// function add(a, b) {
//     return a + b;
// }


// anonymous function
// const add = function(a,b) {
//     return  a + b
// }

// andvance javacript
// es6 -> ECMA SCRIPT 6
// ES2020 -> ES10  -> ECMA SCRIPT 10
// Arrow function
const add = (a, b) => a + b;

const arr = [1,2,3,4,5]
// const index = arr.findIndex(function(item) {
//     return item === 3;
// });

// const index = arr.findIndex(item => item === 3)
console.log("🚀 ~ file: Untitled-1 ~ line 29 ~ index", index)

// if curly bracket is there then you have to write return statement
// without curly bracket it will consider default return
// if only 1 parameter then no need of round brackets
// occupy less memory compare to normal function

console.log(add(1, 2))

// motive behind advance javascript

// 1. smoothen the development for complex operation
// -> Added new function/ feature
// 2. resolve the issues of old javascript
// 3. use for corporate projects

// spread operator

// function chaining

// const calculator = (operator, ...rest) => {
//   let result = 0;
//   switch (operator) {
//     case "add":
//       for (let i = 0; i < rest.length; i++) {
//         result += rest[i];
//       }
//       break;
//     case "sub":
//       for (let i = 0; i < rest.length; i++) {
//         result -= rest[i];
//       }
//       break;
//     case "mul":
//       for (let i = 0; i < rest.length; i++) {
//         result *= rest[i];
//       }
//       break;

//     default:
//       break;
//   }

//   return result;
// };

// fixe your code
// create reuable code
// code will never break.
const calc = (...rest) => {
    return (operation) => {
      return operation(...rest);
    };
  };
  
  const add = (...rest) => {
    let result = 0;
    for (let i = 0; i < rest.length; i++) {
      result += rest[i];
    }
    return result;
  };
  
  const sub = (...rest) => {
    let result = 0;
    for (let i = 0; i < rest.length; i++) {
      result -= rest[i];
    }
    return result;
  };
  
  const mul = (...rest) => {
      asdfaf
    };
  
  console.log(add(1, 2, 3, 4, 5, 6));
  
  console.log(calc(1, 2, 3, 4)(sub));
  // console.log(calculator("add", 1, 2, 3));
  





