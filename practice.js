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

// Num 39

// const ent = "hqllo my namq is hyqwon";

// const output = ent.replaceAll("q", "e");

// console.log(output);

// Num 40

// const weight = "50";
// const people = "5";

// const peopleWeight = "20 40 20 20 20";
// const p_WeightArr = peopleWeight.split(" ");
// let riseWeight = 0;
// let count = 0;

// for (let i = 0; i < people; i++) {
//   riseWeight = riseWeight + parseInt(p_WeightArr[i]);
//   if (riseWeight <= weight) {
//     count++;
//   }
// }

// console.log(count);

// Num 41

// const ent = 2;

// function yesOrNo() {
//   for (let i = 2; i < ent; i++) {
//     const output = ent % i;
//     if (output === 0) {
//       return console.log("No");
//     }
//   }
//   if (ent === 1) {
//     console.log("No");
//   } else {
//     console.log("Yes");
//   }
// }

// yesOrNo();

// Num 42

// const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// const a = 5;
// const b = 24;

// function solution() {
//   const theDay = new Date(`2020-${a}-${b}`);
//   console.log(day[theDay.getDay()]);
// }

// solution();

// Num 43 - 1

// let ent = "32";
// let arrBinary = [];
// while (ent) {
//   arrBinary.push(ent % 2);
//   ent = Math.floor(ent / 2);
// }
// let output = arrBinary.reverse().join("");

// console.log(output);

// Num 43 - 2

// let ent = 160;
// let output = ent.toString(2);

// console.log(output);

// Num 44

// const ent = 18234;
// const arrEnt = String(ent).split("");
// let output = 0;

// for (let i = 0; i < arrEnt.length; i++) {
//   output = output + parseInt(arrEnt[i]);
// }

// console.log(output);
