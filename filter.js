let numbers = [1,2,3,4,5,6];
let evenNums = numbers.filter(num=>num%2===0);
console.log(evenNums);

let marks = [35,80,60,25,90];
let passed = marks.filter(mark=>mark>=40);
console.log(passed);

let students = [
    {name:"Parneet",marks:95},
    {name:"Abhey",marks:100},
    {name:"Virat",marks:40}
];
let topStudents = students.filter(student=>student.marks>70);
console.log(topStudents);