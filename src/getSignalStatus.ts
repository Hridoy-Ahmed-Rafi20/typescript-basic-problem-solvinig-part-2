const getSignalStatus = (strength: number): string => {
  let status = "";
  if (strength >= 0 && strength <= 20) {
    status = "Weak";
  } else if (strength >= 21 && strength <= 50) {
    status = "Fair";
  } else if (strength >= 51 && strength <= 80) {
    status = "Good";
  } else {
    status = "Excellent";
  }
  return status;
};

console.log(getSignalStatus(10));
// "Weak"
console.log(getSignalStatus(35));
// "Fair"
console.log(getSignalStatus(65));
// "Good"
console.log(getSignalStatus(95));
// "Excellent"
