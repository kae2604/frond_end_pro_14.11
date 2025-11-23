// This code completes the task that was given in the homework.

'use strict';

let price = +prompt('Enter a price');
let discount = +prompt('Enter a discount');

if (!isNaN(price) && price > 0 && !isNaN(discount) && discount >= 0 && discount <=100){
    alert(`Starting price ${price};
discount  ${discount}%;
Discounted price ${price-(price*discount/100)}.`)
}
else {
    alert('You entered incorrect data');
}





// I decided to create a more complex solution to handle different scenarios.
// For example, when the user clicks “OK”, “Cancel”, or enters invalid data.


//
// 'use strict';
//
// let priceInput = prompt('Enter a price');
//
// if (priceInput === null || priceInput === '') {
//     alert( 'You did not enter any price number');
// }
//     let price = +priceInput;
//
//
// let discountInput = prompt('Enter a discount');
//
// if (discountInput === null || discountInput === '') {
//     alert( 'You did not enter any discount number');
// }
//     let discount = +discountInput;
//
//
// if (!isNaN(price) && price > 0 && !isNaN(discount) && discount >= 0 && discount <=100){
//     alert(`Starting price ${price};
// discount  ${discount}%;
// Discounted price ${price-(price*discount/100)}.`)
// }
// else {
//     alert('You entered incorrect data');
// }
//
//  if(price < 0 || isNaN(price)) {
//     alert('you entered incorrect price');
// }
//   if(discount < 0 || discount > 100 || isNaN(discount)){
//     alert('you entered incorrect discount');
// }
//


