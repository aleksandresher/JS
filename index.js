////////////////// Numbers

// let num = 3;
// let newNum = 3.16;

// console.log(typeof num);
// console.log(typeof newNum);

// let mill = 1e6;
// console.log(mill); /// 1000000

// let smallNum = 1e-6;
// console.log(smallNum); /// 0.000001

// let score = new Number(100);
// console.log(typeof score); // object

// let testNum = 1e5;
// console.log(testNum); // 100000
// console.log(typeof testNum); // number

// //////////// Number Methods////////////////

// const PI = 3.141596254;

// let num2 = PI.toFixed(2);
// console.log(num2); /// 3.14

// num2 = PI.toPrecision(5);
// console.log(num2); // 3.1416

// let mill2 = 1000000;
// num2 = mill.toExponential();
// console.log(num2); // 1e+6

// let PI1 = 3.14159;
// console.log(PI1.toFixed(3)); //3.142

// console.log(PI1.toPrecision(3)); /// 3.14

// const lightSpeed = 186000;
// console.log(lightSpeed.toExponential()); // 1.86+5

// console.log((123 + 5).valueOf()); // 128 (number type)
// const stringValue = "10";
// console.log(typeof Number(stringValue)); // number

// // let x = new Date("1970-01-01");
// // console.log(x);

// console.log(parseInt("10.55")); // 10 (number type)
// console.log(parseFloat("10.55")); // 10.55 (number type)

// /////////////////// Strings////////////////////////////////

// const message = "this is my code"; // string type
// const another = new String("hi"); // object type

// console.log(another.length); // 2
// console.log(message[0]); // t
// console.log(message.includes("is")); // true
// console.log(message.includes("her")); // false
// console.log(message.startsWith("this")); // true
// console.log(message.indexOf("code")); // 11
// const newMessage = message.replace("my", "her"); // does not mutate original
// console.log(newMessage); /// this is her code
// console.log(message.toUpperCase()); // THIS IS MY CODE

// const message2 = "  this is my code  ";
// console.log(message2.trim()); // "this is my code"
// console.log(message.charAt(0)); // t
// console.log(message.slice(4, 8)); /// is
// console.log(message.split(" ")); // ['this', 'is', 'my', 'code']

// ///////////// var, let, const /////////////////////

// function start() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i); ///// var is accessible outside of block-scope (in function scope)
// }
// start();

// function start2() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i); ///// got error because let is not accessible outside block-scope
// }
// start2();

// var color = "red"; /// attaches variable to window object
// let age = 30;

///// global scope

// var x = 1;
// let y = 2;
// const z = 3;

//// local scope
// function myFunc() {
//   const z = 5;
//   console.log(z);

