const getTicketPrice = (age: number): number => {
  let price = 0;
  if (age < 5) {
    price = 0;
  } else if (age >= 5 && age <= 12) {
    price = 100;
  } else if (age >= 13 && age <= 59) {
    price = 200;
  } else {
    price = 120;
  }
  return price;
};
getTicketPrice(3);
// 0
getTicketPrice(10);
// 100
getTicketPrice(25);
// 200
getTicketPrice(65);
// 120
