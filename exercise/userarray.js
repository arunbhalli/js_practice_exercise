// Quetion 1
/*var arr = [1,2,3,4,5,6,7];
var size = prompt('Enter array Element ');
size = Number.parseInt(size)
arr.push(size)
console.log(arr);*/

// quetion 2

let arr = [1, 20, 3, 4, 50, 6, 70];
let size;
/*do {
  size = prompt('Enter array Element ');
  size = Number.parseInt(size);
  arr.push(size);
} while (size != 0);
console.log(arr);*/

// Quetion3 filter the array

/*let n =arr.filter((a)=>{
  return a%10 === 0;
})
console.log(n)*/

// Quetion4 new array of square

let n = arr.map((a) => {
  return a * a;
});
console.log(n);
