// function longestTime(h, m, s) {
//     let num1 = h * 3600 + m * 60 + s;
//     let num2 = m * 60 + s;
//     let num3 = s;

//     let maxnum = Math.max(num1, num2, num3);

//     if (maxnum === num1) {
//         return h;
//     } else if (maxnum === num2) {
//         return m;
//     } else {
//         return s;
//     }
// }

// console.log(longestTime(1, 59, 3598));



// function isPalindromePrime(num1) {
//     let cnt = '';
//     for (let i = num1; i > 0; i = Math.floor(i/10)) {
//         cnt += i % 10;
//     }
//     if (+cnt === num1) {
//         if (num1 <= 1){
//             return false;
//         }
//         if (num1 <= 3){
//             return true;
//         }
//         for (let i = 2; i * i <= num1; i++) {
//             if (num1 % i === 0){
//                 return false;
//             }
//         }
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isPalindromePrime(121));





// function isPow(num1) {
//     let a = Math.floor(num1)
//     for (let i = 0; i < num1; i++) {
//         if (Math.pow(2, i) == num1) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isPow(16));




// function sumOfPrime(num1, num2) {
//     let a = num1 + num2;
//     if (a <= 1) {
//         return false;
//     }
//     if (a <= 3) {
//         return true;
//     }
//     for (let i = 2; i * i <= a; i++) {
//         if (a % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(sumOfPrime(2,9));



// function calculateExponent(num1, num2) {
//     let cnt = 1;
//     for (let i = 1; i <= num1; i++) {
//         cnt *= num2;
//     }
//     return cnt;
// }
// console.log(calculateExponent(5,5));





// function  largestSwap(num){
//          let revers = (num % 10) * 10 + Math.floor(num/10);
//          if (num > revers){
//             return true;
//          }
//          else{
//             return false;
//          }

//     }
//     console.log(largestSwap(27));
//     console.log(largestSwap(43));



// function primeInRange(num1, num2) {
//     let cnt = 0;
//     for (let i = num1; i <= num2; i++) {
//         if (i <= 1) {
//             return false;
//         }
//         if (i <= 3) {
//             return true;
//         }
//         for (let j = 2; j * j <= i; j++) {
//             if (j % i != 0) {
//                 cnt++
//             }
//         }
//     }
//     return cnt >= 1;
// }
// console.log(primeInRange(62,66));






// function numbersSquares(num1) {
//     let cnt = 0;
//     for (let i = 1; i < num1; i++) {
//         cnt += i*i
//         }
//     }
// console.log(numbersSquares(2));



// function solveForExp(num1, num2)  {
//     let cnt = 1;
//     for (let i = 1; i <= num1; i++) {
//         cnt *= num2;
//     }
//     return cnt;
// }
// console.log(solveForExp(4, 1024));





// function numbersSquares(n) {
//     let cnt = 0;
//     for (let i = 1; i <= n; i++) {
//         cnt += i ** 2;
//     }
//     return cnt;
// }

// console.log(numbersSquares(2));
// console.log(numbersSquares(4));



// function solveForExp(num1, num2) {
//     for (let i = 1; ; i++) {
//         if (Math.pow(num1, i) === num2) {
//             return i;
//         }
//     }
// }

// console.log(solveForExp(4, 1024));  
// console.log(solveForExp(2, 1024));  




// function gcd(num1, num2) {
//     if (num2 === 0) {
//         return num1;
//     } else {
//         return gcd(num2, num1 % num2);
//     }
// }

// console.log(gcd(3, 5));



// function  largestSwap(num){
//          let revers = (num % 10) * 10 + Math.floor(num/10);
//          if (num > revers){
//             return true;
//          }
//          else{
//             return false;
//          }

//     }
//     console.log(largestSwap(27));
//     console.log(largestSwap(43));



// function factorial(num) {
//     if (num === 0) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }

// console.log(factorial(5));




// function sumOfNumbers(number) {
//     let sum = 0;
    
//     for (let i = number; i > 0; i = Math.floor(i / 10)) {
//         sum += i % 10;
//     }
    
//     return sum;
// }

// console.log(sumOfNumbers(12345));














