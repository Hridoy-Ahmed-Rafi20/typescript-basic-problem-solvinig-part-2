"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canAccessOfflineMode(tier) {
    if (tier === "pro") {
        return true;
    }
    else if (tier === "premium") {
        return true;
    }
    else {
        return false;
    }
}
canAccessOfflineMode("free");
// false
canAccessOfflineMode("pro");
// true
canAccessOfflineMode("premium");
// true
// console.log(canAccessOfflineMode("student"));
//# sourceMappingURL=canAccessOfflineMode.js.map