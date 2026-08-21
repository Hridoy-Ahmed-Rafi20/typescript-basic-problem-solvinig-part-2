"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateStorageUsage = (currentUsageMB, action) => {
    if (currentUsageMB < action.sizeMB) {
        return 0;
    }
    else if (action.type === "upload") {
        return (currentUsageMB += action.sizeMB);
    }
    else {
        return (currentUsageMB -= action.sizeMB);
    }
};
updateStorageUsage(2000, { type: "upload", sizeMB: 500 });
// 2500
updateStorageUsage(2000, { type: "delete", sizeMB: 800 });
// 1200
updateStorageUsage(300, { type: "delete", sizeMB: 1000 });
// 0
//# sourceMappingURL=updateStorageUsage.js.map