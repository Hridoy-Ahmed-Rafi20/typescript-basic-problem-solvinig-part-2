type LikeNotification = {
  type: "like";
  fromUser: string;
};

type SystemNotification = {
  type: "system";
  message: string;
  actionUrl?: string;
};

// TODO: define types for LikeNotification and SystemNotification
// (remember: actionUrl on SystemNotification is optional)
const renderNotification = (
  notification: LikeNotification | SystemNotification,
): string => {
  let notify = "";
  if (notification.type === "system" && notification.actionUrl) {
    notify = `System: ${notification.message} (Tap to view)`;
  } else if (notification.type === "system") {
    notify = `System: ${notification.message}`;
  } else {
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
