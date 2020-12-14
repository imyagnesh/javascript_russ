export const greet = 'Hello';
export const message = 'This text is from test.js file';
export const add = (a, b) => a + b;

export const text = 'exported text';

const arr = a => {
  console.log(a);
};

console.log(arr(1));

export default { greet, message, add };
