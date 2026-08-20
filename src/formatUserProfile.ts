// TODO: define a type or interface for the user
interface User {
  name: string;
  age: number;
  city: string;
}
const formatUserProfile = (user: User): string => {
  return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
};

formatUserProfile({
  name: "Fahim",
  age: 22,
  city: "Dhaka",
});

formatUserProfile({
  name: "Hridoy",
  age: 20,
  city: "Brahmanbaria",
});
