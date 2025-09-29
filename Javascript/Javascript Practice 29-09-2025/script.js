function show(messages){
    let result = document.querySelector(".message");
    result.innerHTML += messages + "<br>";
}

document.querySelector(".message").style.color = "red";


function chopVegitables() {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let success = true;
                if (success) {
                    resolve("Chopped Vegitable ✅");
                } else {
                    reject("The vegitables are not yet chopped !!! ❌")
                }
            }, 1000);
        })
    }
    catch {
        // console.log(error)
        console.log("Error in 1st Step ❌");
    }

}

function cookMeal() {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let success = true;
                if (success) {
                    resolve("Cooked the meals ✅");
                } else {
                    reject("The meals are not cooked yet ❌")
                }
            }, 1500);
        })
    } catch {
        console.log("Error in 2nd Step ❌");
        // console.log(error);
    }

}

function setTable() {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let success = true;
                if (success) {
                    resolve("Table is set ✅");
                } else {
                    reject("The table is not yet set ❌")
                }
            }, 1000);
        })
    } catch {
        // console.log(error);
        console.log("Error in 3rd Step ❌");
    }

}

async function display() {
    let case1 = await chopVegitables()
    show(case1);
    let case2 = await cookMeal()
    show(case2);
    let case3 = await setTable();
    show(case3);

    show("Finnaly dinner is ready ✅");
}

// display()