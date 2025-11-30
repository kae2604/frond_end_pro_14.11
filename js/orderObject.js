'use strict';

const order = {
    total: "950",
    currency : "$",
    isPaid : true,
    delivery : "yes",
    priority : "1"
}

const numberTotal = Number(order.total);
const isDelivery = order.delivery === "yes";
const whatPriority = !!(Number(order.priority));
const bigOrder = numberTotal > 1000;

let statusOrder = null;

if (!order.isPaid){
    statusOrder = "Order is not paid";
} else {
    if (bigOrder) {
        statusOrder = "High-value paid order";
    }
    else if (isDelivery) {
        statusOrder = "Paid order with delivery";
    } else {
        statusOrder = "Paid order without delivery";
    }
}

if (whatPriority){
    statusOrder = `${statusOrder}, [PRIORITY]`
}

const isTotalString = order.total == numberTotal;
const isTotalNumber = order.total === numberTotal;

console.log(statusOrder);
console.log("total == numberTotal ", isTotalString);
console.log("total === numberTotal ",isTotalNumber);


