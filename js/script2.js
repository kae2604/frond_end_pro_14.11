'use strict';

const price1 = "120.50$";
const price1Int = parseInt(price1); // 120;
const price1Float = parseFloat(price1); //120.5;
console.log(`"120.50$" -> parseInt: ${price1Int}, parseFloat: ${price1Float}`);


const price2 = "UAH 999";
const price2Int = parseInt(price2); // NaN (Because it's necessary to start a string with a number;
const price2Float = parseFloat(price2); // NaN (Because it's necessary to start a string with a number;
console.log(`"UAH 999" -> parseInt: ${price2Int}, parseFloat: ${price2Float}`);


const height = "180cm";
const heightInt = parseInt(height); // 180;
const heighFloat = parseFloat(height); // 180;
console.log(`"180cm" -> parseInt: ${heightInt}, parseFloat: ${heighFloat}`);


const broken = "abc123";
const brokenInt = parseInt(broken); // NaN (Because it's necessary to start a string with a number;
const brokenFloat = parseFloat(broken);  // NaN (Because it's necessary to start a string with a number;
console.log(`"abc123" -> parseInt: ${brokenInt}, parseFloat: ${brokenFloat}`);


