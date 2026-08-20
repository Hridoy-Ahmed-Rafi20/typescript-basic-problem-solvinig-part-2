"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    let permission;
    if (role === "admin") {
        permission = true;
    }
    else if (role === "editor") {
        permission = true;
    }
    else {
        permission = false;
    }
    return permission;
};
canEdit("admin");
canEdit("editor");
canEdit("viewer");
//# sourceMappingURL=canEdit.js.map