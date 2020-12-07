const arr = [1, 2, 3, 4, 5];

// const arr = [...Array(1000000).keys()]

console.time('findIndex')
const index = arr.findIndex((x) => x === 3);
const uArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
console.timeEnd('findIndex')

// const nArr = arr.fill(1,2, 4)
// console.log(nArr)

// const nArr = arr.copyWithin(2)
// console.log( nArr)




console.time('filter')
const filArr = arr.filter((x) => x !== 3);
console.timeEnd('filter')

// map loop
// *only* update the existing data;
// cant add new record or cant remove existing record
// just use for update existing record
// immutable loop

// multyply all value by 2
const updatedArr = arr.map((element) => element * 2);

// mulply even values by 2 for odd number return as it is
const evenArr = arr.map((element) => {
  // to find even number
  if (element % 2 === 0) {
    return element * 2;
  }
  return element;
});

console.log(evenArr);

console.log(updatedArr);

// to check item is avalable in array
const val = arr.some((element) => {
  return element === 6;
});

let i = 0;
const val1 = arr.every((element) => {
  i++;
  return element === i;
});

const ele = arr.find((element) => element === 3);

console.log(ele);

const fil = arr.filter((element) => element > 2);
console.log("🚀 ~ file: Untitled-1 ~ line 41 ~ fil", fil);

console.log(val1);

console.log("🚀 ~ file: Untitled-1 ~ line 28 ~ val", val);


const arr = [1, 2, 3, 4, 5];

const updatedArr = arr.map((element) => element * 2);
const filData = arr.filter(x => x > 2);
console.log(filData)

// console.log(updatedArr)

const mulArr = arr.reduce((p, c) => [...p, c * 2],[]);

const filRed = arr.reduce((p, c) => c > 2 ? [...p, c] : p, []);

console.log(filRed)

console.log(mulArr)

console.log(object)

// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     sum = sum + arr[index];
// }

// console.log(sum)

// const sum = arr.reduce((p, c) => p + c, 0);
// console.log(sum);

const users = [
  {
    firstName: "Yagnesh",
    lastName: "Modh",
    age: 33,
    gender: "male",
  },
  {
    firstName: "Russ",
    lastName: "Catwright",
    age: 40,
    gender: "male",
  },
  {
    firstName: "Nikol",
    lastName: "kidman",
    age: 25,
    gender: "female",
  },
  {
    firstName: "Kim",
    lastName: "Kedersian",
    age: 30,
    gender: "female",
  },
  {
    firstName: "Dipika",
    lastName: "Padukon",
    age: 28,
    gender: "female",
  },
];

const gb = users.reduce((p, c) => {
    // check c.gender value is exist in p;
    // console.log(p[c.gender])
    if(p[c.gender] === undefined) {
        // if not exist then create new property and add value into that
        return {...p, [c.gender]: [c]}
    } else {
        // if exist then add data(c) in existing data(p[c.gender])
        return {...p, [c.gender]: [...p[c.gender], c]  }
    }
}, {});

// const groupBy = users.reduce(
//   (p, c) =>
//     p[c.gender]
//       ? { ...p, [c.gender]: [...p[c.gender], c] } // Add data in existing array
//       : { ...p, [c.gender]: [c] }, // create new Array and add value
//   {}
// );

console.log(gb)



// {
//     male: [],
//     female: []
// }

// {}

// const obj = {
//     a: 1,
// }

// console.log(obj.a)

// const groupBy = users.reduce(
//   (p, c) =>
//     p[c.gender]
//       ? { ...p, [c.gender]: [...p[c.gender], c] } // Add data in existing array
//       : { ...p, [c.gender]: [c] }, // create new Array and add value
//   {}
// );

// console.log(groupBy);

// const prop = 'profession';

// // dynamic property name
// const newUser = {...users[0], [prop]: 'Trainer'}

// console.log(newUser)

// {
//     male: [],
//     female: []
// }

// const updatedUsers = users.map((user) => ({
//   ...user,
//   fullName: `${user.firstName} ${user.lastName}`,
// }));
// console.log(updatedUsers);

// // const thirtyFive = users.filter(user => user.age > 35);
// // console.log(thirtyFive)

// const russ = users.find((user) => user.firstName === "Russ");
// const index = users.findIndex((user) => user.firstName === "Russ");
// const isRussExist = users.some((user) => user.firstName === "Russ");

// console.log(russ);
// console.log(index);
// console.log(isRussExist);


