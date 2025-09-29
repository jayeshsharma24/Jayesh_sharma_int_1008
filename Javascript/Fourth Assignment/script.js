
console.log("Enter the score of Dolphins");

let a = prompt("Enter the first score");
let a1 = parseInt(a, 10);

let b = prompt("Enter the Second score");
let b1 = parseInt(b, 10);

let c = prompt("Enter the Third score");
let c1 = parseInt(c, 10);

console.log("Enter the score of Koalas");

let d = prompt("Enter the first score");
let d1 = parseInt(d, 10);

let e = prompt("Enter the Second score");
let e1 = parseInt(e, 10);

let f = prompt("Enter the Third score");
let f1 = parseInt(f, 10);

let SumD = a1 + b1 + c1;
let avgD = SumD / 3;
console.log("the average of dolphin is :" + avgD);

let SumK = d1 + e1 + f1;
let avgK = SumK / 3;
console.log("the average of dolphin is :" + avgK);

if (avgD >= 100 || avgK >= 100) {
    if (avgD > avgK) {
        console.log("the winner is :: Dolphine");
    } else if (avgK > avgD) {
        console.log("the winner is :: Koalas");
    } else if (avgK == avgD || (avgK >= 100 && avgD >= 100)) {
        console.log("Draw match !!!  Better luck next time");

    } else {
        console.log("Try again bro !!!");
    }
    
}else {
    console.log("Sorry the average of three score is less than 100");
}

