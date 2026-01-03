let a = { x: 10, y: 20 };
let b = [10, 20, 30]
console.log(typeof a , typeof b); // object object

console.log(Array.isArray(a)); // false
console.log(Array.isArray(b)); // true