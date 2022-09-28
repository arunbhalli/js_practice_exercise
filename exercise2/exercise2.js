// 1  check age between 10-20

let age = 20;
if (age < 10 || age > 20) {
  console.log('Age is not  between 10 and 20');
} else {
  console.log('Age is between 10 and 20');
}
// 2 check age between 10-20 by switch case

switch (true) {
  case age < 10:
    console.log('Age is not  between 10 and 20');
    break;
  case age > 20:
    console.log('Age is not  between 10 and 20');
    break;

  default:
    console.log('Age is between 10 and 20 ');
    break;
}

// no is divisible by 2 or 3 or both

let num = 21;
if (num % 3 == 0 && num % 2 == 0) {
  console.log('Number is  divisible by 3 and 2');
} else if (num % 3 == 0) {
  console.log('Number is  divisible by 3');
} else if (num % 2 == 0) {
  console.log('Number is  divisible by 2');
} else {
  console.log('Number is not divisible by 2 or 3');
}

//  you can drive or not use ternary operator

let dage = 16;
let answer = dage >= 18 ? 'yes you can drive' : ' you can not drive';
console.log(answer);
