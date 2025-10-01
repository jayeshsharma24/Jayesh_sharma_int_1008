function GettingOutput(output){
    let result = document.querySelector(".message");
    result.innerHTML += output +"<br>";
}

function AllClear(){
    let result = document.querySelector(".message");
    result.remove();
}

function PrepareBreakfast(){
    return  new Promise((resolve,reject)=>{
        let success = true;
        if(success){
            setTimeout(()=>{ resolve("Prepare BreakFast")},1000);
        }else{
            reject("Prepare breakfast stage failure is their !!")
        }
        
    })
}

function WashDish(){
    return  new Promise((resolve,reject)=>{
        let success = true;
        if(success){
            setTimeout(()=>{ resolve("Washing the Dish ")},2000);
        }else{
            reject("Dish Washing stage failure is their !!")
        }
        
    })
}

function makeCoffee(){
    return  new Promise((resolve,reject)=>{
        let success = true;
        if(success){
            setTimeout(()=>{ resolve("Coffee Making Start")},3000);
        }else{
            reject("Coffee Making Stage stage failure is their !!")
        }
        
    })
}

async function display(){
    let case1 = await PrepareBreakfast()
    GettingOutput(case1);

    let case2 = await WashDish()
    GettingOutput(case2)

    let case3 = await makeCoffee()
    GettingOutput(case3)

    GettingOutput("All Stages are executed completely");
}



// display();