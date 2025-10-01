
function logMessage(message) {
    const output = document.querySelector(".message1");
    const p = document.createElement("p");
    p.innerText = message;
    output.appendChild(p);
}




function brushTeeth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Brushed Teeth")
            } else {
                reject("You have error in brush teeth function");
            }
        }, 1000);
    })
}

function haveBreakFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Had Breakfast");
            } else {
                reject("You have error in had breakfast function.");
            }
        }, 1500);
    })
}


function goToWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Reached Office");
            } else {
                reject("You have error in goToWork function");
            }
        }, 1000);
    })
}

async function display() {
    try {
        let case1 = await brushTeeth();
        logMessage(case1);
        let case2 = await haveBreakFast();
        logMessage(case2);
        let case3 = await goToWork();
        logMessage(case3);

        logMessage("All task completed successfully ✅");
    }catch(error){
        console.log(error);
    }
   
}
display()