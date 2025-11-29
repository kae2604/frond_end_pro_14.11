'use strict';

const hasPromoCode = confirm('Do you have a promo code?');
const cartTotal = +prompt('What is the total amount in the cart?');
const isBlackFriday = confirm('Is today Black Friday?');

let isDiscountApplied = (cartTotal >= 100 && hasPromoCode) || isBlackFriday;

if (isDiscountApplied){
    console.log ('Discount applied!');
} else {
    console.log ('Discount not applied!');
}

let noDiscount = !isDiscountApplied;
console.log(noDiscount);








