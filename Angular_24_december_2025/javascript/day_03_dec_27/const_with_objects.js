const arr = [10, 20]; // arr = a1b2bc3(address of the array)
arr[0] = 15;
delete arr[1];
arr.push(30);
console.log(arr); // [ 15, undefined, 30 ]

// arr = [100,200]; // assign a new array to the variable arr

const user = { name: 'sanjay', address: 'Bangalore' };
user['name'] = 'Venkat';
delete user.address;
user.role = 'Admin';
console.log(user);

// user = {name:'deepak'} // assign a new object