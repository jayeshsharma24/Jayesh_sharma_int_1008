document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        let customerName = prompt("Please enter your name:");
        let items = [];
        let AddMoreItems = true;

        while (AddMoreItems) {
            let item = prompt("Enter the coffee you want to order:");
            if (item) {
                items.push(item.trim().charAt(0).toUpperCase() + item.trim().slice(1));
            }
            AddMoreItems = confirm("Do you want to add more Coffees?");
        }
        if(items.length === 0) {
            document.getElementsByClassName('result')[0].innerHTML = `No items entered. Order skipped!`;
            document.getElementsByClassName('message')[0].innerHTML = `Hello ${customerName}! You have not ordered anything.`;
        } else {
            document.getElementsByClassName('result')[0].innerHTML = `${items.join(', ')}`;
            document.getElementsByClassName('message')[0].innerHTML = `Hello ${customerName}! Your order [${items.join(', ')}] will be ready soon`;
        } 
        
        let ordersObject = {
            name: customerName,
            items: items
        };
        console.log(ordersObject);
    });
});
// let items = ['Espresso', 'cappuccino', 'Latte', 'Bru Coffee', 'nescafee'];
// for(let i of items){
//     console.log(i);
// }


