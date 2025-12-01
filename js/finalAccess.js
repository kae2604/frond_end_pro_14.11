'use strict';

let userConditions = isAccess === "Access granted";
let orderConditions = order.isPaid || balance > numberTotal;
let systemConditions = fontSizeNumber > 12 && (systemSettings.language === "en" || systemSettings.language === "uk");
let BlockConditions = null;
let finalAccess = null;

if (userConditions && orderConditions && systemConditions) {
    finalAccess = "Full access granted";
} else {
        if (!userConditions){
            BlockConditions = "Access was blocked by USER_CONDITIONS";
        } else if (!orderConditions){
            BlockConditions = "Access was blocked by ORDER_CONDITIONS";
        } else if (!systemConditions) {
            BlockConditions = "Access was blocked by SYSTEM_CONDITIONS";
        }
    finalAccess = `"Access denied" [${BlockConditions}]`;
}

console.log(finalAccess);

