"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findMenuItemsByTag = (menu, tag) => {
    const getRestaurant = menu.filter((currentMenu) => {
        if (currentMenu.tag === tag) {
            return true;
        }
        else {
            return false;
        }
    });
    return getRestaurant;
};
const menu = [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" },
];
findMenuItemsByTag(menu, "vegan");
// returns the Veggie Bowl and Tofu Wrap objects
findMenuItemsByTag(menu, "gluten-free");
// returns an empty array
findMenuItemsByTag(menu, "spicy");
//# sourceMappingURL=findMenuItemsByTag.js.map