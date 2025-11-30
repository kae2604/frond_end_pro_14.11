'use strict';

const systemSettings = {
    darkMode : true,
    fontSize : "18",
    language : "en",
    betaAccess : "true"
}

const fontSizeNumber = Number(systemSettings.fontSize);
const isBetaAccess = systemSettings.betaAccess === "true";
const isLargeFont = fontSizeNumber >= 18;

let settings = null;

if (systemSettings.darkMode && isLargeFont){
    settings = "Dark mode + large font";
} else if (systemSettings.darkMode){
    settings = "Dark mode";
} else if (isLargeFont) {
    settings = "Large font";
} else{
    settings = "Default settings";
}

if (isBetaAccess){
    settings = `${settings}, (Beta tester)`;
}

console.log(settings);
