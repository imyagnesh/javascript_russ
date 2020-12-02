// const users = [
//   {
//     name: "yagnesh",
//   },
//   {
//     name: "russ",
//   },
// ];

// console.table(users);

// iterators
// old javascript
// for loop
// while loop
// do while loop
// foreach loop

// new javascript
// map loop
// reduce loop
// for in loop
// for of loop

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.length)

// for (let index = arr.length - 1; index >= 0; index--) {
//     console.log(index);
//     console.log(arr[index])
// }

// for (let index = 0; index < arr.length; index = index + 2) {
//     console.log(index)
// }

// for (let index = 2; index < arr.length; index++) {
//     console.log(index)
//     console.log(arr[index])
// }

// while

// let index = 0;
// while (index < arr.length) {
//     console.log(arr[index])
//     index++;
// }

// while (false) {
//     console.log('hello')
// }

// let index  = 0;
// do {
//     if(arr.length === 0) {
//         console.log('there is no data')
//     }

//     console.log(index)

//     index++;
// } while (index < arr.length);

// arr.forEach(function(value, index) {
//     console.log(value);
//     console.log(index)
// });

// let i = 5;

// console.log(++i)
// console.log(i)

// const arr = [...Array(10000000).keys()]

// console.time('for')
// for (let index = 0; index < arr.length; index++) {
// }
// console.timeEnd('for')

// console.time('while')
// let index = 0
// while (index < arr.length) {
//     index++
// }
// console.timeEnd('while')

// console.time('dowhile')
// let index1 = 0
// do {
//     index1++
// } while (index1 < arr.length);
// console.timeEnd('dowhile')

// console.time('forEach')
// arr.forEach(() => {
// });
// console.timeEnd('forEach')

// const a = { a: 1 };

// console.log(a)

const obj = { a: 1 };

const obj1 = { a: "1" };

console.log(obj.a === obj1.a);

const arr = [4, 5, 6, 7, 8, 9, 10];

const pos = 5;

const neArr = [...arr.slice(0, pos), 2, ...arr.slice(pos)];
console.log("🚀 ~ file: Untitled-1 ~ line 129 ~ neArr", neArr);

// CRUD
// console.log(arr[1]);

// mutable
// immutable

// mutable
// arr.push(6);
// console.log(arr)
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())

// arr.shift();
// arr.unshift(1);
// console.log(arr);

const newArr = [6, ...arr];
console.log("🚀 ~ file: Untitled-1 ~ line 142 ~ newArr", newArr);

// console.log(arr)

const arr = [1,2,3,4,5,3];

const [ ,,...rest ] = arr;
console.log(rest)


const index = arr.findIndex(function(item, index) {
    return item === 3;
});

// add Item
const updatedArray = [
    ...arr.slice(0, index + 1),
    6,
    ...arr.slice(index + 1)
];

// replace Item
const updatedArray1 = [
    ...arr.slice(0, index),
    6,
    ...arr.slice(index + 1)
];

// remove Item
const updatedArray2 = [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
];








