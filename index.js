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

for (let i = 0; i < 6; i++) {
  // console.log(`statement ${i}`);
}

for (let i = 0; i < 6; i++) {
  if (i === 4) {
    break;
  }
  // console.log(`statement ${i}`);
}

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

///// iterate  over object properties

const capitals = {
  a: "Tbilisi",
  b: "Cairo",
  c: "Belgrade",
};

for (let key in capitals) {
  console.log(key + ": " + capitals[key]);
}

///////// for of

const arr2 = ["Fred", "Tom", "Bob"];

for (let i of arr2) {
  console.log(i);
}

//// while

// let i = 1;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

///// do while  //// run at least once // condition is checked at the end of iteration
let i = 10;

do {
  console.log(i); /// 10
  i++;
} while (i < 10);
