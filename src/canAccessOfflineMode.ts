type Tier = "free" | "pro" | "premium";

function canAccessOfflineMode(tier: Tier): boolean {
  if (tier === "pro") {
    return true;
  } else if (tier === "premium") {
    return true;
  } else {
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
