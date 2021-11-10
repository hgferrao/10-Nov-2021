/*
// Oddish vs. Evenish

function oddishOrEvenish(num) {
  const sum = num
    .toString()
    .split("")
    .map(Number)
    .reduce((start, end) => start + end, 0);
  return sum % 2 === 0 ? "Evenish" : "Oddish";
  console.log(sum);
  // return num;
}
console.log(oddishOrEvenish(43)); //, "Oddish");
console.log(oddishOrEvenish(373)); //, "Oddish");
console.log(oddishOrEvenish(55551)); //, "Oddish");
console.log(oddishOrEvenish(694)); //, "Oddish");
console.log(oddishOrEvenish(4433)); //, "Evenish");
console.log(oddishOrEvenish(11)); //, "Evenish");
console.log(oddishOrEvenish(211112)); //, "Evenish");


// Disarium Number

function isDisarium(n) {
  let num = n;
  let arr = num.toString().split("").map(Number);
  // console.log(arr);
  let power = arr
    .map((a, i) => Math.pow(a, i + 1))
    .reduce((acc, element) => acc + element, 0);
  return num === power ? true : false;
}

console.log(isDisarium(75)); //➞ false
// 7^1 + 5^2 = 7 + 25 = 32
console.log(isDisarium(135)); // ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
console.log(isDisarium(518)); // ➞ true
console.log(isDisarium(544)); // ➞ false
console.log(isDisarium(8)); //➞ true
console.log(isDisarium(466)); // ➞ false
// let [numVector, resVector] = [
//   [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
//   [true, false, true, false, false, true, true, false, false, true, true, true]
// ]
// for (let i in numVector) Test.assertEquals(isDisarium(numVector[i]), resVector[i])


// Frequency Distribution

function getFrequencies(arr) {
  return arr.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
}

console.log(getFrequencies([2, 1, 3, 3, 2, 3])); // { '1': 1, '2': 2, '3': 3 }
console.log(getFrequencies(["a", "b", "a", "c", "a", "b"])); // { 'a': 3, 'b': 2, 'c': 1 }
console.log(getFrequencies(["A", "A"])); //, {A: 2})
console.log(getFrequencies(["A", "B", "A", "A", "A"])); //, {A: 4, B: 1})
console.log(getFrequencies(["A", "B", "C", "A", "A"])); //, {A: 3, B: 1, C: 1})
console.log(getFrequencies([true, false, true, false, false])); //, {'true': 2, 'false': 3})
console.log(getFrequencies([1, 2, 3, 3, 2])); //, {'1': 1, '2': 2, '3': 2})
console.log(getFrequencies([])); //, {})



// Calculate the Total Price of Groceries

function getTotalPrice(groceries) {
  let price = groceries
    .map((grocerie) => grocerie.quantity * grocerie.price)
    .reduce((a, b) => a + b, 0);
  return price.toFixed(1);
}
console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }])); //,
//   1.5
// );

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
); //,
//   4
// );

console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }])); //,
//   4.5
// );

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
); //,
//   10.4
// );

console.log(
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.1 },
    { product: "Lollipop", quantity: 1, price: 0.2 },
  ])
); //,
//   0.3
// );
*/
//
function getBestStudent(grades) {
  let arr = Object.values(grades);
  return arr;
}
console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
); //,
//   "John",
//   "Example #1"
// );

console.log(
  getBestStudent({
    Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86],
  })
); //,
//   "Mike",
//   "Example #2"
// );

console.log(
  getBestStudent({
    Tim: [93, 84, 49, 71, 76, 83],
    Nick: [88, 91, 74, 72, 63, 68],
    Brad: [100, 94, 72, 64, 58, 81],
    Annie: [79, 93, 82, 82, 63, 87],
  })
); //,
//   "Annie"
// );

console.log(
  getBestStudent({
    Eddie: [65, 85, 72, 76],
    Brock: [55, 97, 82, 91],
    Jessica: [78, 62, 79, 99],
  })
); //,
//   "Brock"
// );
