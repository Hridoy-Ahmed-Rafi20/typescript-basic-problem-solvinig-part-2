"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: define types for LikeNotification and SystemNotification
// (remember: actionUrl on SystemNotification is optional)
const renderNotification = (notification) => {
    let notify = "";
    if (notification.type === "system" && notification.actionUrl) {
        notify = `System: ${notification.message} (Tap to view)`;
    }
    else if (notification.type === "system") {
        notify = `System: ${notification.message}`;
    }
    else {
        notify = `${notification.fromUser} liked your post.`;
    }
    return notify;
};
renderNotification({ type: "like", fromUser: "Aisha" });
// "Aisha liked your post."
renderNotification({
    type: "system",
    message: "Your subscription is expiring soon.",
    actionUrl: "/billing",
});
// "System: Your subscription is expiring soon. (Tap to view)"
renderNotification({ type: "system", message: "Maintenance complete." });
// "System: Maintenance complete."
//# sourceMappingURL=renderNotification.js.map