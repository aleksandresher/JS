////////////////// Numbers

let num = 3;
let newNum = 3.16;

console.log(typeof num);
console.log(typeof newNum);

let mill = 1e6;
console.log(mill); /// 1000000

let smallNum = 1e-6;
console.log(smallNum); /// 0.000001

let score = new Number(100);
console.log(typeof score); // object

let testNum = 1e5;
console.log(testNum); // 100000
console.log(typeof testNum); // number

//////////// Number Methods////////////////

const PI = 3.141596254;

let num2 = PI.toFixed(2);
console.log(num2); /// 3.14

num2 = PI.toPrecision(5);
console.log(num2); // 3.1416

let mill2 = 1000000;
num2 = mill.toExponential();
console.log(num2); // 1e+6

let PI1 = 3.14159;
console.log(PI1.toFixed(3)); //3.142

console.log(PI1.toPrecision(3)); /// 3.14

const lightSpeed = 186000;
console.log(lightSpeed.toExponential()); // 1.86+5

console.log((123 + 5).valueOf()); // 128 (number type)
const stringValue = "10";
console.log(typeof Number(stringValue)); // number

let x = new Date("1970-01-01");
console.log(x);

console.log(parseInt("10.55")); // 10 (number type)
console.log(parseFloat("10.55")); // 10.55 (number type)
