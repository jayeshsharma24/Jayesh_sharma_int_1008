let markBMI=0;
let johnBMI = 0;
let markHeight = prompt("Enter the height of mark in meter."); //In meter.
let markWeight = prompt("Enter the weight of mark in Kg"); // In Kg.

let johnHeight = prompt("Enter the height of john in meter");
let johnWeight = prompt("Enter the Weight of john in Kg");

markBMI = markWeight/markHeight**2;
johnBMI = johnWeight/johnHeight**2;

console.log("   The BMI of Mark :",markBMI);
console.log("The BMI of John :",johnBMI);

if(markBMI > johnBMI){
    let markHigherbmi = true;
    console.log("BMI Of Mark is Higher than john :",markHigherbmi);
}else if (johnBMI > markBMI){
    let johnHigherbmi = true;
    console.log("BMI Of John is higher than Mark :",johnHigherbmi);
}
