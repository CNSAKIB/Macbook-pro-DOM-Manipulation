// funtion to displayCost 
function displayCost(displayId, price) {

    const costText = document.getElementById(displayId);
    costText.innerText = price;
    const displayCost = parseInt(costText.innerText);

    // Calling totalCost Funtion 

    totalCost()
}

// Calculating individual Cost 

function individualCost(product) {

    const individualCostDisplay = document.getElementById(product + 'Cost');
    const individualCostText = individualCostDisplay.innerText;
    const individualCostAmount = parseInt(individualCostText);
    return individualCostAmount;

}

// calcualting total cost 

function totalCost() {

    const totalMemoryCost = individualCost('memory');
    const totalStorageCost = individualCost('storage');
    const totalDeliveryCost = individualCost('delivery');
    const subtotal = totalMemoryCost + totalStorageCost + totalDeliveryCost + 1299;
    // updating totalcost display 

    const elements = document.getElementsByClassName('total-cost');
    for (const element of elements) {

        element.innerText = subtotal;

    }

}

// Handling Event Memory Cost 

document.getElementById('memory8Gb').addEventListener('click', function () {

    const memory8gbCost = displayCost('memoryCost', '0');

})
document.getElementById('memory16Gb').addEventListener('click', function () {

    const memory16gbCost = displayCost('memoryCost', '180');


})

// Handling Event For Storage Button 

document.getElementById('storage256Gb').addEventListener('click', function () {

    const storage256GbCost = displayCost('storageCost', '0');


})

document.getElementById('storage512Gb').addEventListener('click', function () {

    const storage512GbCost = displayCost('storageCost', '100');


})
document.getElementById('storage1TB').addEventListener('click', function () {

    const storage1TBCost = displayCost('storageCost', '180');


})

// Delivering Event Handler

document.getElementById('freeDelivery').addEventListener('click', function () {

    const freeDelivery = displayCost('deliveryCost', '0');


})
document.getElementById('paidDelivery').addEventListener('click', function () {

    const paidDelivery = displayCost('deliveryCost', '20');

})

// Apply Promo Code event handler

document.getElementById('apply-button').addEventListener('click', function () {

    const promoFeild = document.getElementById('promo-feild');
    const promoFeildValue = promoFeild.value;

    if (promoFeildValue == 'stevekaku') {

        // Calculating Total Amount

        const displayTotal = document.getElementById('final-cost');
        const promoValue = parseInt(displayTotal.innerText);
        const applyPromo = promoValue * 0.2;
        const totalAmount = promoValue - applyPromo;
        displayTotal.innerText = totalAmount;
        // Hinding the apply button
        document.getElementById('apply-button').style.display = 'none';
    }
    promoFeild.value = '';
})