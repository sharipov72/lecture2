// function  calculateCircleArea(num1){
//     let p = 3.14
//     return `The area of a circle with radius ${num1} is ${Math.round( p * Math.pow(num1, 2))}` ;
// }
// console.log(calculateCircleArea(5));


//  task 2 
// function checkNumber(num1){
//     return num1 == 0 ? 'Zero' : num1 >0 ? 'Positive' : 'Negative'
// }
// console.log(checkNumber(5));
// console.log(checkNumber(-8));
// console.log(checkNumber(0));
// task3
// function generateMultiplicationTable(num1){
//      for (let i=1; i < 10; i++){
//         console.log(num1 + '*' + i + '=' + i*num1);
//      }
//      return ''
// }
//   console.log(generateMultiplicationTable(5));
// task4
// function endNine(num1){
//     if(num1 %10 == 9){
//         return "YES";
//     }
//     else{
//         return 'NO';
//     }
// }
//  console.log(endNine(149));
//  console.log(endNine(387));
//  console.log(endNine(29));
// task 5
// function century(num1){
//     if (num1 > 1){
//         return Math.ceil(num1 / 100 ) ;
//     }
//     else if( num1 == 0){
//         return Math.floor(num1 / 100);   
//     }
// }
// console.log(century(1705));
// console.log(century(1900));
// console.log(century(2000));






// function different(num1,num2,num3){
//     if (num1 != num2 && num1 != num3){
//         return 1;
//     }
//     else  if (num2 != num1 && num2 != num3){
//         return 2;
//     }
//     else{
//         return 3;
//     }
// }
// console.log(different(5,5,10));
// console.log(different(897,1,1));
// console.log(different(811,100,811));





// function longestTime(num1,num2,num3){
//     let  coat = num1 * 3600;
//     let  minut = num2 * 60;
//     if (coat > minut && coat > num3){
//        return num1;
//     }
//     else if (minut > coat && minut > num3){
//        return num2;
//     }
//     else{
//        return num3;
//     }
// }
// console.log(longestTime(1,59,3598));
// console.log(longestTime(2,300,15000));
// console.log(longestTime(15,955,59400));





// function  largestSwap(num1){
//      let a = (num1 % 10) * 10 + Math.floor(num1/10);
//      if (num1 > a){
//         return true;
//      }
//      else{
//         return false;
//      }

// }
// console.log(largestSwap(14));
// console.log(largestSwap(53));