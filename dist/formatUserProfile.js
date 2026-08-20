"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatUserProfile = (user) => {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
};
console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka",
}));
console.log(formatUserProfile({
    name: "Hridoy",
    age: 20,
    city: "Brahmanbaria",
}));
//# sourceMappingURL=formatUserProfile.js.map