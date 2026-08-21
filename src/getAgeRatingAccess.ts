const getAgeRatingAccess = (age: number): string => {
  let accessLevel = "";
  if (age < 7) {
    accessLevel = "E (Everyone)";
  } else if (age >= 7 && age <= 12) {
    accessLevel = "E10+ (Everyone 10+)";
  } else if (age >= 13 && age <= 16) {
    accessLevel = "T (Teen)";
  } else {
    accessLevel = "M (Mature)";
  }
  return accessLevel;
};

console.log(getAgeRatingAccess(5));
// "E (Everyone)"
console.log(getAgeRatingAccess(10));
// "E10+ (Everyone 10+)"
console.log(getAgeRatingAccess(15));
// "T (Teen)"
console.log(getAgeRatingAccess(20));
// "M (Mature)"
