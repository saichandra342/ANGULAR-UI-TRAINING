// let employees = [
//     { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
//     { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
//     { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
//     { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
// 	   { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
//   ];

// 1. declare array of employees & sort them in ascending order (empId)

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
employees.sort();
console.log(employees)
employees.sort((e1, e2) => e1.eId - e2.eId);
console.log(employees)

// 2. declare array of employees & sort them in ascending order by name.

employees.sort((e1, e2) => {
    if (e1.name < e2.name) return -1;
    if (e1.name > e2.name) return 1;
    return 0;
});
console.log(employees)

// 3. declare array of employees & filter the employees whose sal>6000;

let highSalaryEmployees = employees.filter((emp) => {
    return emp.sal > 6000;
});

console.log(highSalaryEmployees);

// 4. declare array of employees & increase sal of every employee by 500;

let updatedEmployees = employees.map((emp) => {
    emp.sal = emp.sal + 500;
    return emp;
});

console.log(updatedEmployees);

// 5. declare array of employees & increase sal of every employee 10%

let updatedEmployees1 = employees.map((emp) => {
    emp.sal = emp.sal + (emp.sal * 0.10);
    return emp;
});

console.log(updatedEmployees1);

// 6. declare array of employees & add "comp:ibm" to every employee;
	   
// 7. add Dept info for each employee
//     employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				   { eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	   departments = [{ eId: 101, dept: "sales" },
// 				     { eId: 104, dept: "marketing" }]

// 8. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	   output = {10:2, 20:1, 30:2 , 40:1, 50:2}

// 9. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

// 10. Find the total salary of all 'Male' employees 

