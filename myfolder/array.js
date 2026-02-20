let name = ["Parneet","Kaur","Virk"];
console.log(name);
console.log(name[0]);
console.log(name.length);
console.log(typeof name);
name[3] = "Baddorattia";
console.log(name);
name.push("Preet");
console.log(name);
name.pop("Preet");
console.log(name);
console.log(name.toString());

for (let i = 0;i<=name.length-1;i++){
    console.log(name[i]);
}
//OR
for (let i of name){
    console.log(i.toUpperCase());
}
//OR
for (let i in name){
    console.log(name[i]);
}

let marks = [85,90,78,92];
let totalMarks = 0;
for (let i of marks){
    totalMarks += i;
}
console.log("Total Marks: ",totalMarks);

console.log(name.concat(marks));
name.unshift("Preet");
console.log(name);
let val = name.shift();
console.log(val);
console.log(name);

let students = ['Parneet','Abhey','Kavya','Kashish'];
console.log(students);
console.log(students.slice(1,3));
console.log(students.splice(2,1,"Avish"));