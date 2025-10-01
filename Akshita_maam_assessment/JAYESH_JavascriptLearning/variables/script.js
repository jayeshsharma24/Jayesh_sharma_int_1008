// let name = "Jayesh";
// let age = 25;
// document.getElementById("demo").innerHTML = "My name is " + name + " and I am " + age + " years old.";
// function GetName(data){
//     return data;
// }
// name = GetName("Sonal")
// document.getElementById("demo1").innerHTML = `My name is ${name} and I am ${age} years old.`;
// let name = "Sonal";
// let age = 25;
// document.getElementById("demo").innerHTML = `My name is ${name} and I am ${age} years old.`;
// function getName(name){
//     return name;
// }
// let result = getName("Jayesh");
// document.getElementById("demo1").innerHTML = `My name is ${result} and I am ${age} years old.`;

function submitForm(){
  
let cname = document.getElementById("CustomerName").value;
console.log(cname);
document.querySelector(".CustName").innerHTML = `Customer name is ${cname}`;
}
