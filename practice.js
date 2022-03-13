// Num 30
// const ent = "pineapple is yummy";
// let userEnt = "apple";

// console.log(ent.indexOf(userEnt));

// Num 31
// 1)  arr[i]
// 2)  arr.push(5)
// 3)  arr.slice()
// 4)  arr.pop()
// 5)  arr.includes(5)

// Num 32

// const ent = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";

// console.log(ent.split(" ").length);

// Num 33

// const ent = "1 2 3 4 5";

// const arrEnt = ent.split(" ").reverse().join(" ");

// console.log(arrEnt);

// Num 34

// const ent = "155 156 165 166 169 176";
// let arr = ent.split(" ");
// let sortArr = arr.sort((a, b) => {
//   return a - b;
// });

// let strArr = sortArr.join(" ");

// if (ent === strArr) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Num 35

// function one(n) {
//   function two(x) {
//     return Math.pow(x, n);
//   }
//   return two;
// }

// const a = one(2);

// console.log(a(10));

// Num 36

// const ent = 2;

// let output = "";

// for (let i = 1; i < 10; i++) {
//   output = output + ent * i + " ";
// }

// console.log(output);

// Num 37

// const ent = ["원범", "원범", "혜원", "혜원", "혜원", "유진", "유진"];
// let result = {};
// let winner = "";

// for (let index in ent) {
//   let val = ent[index];
//   result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
// }

// winner = Object.keys(result).reduce((a, b) => {
//   return result[a] > result[b] ? a : b;
// });

// console.log(result);
// console.log(winner);
// console.log(result[winner]);
// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

// Num 38

// const ent = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

// ent.sort((a, b) => {
//   return a - b;
// });

// let top3 = [];
// let count = 0;

// while (top3.length < 4) {
//   let value = ent.pop();
//   if (!top3.includes(value)) {
//     top3.push(value);
//   }
//   count++;
// }

// console.log(count - 1);
