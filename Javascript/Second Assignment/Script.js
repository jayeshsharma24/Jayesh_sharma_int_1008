 let fullName = prompt("Enter your Full Name");

//   let fullName = "Jayesh sharma";
  let name = fullName.replace(/\s+/g, "");
let userName = `@${name}${name.length}`;
// console.log(userName);

document.getElementById("result").innerHTML = userName;