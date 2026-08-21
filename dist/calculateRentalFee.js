"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateRentalFee = (vehicle, minutes) => {
    let scooterUnlockFee = 10;
    let ebikeUnlockFee = 15;
    let mopedUnlockFee = 25;
    let scooterCostperMinute = 2;
    let ebikeCostperMinute = 3;
    let mopedCostperMinute = 5;
    let fee = 0;
    if (vehicle === "scooter") {
        fee = scooterUnlockFee + minutes * scooterCostperMinute;
    }
    else if (vehicle === "ebike") {
        fee = ebikeUnlockFee + minutes * ebikeCostperMinute;
    }
    else {
        fee = mopedUnlockFee + minutes * mopedCostperMinute;
    }
    return fee;
};
calculateRentalFee("scooter", 20);
// 50    (10 + 20 x 2)
calculateRentalFee("ebike", 20);
// 75    (15 + 20 x 3)
calculateRentalFee("moped", 20);
// 125   (25 + 20 x 5)
//# sourceMappingURL=calculateRentalFee.js.map