//   {
//     let y = 4;
//     console.log(y);
//   }
// }
// myFunc();

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc() {
//   var x = 10;
//   const z = 5;
//   console.log(`function: ${x}`);
//   console.log(`function: ${y}`);
//   console.log(`function: ${z}`);

//   {
//     var x = 11;
//     const z = 6;
//     console.log(`block: ${x}`);
//     console.log(`block: ${y}`);
//     console.log(`block: ${z}`);
//   }
// }
// myFunc();

///////////// hoisting

// getName(); /// "Namaste Javascript"
// console.log(x); /// undefined

// var x = 7;

// function getName() {
//   console.log("Namaste Javascript");
// }

// carName = "Volvo";
// let carName; //// Cannot access 'carName' before initialization
////////

// console.log(me); // undefined
// console.log(lastName); //Cannot access 'lastName' before initialization
// console.log(year); // Cannot access 'year' before initialization

// var me = "Aleksandre";
// let lastName = "Shervashidze";
// const year = 1994;

//// functions
// console.log(addDecl(2, 3)); /// 5
// console.log(addExpr(2, 3)); /// Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); ////  Cannot access 'addArrow' before initialization
// console.log(addArrow2(2, 3)); ///  addArrow2 is not a function  (undefined(2,3))

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// var addArrow2 = (a, b) => a + b;

//////////////////////// closures

// for (var i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i); /// 3 3 3
//   };
//   setTimeout(log, 100);
// }

// for (let i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i); /// 0 1 2
//   };
//   setTimeout(log, 100);
// }

// let myName = "Aleksandre";

// function printName() {
//   console.log(myName); /// zura
// }

// myName = "zura";

// printName();

// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log("Outer Variable" + outerVariable);
//     console.log("Inner Variable" + innerVariable);
//   };
// }
// const newFunction = outerFunction("outside");
// newFunction(); //// Outer Variableoutside
////Inner Variableundefined

///////////// loops

// for (let i = 0; i < 6; i++) {
//   // console.log(`statement ${i}`);
// }

// for (let i = 0; i < 6; i++) {
//   if (i === 4) {
//     break;
//   }
//   // console.log(`statement ${i}`);
// }

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// ///// iterate  over object properties

// const capitals = {
//   a: "Tbilisi",
//   b: "Cairo",
//   c: "Belgrade",
// };

// for (let key in capitals) {
//   console.log(key + ": " + capitals[key]);
// }

// ///////// for of

// const arr2 = ["Fred", "Tom", "Bob"];

// for (let i of arr2) {
//   console.log(i);
// }

// //// while

// // let i = 1;

// // while (i < 5) {
// //   console.log(i);
// //   i++;
// // }

// ///// do while  //// run at least once // condition is checked at the end of iteration
// let i = 10;

// do {
//   console.log(i); /// 10
//   i++;
// } while (i < 10);

// const myName = "Aleksandre";
// // var age = 29;

// function first() {
//   // const age = 30;
//   if (age >= 29) {
//     const decade = 3;
//     var millenial = true;
//   }
//   function second() {
//     const job = "teacher";
//     // const age = 31;

//     console.log(`${myName} is a ${age}-old ${job}`);
//   }
//   second();
// }

// first();
// let age = 32;
// first();

//// exercise 1

// function test() {
//   console.log(a);
//   console.log(foo());

//   var a = 1;
//   const foo = function () {
//     return 2;
//   };
// }

// test();

///// exercise 2

// var a = 1;

// function someFunction(number) {
//   function otherFunction(input) {
//     return a;
//   }

//   a = 5;

//   otherFunction();
// }

// var firstResult = someFunction();
// console.log(firstResult);

//// exercise 3
// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(a);

///exercise 4

// function some() {
//   return a();

//   function a() {
//     return 2 + 6;
//   }
// }
// const result = some();
// console.log(result);

//////exercise 5

// const result = calcAge(1994);

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   return age;
// }
// console.log(result);

///////exercise 6

// const result = calcAge(1994);

// const calcAge = function (birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// };
// console.log(result);

//// exercise 7

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `${firstName}, your are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();

//   return age;
// }
// const firstName = "Aleksandre";
// calcAge(1994);

// function outer() {
//   var a = 10;

//   function inner() {
//     var b = 20;
//     console.log(a); // What is the output?
//   }

//   inner();
//   // console.log(b); // What happens if you uncomment this line?
// }

// outer();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(count);
//   }

//   function decrement() {
//     count--;
//     console.log(count);
//   }

//   function reset() {
//     count = 0;
//     console.log(count);
//   }

//   function getCount() {
//     console.log(count);
//   }

//   return {
//     increment: increment,
//     decrement: decrement,
//     reset: reset,
//     getCount: getCount,
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// // Exercise 1:
// counter1.increment(); // What will this output?
// counter1.increment(); // What will this output?
// counter1.decrement(); // What will this output?
// counter1.reset(); // What will this output?

// // Exercise 2:
// counter2.increment(); // What will this output?
// counter2.getCount(); // What will this output?

// // Exercise 3:
// counter1.getCount(); // What will this output?

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const result = g();
// console.log(result);

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const result = boardPassengers(180, 3);
// console.log(result);

// if (3 === 3) {
//   var somerandom = 3;
// } else {
//   var somerandom2 = 4;
// }
// function sayHello() {
//   var say = function () {
//     console.log(hello);
//   };
//   var hello = "Hello, world!";
//   return say;
// }
// var sayHelloClosure = sayHello();
// sayHelloClosure();

// var x = 10;
// function foo(a) {
//   var b = 20;

//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }

//   function boop(e) {
//     return e * -1;
//   }

//   return bar;
// }

// var moar = foo(5);

// moar(15);

// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

// function getSum() {
//   let sum = 0;
//   for (let i = 0; i < arr_1.length; i++) {
//     sum += arr_1[i];
//   }
//   return sum;
// }
// const result = getSum();
// console.log(result); //276

// function getSum2() {
//   let sum = 0;
//   for (const number of arr_1) {
//     sum += number;
//   }
//   return sum;
// }
// const result2 = getSum2();
// console.log(result2); // 276

// function getSum3() {
//   let sum = 0;
//   let i = 0;

//   while (i < arr_1.length) {
//     sum += arr_1[i];
//     i++;
//   }
//   return sum;
// }
// const result3 = getSum3();
// console.log(result3); // 276

// function getSum4() {
//   let sum = 0;
//   let i = 0;

//   do {
//     sum += arr_1[i];
//     i++;
//   } while (i < arr_1.length);
//   return sum;
// }
// const result4 = getSum4();
// console.log(result4); ///276

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];

// function sumToArray() {
//   let sum = 0;
//   let newArray = [];

//   for (let i = 0; i < arr_3.length; i++) {
//     let currentSum = arr_3[i] + arr_4[i];
//     sum += currentSum;

//     newArray.push(arr_3[i] + arr_4[i]);
//   }
//   return { sum, newArray };
// }
// const result5 = sumToArray();
// console.log(result5); //// newArray [12,7,16] /// sum 35

// let arr = [3, 4, 5, 6, 8, 12, 14, 13, 23, 22, 28];

// function separateNums() {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   }
//   return { even, odd };
// }
// const checkResult = separateNums();
// console.log(checkResult); ////// even [4, 6, 8, 12, 14, 22, 28]  odd [3, 5, 13, 23]

// let arr6 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];

// function getSum6() {
//   let sum = 0;

//   for (let i = 0; i < arr6.length; i++) {
//     for (let j = 0; j < arr6[i].length; j++) {
//       sum += arr6[i][j];
//     }
//   }
//   return sum;
// }

// const arr6Result = getSum6();
// console.log(arr6Result); // 78

/////////////////////////////////////////// Arrays ///////////////////////////////////////////////////////////////////////////

// const myArray = [];
// //// add element to an array
// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;

// //// refer to an array
// console.log(myArray);
// ////length property
// console.log(myArray.length);
// ////last element in array
// console.log(myArray[myArray.length - 1]);

// ////add element at the end of an array
// myArray.push("school");

// //// add element at the start of an array
// myArray.unshift(42);
// const newLength = myArray.unshift(42); /// 4 // will return new length of array
// console.log(myArray);

// /// remove and save last element from array
// const lastItem = myArray.pop();
// console.log(lastItem); /// "school"

// /// remove and save first element from array
// const firstItem = myArray.shift();

// const myArray = [];
// //// add element to an array
// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;

// /// delete certain element from array
// myArray.splice(1, 1); /// start from position 1 and delete 1 element
// console.log(myArray); ////  ['Dave', false]

// ///// replace element(s) in array
// const newArray = ["Aleksandre", 1001, false];
// newArray.splice(1, 1, 42); /// start from position 1 and replace one element with 42
// console.log(newArray); ///  ['Aleksandre', 42, false]
// newArray.splice(1, 2, 45, true); //// start from position 1 and replace 2 element. first with 45, second with - true
// console.log(newArray); //// ['Aleksandre', 45, true]

// ///// insert element in array
// newArray.splice(1, 0, 42); /// add element at position 1
// console.log(newArray); // ['Aleksandre', 42, 45, true]

// const newArray = [2, 3, 4];

// const myArray = ["A", "B", "C", "D", "E", "F"];

// const newArray = myArray.slice(2, 5); /// takes elements from 2 to 5
// console.log(newArray); //// ['C', 'D', 'E']

// const reversedArray = myArray.reverse();
// console.log(reversedArray); /// ['F', 'E', 'D', 'C', 'B', 'A'] /// mutates original array

// const newString = myArray.join();
// console.log(newString); //// F,E,D,C,B,A

// const arrayA = ["A", "B", "C"];
// const arrayB = ["D", "E", "F"];

// const concatedArray = arrayA.concat(arrayB);
// console.log(concatedArray); /// ['A', 'B', 'C', 'D', 'E', 'F']

// const combinedArray = [...arrayA, ...arrayB];
// console.log(combinedArray); // ['A', 'B', 'C', 'D', 'E', 'F']

// const equipShelfA = ["baseball", "football", "volleyboll"];
// const equipShelfB = ["basketball", "golf balls", "tennis balls"];

// const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
// const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

// const equipDept = [equipShelfA, equipShelfB];
// const clothesDept = [clothesShelfA, clothesShelfB];

// console.log(equipDept[0][1]); /// football
// console.log(clothesDept[1][0]); /// sweat tops

// const sportStore = [equipDept, clothesDept];
// console.log(sportStore[0][0][1]); // football

// const people = ["Sally", "Kyle", "John"];
// const newPeople = people.with(2, "New"); /// does not mutate original array
// console.log(newPeople); /// ['Sally', 'Kyle', 'New']
// console.log(people); //  ['Sally', 'Kyle', 'John']

// const sortedPeople = people.toSorted(); /// sort alphabetically
// console.log(sortedPeople); ///  ['John', 'Kyle', 'Sally']

// const reversedPeople = people.toReversed(); // reversing array
// console.log(reversedPeople); /// ['John', 'Kyle', 'Sally']

// const spliced = people.toSpliced(0, 2, "New"); /// works as splice method but does not change/mutate original array
// console.log(people); /// ['Sally', 'Kyle', 'John']
// console.log(spliced); /// ['New', 'John']

// ////////////// foreach
// //// use when need to perform some action on each element

// const food = ["Grape", "Apple", "Banana", "Orange", "Strawberry"];
// food.forEach((item, index) => {
//   console.log(`${item}  delicious index is ${index + 1} from ${food.length} `);
// });

// ///////////// map
// /////// use when need to perform some action on element and return result in new array
// const newMappedArray = food.map((item) => item + item);
// console.log(newMappedArray); //// ['GrapeGrape', 'AppleApple', 'BananaBanana', 'OrangeOrange', 'StrawberryStrawberry']

// /////////filter
// const filteredFruit = food.filter((item) => item.length > 5);
// console.log(filteredFruit); ///  ['Banana', 'Orange', 'Strawberry']

// ////// find
// const foundItem = food.find((item) => item.length === 5);
// console.log(foundItem); //// Grape
// //// It returns the value of the first element in the array that satisfies the testing function

// ////// findIndex
// const findIndexOfElement = food.findIndex((item) => item.length === 10);
// console.log(findIndexOfElement); /// 4
// /////// returns index of first element which satisfies contidion

// ////// indexOf
// const result = food.indexOf("Orange");
// const result2 = food.indexOf("Orange", 4);
// console.log(result); //// 3
// console.log(result2); //// -1
// //// -1 if no result

// /////// lastIndexOf
// const food2 = ["Grape", "Apple", "Apple", "Banana", "Orange", "Strawberry"];
// const lastIndex = food2.lastIndexOf("Apple");
// console.log(lastIndex); //// 2

// ////// some
// const checkIf = food.some((item) => item.startsWith("B"));
// console.log(checkIf); /// true
// ///// check if at least one element satisfies condition

// ///////every
// const chechIfAll = food.every((item) => item.endsWith("a"));
// console.log(chechIfAll); //// false

// //////// includes
// const ifIncludesOrange = food.includes("Orange");
// const ifIncludesKiwi = food.includes("Kiwi");
// console.log(ifIncludesOrange); /// true
// console.log(ifIncludesKiwi); /// false
// //// array.included(element, fromIndex)

// /////// toString
// const arrayToString = food.toString();
// console.log(arrayToString); /// Grape,Apple,Banana,Orange,Strawberry

// ////// join
// const separated = food.join(" - ");
// console.log(separated); /// Grape - Apple - Banana - Orange - Strawberry
// /// with join we can specify separator

// ///// fill
// // const filledWithKiwi = food.fill("Kiwi");
// console.log(food); //// ['Kiwi', 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi']
// //// we can also specify start and/or last index of fill ("Kiwi", 2);  ("Kiwi", 2, 6)

// ///// copyWithin
// // const newArray2 = food.copyWithin(0, 3, 4);
// // console.log(newArray2); //  ['Orange', 'Apple', 'Banana', 'Orange', 'Strawberry'] //// takes 3 th element and paste in at 0
// // console.log(food);//  ['Orange', 'Apple', 'Banana', 'Orange', 'Strawberry'] /// modifies original array

// ///// splice
// // const result4 = food.splice(0, 1, "Kiwi");
// // console.log(food); /// ['Kiwi', 'Apple', 'Banana', 'Orange', 'Strawberry']
// // console.log(result4); /// ['Grape']

// ////// sort
// const numArray = [1, 3, 5, 60, 9, 8];
// newArray.sort();
// console.log(numArray); ///  [1, 3, 5, 60, 9, 8]
// numArray.sort((a, b) => {
//   return a - b;
// });
// console.log(numArray); /// [1, 3, 5, 8, 9, 60]
// console.log(
//   numArray.sort((a, b) => {
//     return b - a;
//   })
// ); //// [60, 9, 8, 5, 3, 1]
// ///// > 0  /// sort a after b
// //// < 0  /// sort a before b
// //// === 0  //// keep original order

// ///// from
// const str = "1234";
// const numbers = Array.from(str, (element) => Number(element));
// console.log(numbers); /// [1, 2, 3, 4]

// //// isArray
// const checkIfArray = Array.isArray(food);
// console.log(checkIfArray); // true
// console.log(Array.isArray(str)); // false

// /// valueOf
// const foodCopy = food.valueOf();
// console.log(foodCopy); /// ['Grape', 'Apple', 'Banana', 'Orange', 'Strawberry']
// /// creates copy

// /// entries
// const foodEntries = food.entries();
// for (let element of foodEntries) {
//   console.log(element);
// }

// //  [0, 'Grape']
// //  [1, 'Apple']
// //  [2, 'Banana']
// //  [3, 'Orange']
// //  [4, 'Strawberry']

// ///// keys
// const foodKeys = food.keys();
// for (let key of foodKeys) {
//   console.log(key);
// }
// // 0
// // 1;
// // 2;
// // 3;
// // 4;

// ///// values
// const foodValues = food.values();
// for (let value of foodValues) {
//   console.log(value);
// }
// // Grape
// //  Apple
// //  Banana
// //  Orange
// //  Strawberry

// ///// reduce
// const numbersArray = [1, 2, 3, 4];
// function reducer(prev, curr) {
//   return prev + curr;
// }
// const sum = numbersArray.reduce(reducer, 0);
// console.log(sum); /// 10

// ///// reduceRight
// const sum2 = numbersArray.reduceRight(reducer, 0);
// console.log(sum2); // 10

// //// flat
// //// array.flat(depth)
// const nestedArray = [1, 2, 3, [4, 5, [6, 7]]];
// const flatedArray1 = nestedArray.flat();
// console.log(flatedArray1); /// [1, 2, 3, 4, 5, Array(2)]
// console.log(nestedArray.flat(2)); /// [1, 2, 3, 4, 5, 6, 7]

// ///// flatMap
// const nestedArray2 = [
//   [1, 2],
//   [3, 4],
// ];
// const resultArray = nestedArray2.flatMap((array) => {
//   return [array[0] + array[1]];
// });
// console.log(resultArray); // [3, 7]

//// Write a JavaScript program to find the most frequent item in an array.
// let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// let mf = 1;
// let m = 0;
// let item;

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = i; j < arr1.length; j++) {
//     if (arr1[i] === arr1[j]) {
//       m++;
//     }
//     if (mf < m) {
//       mf = m;
//       item = arr1[i];
//     }
//   }
//   m = 0;
// }
// console.log(item + " ( " + mf + " times ) "); /// a (5 times)

//////////// Given an array of numbers, square each number and return only the even squares.
// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers
//   .filter((item) => (item * item) % 2 === 0)
//   .map((item) => item * item);
// console.log(result); /// [4, 16, 36]

// //////////// Write a function that calculates the factorial of a given number using the reduce method.
// const calculateFactorial = (n) => {
//   const nArray = Array.from({ length: n }, (_, index) => index + 1);
//   const res = nArray.reduce((prev, curr) => prev * curr);
//   return res;
// };
// console.log(calculateFactorial(5));

// /////////// Given an array of strings, concatenate them into a single string and convert it to uppercase.
// const words = ["hello", "world", "javascript", "array"];
// const newArray = words.map((item) => item.toUpperCase()).join("");
// console.log(newArray);

// // Find the first element in an array that is divisible by 7.
// const numbers2 = [8, 15, 21, 30, 42, 50];
// const res = numbers2.find((item) => item % 7 === 0);
// console.log(res);

// //// Sort an array of strings in descending order of their lengths and then reverse the sorted array.
// const words2 = ["apple", "banana", "orange", "strawberry", "kiwi"];

// const res2 = words2
//   .sort((a, b) => {
//     if (a.length > b.length) {
//       return 1; //// > 0    a after b
//     } else if (a.length < b.length) {
//       return -1; //// <0   a before b
//     } else {
//       return 0;
//     }
//   })
//   .reverse();
// console.log(res2); //  ['strawberry', 'orange', 'banana', 'apple', 'kiwi']

// ////////////////////////////// Objects ////////////////////////////////////

// const myObj = { name: "Aleksandre" };
// console.log(myObj); // {name: 'Aleksandre'}
// console.log(myObj.name); /// Aleksandre

// const anotherObj = {
//   alive: true,
//   answer: 42,
//   hobbies: ["Eat", "Sleep", "Code"],
//   beverage: {
//     morning: "Coffee",
//     afternoon: "Iced Tea",
//   },
//   action: function () {
//     return "Hello from method";
//   },
//   action2: function () {
//     return `Time for ${this.beverage.morning}`; //// "this" refers to object
//   },
// };
// console.log(anotherObj.hobbies); /// ['Eat', 'Sleep', 'Code']
// console.log(anotherObj["hobbies"]); /// ['Eat', 'Sleep', 'Code']
// console.log(anotherObj.beverage.morning); /// Coffee
// console.log(anotherObj.action()); /// Hello from method
// console.log(anotherObj.action2()); /// Time for Coffee
// ////
// ////
// ////
// ////////// generic object
// const vehicle = {
//   wheels: 4,
//   engine: function () {
//     return "Vrroooom!";
//   },
// };
// //////
// /////
// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck); /// {doors: 2}
// console.log(truck.wheels); /// 4  /////// Inheritance //////// truck inherits properties and methods of vehicle
// console.log(truck.engine()); /// Vrroooom!
// /////
// /////
// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function () {
//   return "Whooosh";
// }; ///// /// overwrite inherited method
// console.log(car.engine()); //// Whooosh
// ////
// ////
// const tesla = Object.create(car);
// console.log(tesla.wheels); //4  /// inherits from vehicle  //// vehicle -> car -> tesla
// console.log(tesla.engine()); /// Whooosh
// tesla.engine = function () {
//   return "Shhhhhh";
// };
// console.log(tesla.engine()); //// Shhhhhh
// ///////////////
// //////////////
// /////////////
// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy Page",
//   bass: "John Paul Jones",
//   drums: "John Bonham",
// };

// // delete band.drums; ///// delete property
// console.log(Object.keys(band)); ///// ['vocals', 'guitar', 'bass', 'drums']
// console.log(Object.values(band)); ////  ['Robert Plant', 'Jimmy Page', 'John Paul Jones', 'John Bonham']
// console.log(band.hasOwnProperty("guitar")); //// true
// /////
// /////
// for (let job in band) {
//   console.log(band[job]);
// }
// // Robert Plant
// // Jimmy Page
// // John Paul Jones
// // John Bonham
// for (let job in band) {
//   console.log(`On ${job}, it's ${band[job]}!`);
// }
// // On vocals, it's Robert Plant!
// // On guitar, it's Jimmy Page!
// // On bass, it's John Paul Jones!
// // On drums, it's John Bonham!
// /////////
// //////////

// /////////////////////////// destructuring objects

// const { guitar: myVariable, bass: myBass } = band;
// console.log(myVariable); //// Jimmy Page
// console.log(myBass); /// John Paul Jones
// const { vocals, guitar, bass, drums } = band;
// console.log(drums); // John Bonham

// ////////
// function sings({ vocals }) {
//   return `${vocals} sings!`;
// }
// console.log(sings(band)); //// Robert Plant sings!
// ////////////
// ////////////
// //////////
// //////// define object with object literals
// const circleObj = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     return "draw";
//   },
// };

// console.log(circleObj.draw()); // "draw"

// //////////// define object with factory
// //// factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const circle = createCircle(1);

// //////////// constructor funtion
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const another = new Circle(1);

// ////////// constructor property
// //////////// every object has a constructor property and that references to function that was used to create that object
// let x = {}; ///// let x = new Object();
// console.log(another.constructor);
// // ƒ Circle(radius) {
// //   this.radius = radius;
// //   this.draw = function () {
// //     console.log("draw");
// //   };

// ///////// functions are object
// Circle.call({}, 1); /// is same as -  const another = new Circle(1);

// //// Primitives are copied by their value ///// Objects are copied by their reference
// /// value type
// let number = 10;

// function increase(number) {
//   number++;
// }
// increase(number);
// console.log(number); /// 10 //// we have two independent copies

// //// reference type
// let obj = { value: 10 };

// function increase1(obj) {
//   obj.value++;
// }
// increase1(obj);
// console.log(obj); /// {value: 11} /// passed by reference

// /////////////
// //////////////
// const propertyName = "location";
// circle[propertyName] = { x: 1 };

// function Cirlce(radius) {
//   this.radius = radius;
//   this.defaultLocation = { x: 0, y: 0 };

//   let computeOptimumLocation = function (factor) {
//     ///
//   };
//   this.draw = function () {
//     computeOptimumLocation(0.1);

//     console.log("draw");
//   };
// }
// const cirlce = new Circle(10);

// circle.draw();

// //////////////
// /////////////

// const grades = {
//   math: 90,
//   science: 85,
//   sport: 100,
// };

// function iterateOverObj(obj) {
//   for (let subject in obj) {
//     console.log(`${subject} ${obj[subject]}`);
//   }
// }
// const result3 = iterateOverObj(grades);

// ///////////////
// //////////////

// const shop = {
//   items: [
//     { name: "item1", price: 10 },
//     { name: "item2", price: 20 },
//     { name: "item3", price: 30 },
//   ],
//   totalCost: function () {
//     let total = 0;
//     for (let i = 0; i < this.items.length; i++) {
//       total += this.items[i].price;
//     }
//     return total;
//   },
// };
// const res3 = shop.totalCost();
// console.log(res3);

// //////////// Write a JavaScript program to list the properties of a JavaScript object.
// const student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// const res1 = Object.keys(student);
// console.log(res1); /// ['name', 'sclass', 'rollno']

// /////// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// // delete student.rollno;
// console.log(student); /// {name: 'David Rayy', sclass: 'VI'}

// //////////////////////////////////////////Classes////////////////////////////////////////////////////////////
// /////////////////
// ///////////////////
// //// create class
// class Rectangle {
//   //// setup object
//   constructor(_width, _height, _color) {
//     console.log("the rectange is being created");

//     //////// define instance properties
//     //// "this" refers to object which will created using class
//     this.width = _width;
//     this.height = _height;
//     this.color = _color;
//   }
//   ///// creating instance methods
//   getArea() {
//     return this.width * this.height;
//   }
//   printDescription() {
//     console.log(
//       `I am rectangle of ${this.width} x ${this.height} and i am ${this.color}`
//     );
//   }
// }
// let myRectangle1 = new Rectangle(5, 3, "blue");
// let myRectangle2 = new Rectangle(10, 5, "red");
// console.log(myRectangle1); /// Rectangle {width: 5, height: 3, color: 'blue'}
// console.log(myRectangle2); /// Rectangle {width: 10, height: 5, color: 'red'}
// console.log(myRectangle1.getArea()); // 15
// console.log(myRectangle2.getArea()); // 50
// myRectangle1.printDescription(); // I am rectangle of 5 x 3 and i am blue
// ///////////////////////
// //////////////////////
// /////////////////////// Getters and Setters

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//     this.numOfRequestForArea = 0;
//   }
//   //// getter
//   get area() {
//     this.numOfRequestForArea++;
//     return this.width * this.height;
//   }
//   //// setter
//   set area(area) {
//     this.width = Math.sqrt(area);
//     this.height = this.width;
//   }
// }
// let square1 = new Square(4);
// console.log(square1.area); /// 16

// square1.area = 25;
// console.log(square1.width); /// 5

// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.numOfRequestForArea); // 3

// //////////////// static methods
// /////////////// used as helper functions
// /////////// does not require instances

// class Square1 {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//   }
//   //// a and b are two different instances
//   static equals(a, b) {
//     return a.width * a.height === b.width * b.height;
//   }
//   static isValidDimensions(width, height) {
//     return width === height;
//   }
// }
// let square3 = new Square1(8);
// let square4 = new Square1(9);

// ////// static methods called on Square1 class directly,  not on instance
// console.log(Square1.equals(square3, square4)); /// flase
// console.log(square3); /// Square1 {width: 8, height: 8}
// console.log(Square1.isValidDimensions(6, 6)); /// true

// /////////////////
// /////////////////
// ////////////////
// //////////////////////// inheritance/extends////////////
// ////// parent class to create child class

// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   describe() {
//     console.log(`I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// class Programmer extends Person {
//   constructor(_name, _age, _yearsOfExperience) {
//     super(_name, _age);

//     /////// Custom behavior
//     this.yearsOfExperience = _yearsOfExperience;
//   }
//   code() {
//     console.log(`${this.name} is coding`);
//   }
// }
// let person1 = new Person("Jeff", 48);
// let programmer1 = new Programmer("Dom", 56, 12);

// console.log(programmer1.code()); /// Dom is coding

// ////// Programmer inherits describe method from parent class(Person)
// programmer1.describe(); /// I am Dom and I am 56 years old
// // console.log(person1); /// Person {name: 'Jeff', age: 48}
// // console.log(programmer1); /// Programmer {name: 'Dom', age: 56, yearsOfExperience: 12

// const programmers = [
//   new Programmer("John", 56, 15),
//   new Programmer("Denn", 24, 4),
// ];

// function developSoftware(programmers) {
//   for (let programmer of programmers) {
//     programmer.code();
//   }
// }
// developSoftware(programmers);
// // John is coding
// // Denn is coding

// /////////////////////////////////
// /////////////////////////////////
// ///////////////////////////////////// Polymorphism
// //////// overwrite method inside child class

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log(`Generic animal sound!`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   makeSound() {
//     ///// super calls parent method
//     super.makeSound();
//     console.log("Woof Woof!");
//   }
// }
// const a1 = new Animal("Dom");
// a1.makeSound(); /// Generic animal sound!

// const a2 = new Dog("Jeff");
// a2.makeSound(); /// Woof Woof!

// // class Pizza {
// //   constructor(pizzaType, pizzaSize) {
// //     this.type = pizzaType;
// //     this.size = pizzaSize;
// //     this.crust = "original";
// //     this.toppings = [];
// //   }
// //   getCrust() {
// //     return this.crust;
// //   }
// //   setCrust(pizzaCrust) {
// //     this.crust = pizzaCrust;
// //   }
// //   getToppings() {
// //     return this.toppings;
// //   }
// //   setToppings(topping) {
// //     this.toppings.push(topping);
// //   }
// //   bake() {
// //     console.log(`Baking a ${this.size} ${this.size} ${this.crust} crust pizza`);
// //   }
// // }
// // const myPizza = new Pizza("pepperoni", "small");
// // myPizza.setCrust("thin");
// // myPizza.bake(); // Baking a small small thin crust pizza
// // myPizza.setToppings("sausage");
// // myPizza.setToppings("olive");
// // console.log(myPizza.getToppings()); // ['sausage', 'olive']

// ///////////////////
// ///////////////////
// // class Pizza {
// //   constructor(pizzaSize) {
// //     this.size = pizzaSize;
// //     this.crust = "original";
// //   }
// //   getCrust() {
// //     return this.crust;
// //   }
// //   setCrust(pizzaCrust) {
// //     this.crust = pizzaCrust;
// //   }
// // }

// // class SpecialtyPizza extends Pizza {
// //   constructor(pizzaSize) {
// //     super(pizzaSize);
// //     this.type = "The works";
// //   }
// //   slice() {
// //     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
// //   }
// // }

// // const mySpecialty = new SpecialtyPizza("medium");
// // mySpecialty.slice(); // Our The works medium pizza has 8 slices.

// ///////
// /////// naming conventions
// ////// underscore(_) means that it is intended to be private

// // class Pizza {
// //   constructor(pizzaSize) {
// //     this._size = pizzaSize;
// //     this._crust = "original";
// //   }
// //   getCrust() {
// //     return this._crust;
// //   }
// //   setCrust(pizzaCrust) {
// //     this._crust = pizzaCrust;
// //   }
// // }

// /////////// factory function
// ////////// we have private properties which will not accessible outside of object

// // function pizzaFactory(pizzaSize) {
// //   const crust = "original";
// //   const size = pizzaSize;
// //   return {
// //     bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
// //   };
// // }

// // const myPizza = pizzaFactory("small");
// // myPizza.bake(); /// Baking a small original crust pizza

// ///// public and private fields
// class Pizza {
//   ///// public field
//   crust = "original";
//   //// private field
//   #sauce = "traditional";
//   #size;
//   constructor(pizzaSize) {
//     this.#size = pizzaSize;
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   hereYouGo() {
//     console.log(
//       `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
//     );
//   }
// }
// const myPizza = new Pizza("large");
// myPizza.hereYouGo(); // Here's your original traditional sauce large pizza
// //// is accessible with . notation
// console.log(myPizza.getCrust()); // original
// /// is not accessible
// console.log(myPizza.sauce); /// undefined

// ////////////////////////////////////// this keyword ///////////////////////////////////////////////////////

// /////////// method -> obj
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };
// video.stop = function () {
//   console.log(this);
// };
// video.play(); /// {title: 'a', play: ƒ} /// got video object
// video.stop(); // {title: 'a', play: ƒ, stop: ƒ}   // got video object

// ///////////// function -> global (window, global)

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }
// const v = new Video("b"); /// Video {title: 'b'}

// ///////////////

// const video2 = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this, tag);
//     });
//   },
// };
// video2.showTags();
// // undefined 'a'
// // undefined 'b'
// // undefined 'c'

// const video3 = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag);
//     }, this); /////// we can pass this as second argument in callback function with will point to object
//   },
// };
// video3.showTags();
// // a a
// // a b
// // a c

// ///////////////////
// ///////////////////
// //////////////////

// function showFace() {
//   return this.face;
// }
// const jeff = {
//   face: "smile",
// };
// const showJeffFace = showFace.bind(jeff);
// console.log(showJeffFace()); /// smile
// /////////////////////
// /////////////////////
// /////////////////////

// function talk() {
//   return `I am ${this.name}`;
// }

// const me = {
//   name: "Sina",
//   talk,
// };
// const you = {
//   name: "Qoli",
//   talk,
// };
// console.log(me.talk()); // I am Sina
// console.log(you.talk()); // I am Qoli

// /////////////////
// ////////////////// bind/////////

// function talk2() {
//   return `I am ${this.name}`;
// }
// const me2 = {
//   name: "Sina",
// };
// console.log(talk.bind(me)); ////////// takes me object and you as value of this
// // ////ƒ talk() {
// //   return `I am ${this.name}`;
// // }
// const meTalk = talk.bind(me);
// console.log(meTalk()); /// I am Sina

// console.log(talk.call(me)); /// I am Sina

// //////////////////
// /////////////////// call with one argument

// // function talk3(lang) {
// //   if (lang === "en") {
// //     return `I am ${this.name}`;
// //   } else if (lang === "it") {
// //     return `Io sono ${this.name}`;
// //   }
// // }
// // const me3 = {
// //   name: "Sina",
// // };
// // console.log(talk3.call(me, "en")); ///  I am Sina
// // console.log(talk3.call(me, "it")); // Io sono Sina

// ////////////////
// ///////////////// call with two argument

// function talk3(lang, isPolite) {
//   if (isPolite) {
//     if (lang === "en") {
//       return `I am ${this.name}`;
//     } else if (lang === "it") {
//       return `Ciao bella, sono ${this.name}`;
//     }
//   }
//   if (!isPolite) {
//     if (lang === "en") {
//       return `${this.name} what you want?`;
//     } else if (lang === "it") {
//       return `Sono ${this.name}`;
//     }
//   }
// }
// const me3 = {
//   name: "Sina",
// };

// console.log(talk3.call(me3, "it", true)); /// Ciao bella, sono Sina

// ///////////// same with apply // arguments are passed with array
// console.log(talk3.apply(me3, ["it", true])); //// Ciao bella, sono Sina

// //////////////////////
// ////////////////////
// //////////// constructor functions///////////// binding is created automaticaly

// function PersonNew(n) {
//   this.name = n;
//   this.talk = function () {
//     console.log(this);
//   };
//   // setTimeout(function () {
//   //   console.log(this); /////////// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//   // }, 100);

//   // setTimeout(
//   //   function () {
//   //     console.log(this); /////////// PersonNew {name: 'Sina', talk: ƒ}
//   //   }.bind(this),
//   //   100
//   // );

//   setTimeout(() => {
//     console.log(this); /////////// PersonNew {name: 'Sina', talk: ƒ}
//   }, 100);
// }
// const me4 = new PersonNew("Sina"); /// PersonNew {name: 'Sina'}
// me4.talk(); /// PersonNew {name: 'Sina', talk: ƒ}

/////////////////////////////
/////////////////////////////
//////////////////////////////////////// getters and setters///////////////////////////////////////////////

const person = {
  firstName: "Aleksandre",
  lastName: "Shervashidze",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = "John Smith";
console.log(person);

/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////////// functions //////////////////////////////

////////////
//////////// function statement aka function declaration
a(); /// a called  ///// function statement/declaration are hoisted and can be called before declaration

function a() {
  console.log("a called");
}

//////////
///////// function expression
// b(); // Uncaught ReferenceError: Cannot access 'b' before initialization

const b = function () {
  console.log("b called");
};

//////////
////////// Anonymous function
//////// functions without a name. we need to assign it to variable

// function () {
//   //...
// });

/////////
///////// Named functions expression

const b2 = function xys() {
  console.log("b2 called");
};

//////// xys it not created in outer scope
// xys(); /// xys is not defined

//////////////////////
/////////////////////  difference between parameters and arguments

const b3 = function (param1, param2) {
  /// param1 and param2 are parameters
  console.log(`b called with ${param1}, ${param2}`); /// param1 and param2 are accessable only in this body
};
b3(1, 2); ///// 1, 2 are arguments

//////////////////
//////////////////// first class functions/// first class citizens
///////////// ability to use functions as values /// and return function from function

const b4 = function (param1) {
  return function xyz() {};
};
console.log(b4()); // ƒ xyz() {}

/////////////////////
/////////////////////// callback function
