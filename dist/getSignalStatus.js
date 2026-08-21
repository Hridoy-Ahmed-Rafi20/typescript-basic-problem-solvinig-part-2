"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (strength) => {
    let status = "";
    if (strength >= 0 && strength <= 20) {
        status = "Weak";
    }
    else if (strength >= 21 && strength <= 50) {
        status = "Fair";
    }
    else if (strength >= 51 && strength <= 80) {
        status = "Good";
    }
    else {
        status = "Excellent";
    }
    return status;
};
getSignalStatus(10);
// "Weak"
getSignalStatus(35);
// "Fair"
getSignalStatus(65);
// "Good"
getSignalStatus(95);
// "Excellent"
//# sourceMappingURL=getSignalStatus.js.map