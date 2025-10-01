// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((x)=>{
//     console.log(x*x);
// });

//--------------------------------Filter Method----------------------------------
// let marks = [91,85,96,45,84,75,62];
// let marksMoreThanNinety = marks.filter((x)=>{
//     return x>90;
// });
// console.log(marksMoreThanNinety);

//--------------------------------reduce Method----------------------------------
let n = parseInt(prompt("enter the value of n"));
// let n = 25;
let arr = [];
for(let i = 1;i<=n;i++){
    
    arr.push(i);
    
}
console.log(arr);
let sum = arr.reduce((p,n)=>{
return p+n;
}
);
console.log(`the sum of all elements of the array is ${sum}`);