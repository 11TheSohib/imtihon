// ================================ MISOL - 1 ================================ //

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];

// const jointPlace = () => {
//   arr1 = arr1.filter((el) => {
//     if (arr2.includes(el)) return el;
//   });

//   return arr1;
// };

// console.log(jointPlace());

// ================================ MISOL - 2 ================================ //

// let arr1 = [1, 2, 2, 3, 3, 4, 5];

// const repeated = () => {
//   const repeatedArr = [];
//   arr1.forEach((el1) => {
//     let count = 0;
//     arr1.forEach((el2) => {
//       if (el1 == el2) count += 1;
//     });
//     if (count > 1) !repeatedArr.includes(el1) ? repeatedArr.push(el1) : 1;
//   });
//   return repeatedArr;
// };

// console.log(repeated());

// ================================ MISOL - 3 ================================ //

// let telFonNum = [9, 0, 1, 7, 5, 4, 3, 2, 1, 1];

// const fomrTel = () => {
//   let formTelNum = `(${telFonNum.splice(0, 3).join("")}) ${telFonNum
//     .splice(0, 3)
//     .join("")}-${telFonNum.join("")}`;

//   return formTelNum;
// };

// console.log(fomrTel());

// ================================ MISOL - 4 ================================ //

// let number = 4567;

// const sumOfNumbers = () => {
//   let sum = 0;
//   let sumString = "";
//   while (number > 0) {
//     sumString += sumString.split("").length > 0 ? ` + ${number%10}` : number%10;
// 	sum += number%10
//     number = (number - (number % 10)) / 10;
//   }
//   return sumString += ` = ${sum}`
// };

// console.log(sumOfNumbers());

// ================================ MISOL - 5 ================================ //

// let uniqArr = [1, 2, 2, 3, 4, 4, 5];

// const uniqNumArr = () => {
//   uniqArr.forEach((el, index) => {
//     uniqArr.splice(index, 1);
//     uniqArr.includes(el)
//       ? uniqArr.splice(uniqArr.indexOf(el), 1)
//       : uniqArr.push(el);
//   });

//   return uniqArr;
// };

// console.log(uniqNumArr());

// ================================ MISOL - 6 ================================ //

// let palindromArr = ["olma", "non", "kitob", "alla"];

// const palindElem = () => {
//   palindromArr = palindromArr.filter(
//     (el) => el.split("").reverse().join("") == el
//   );
//   return palindromArr;
// };

// console.log(palindElem());

// ================================ MISOL - 7 ================================ //

// let acronymStr = "National Aeronautics Space Administration";

// const acronymStrFn = () => {
//   acronymStr = acronymStr.split(" ").map((el) => el[0]);
//   acronymStr = acronymStr.join("")
//   return acronymStr
// };

// console.log(acronymStrFn());

// ================================ MISOL - 8 ================================ //

// let reverseStr = "Men JavaScript o'rganmoqdaman";

// const reverseWord = () => {
// 	return reverseStr.split(" ").reverse().join(" ")
// }
// console.log(reverseWord());

// ================================ MISOL - 9 ================================ //

// let isNumber = "12345";

// const isNumberFn = () => {
//   let isNumberReturn = true;
//   isNumber
//     .split("")
//     .forEach((el) => (!(+el > -1 && +el < 10) ? (isNumberReturn = false) : 1));
//   return isNumberReturn;
// };

// console.log(isNumberFn());

// ================================ MISOL - 10 ================================ //

// let sortArrAge = [
//   { name: "Ali", age: 22 },
//   { name: "Vali", age: 19 },
//   {
//     name: "Sami",
//     age: 25,
//   },
// ];

// const sortArrAgeFn = () => {
//   sortArrAge = sortArrAge.sort((a, b) => a.age - b.age);

//   return sortArrAge;
// };
// console.log(sortArrAgeFn());

// ================================ MISOL - 11 ================================ //

// const primeNumber = 1;

// const primeNumberFn = () => {
//   if (primeNumber < 2) return `Not prime Number`;
//   for (let i = 2; i < primeNumber / 2 + 1; i++) {
//     if (primeNumber % i == 0) return `Not prime Number`;
//   }

//   return `Prime Number`;
// };

// console.log(primeNumberFn());

// ================================ MISOL - 12 ================================ //

// let maxNumArr = [3, 5, 7, 2, 8];

// const secondMaxNumber = () => {
//   return maxNumArr.sort((a, b) => a - b)[maxNumArr.length - 2];
// };

// console.log(secondMaxNumber());

// ================================ MISOL - 13 ================================ //

// const mostChar = "javascript";

// const theMostChar = () => {
//   let char = ["", 0];
//   mostChar.split("").forEach((el1) => {
//     let countChar = 0;
//     mostChar.split("").forEach((el2) => (el1 == el2 ? countChar++ : countChar));
//     if (char[1] < countChar) {
//       char[1] = countChar;
//       char[0] = el1;
//     }
//   });

//   return char[0]
// };

// console.log(theMostChar());

// ================================ MISOL - 14 ================================ //

// let oldArr = [1, 2, 3, 4, 5, 6];

// const oldSumArr = () => {
//   let sum = 0;
//   oldArr.forEach((el) => (el % 2 == 0 ? (sum += el) : sum));
//   return sum
// };

// console.log(oldSumArr());

// ================================ MISOL - 15 ================================ //

// let vowel = "salom dunyo";

// const vowelsFn = () => {
//   const vowelArr = ["a", "o", "u", "e", "i", "A", "O", "U", "E", "I"];
//   let str = "";
//   const arr = vowel.split("");
//   arr.forEach((el) => (vowelArr.includes(el) ? (str += el) : 1));
//   return str;
// };

// console.log(vowelsFn());

// ================================ MISOL - 16 ================================ //

// const massivMove = [1, 2, 3, 4, 5];

// const move = (k) => {
//   let spliceRemove = massivMove.splice(massivMove.length - k, k);
//   massivMove.unshift(...spliceRemove);
//   return massivMove;
// };

// console.log(move(2));