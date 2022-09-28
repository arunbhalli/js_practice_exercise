
// Quetion 1 
/*var arr = [1,2,3,4,5,6,7];
var size = prompt('Enter array Element ');
size = Number.parseInt(size)
arr.push(size)
console.log(arr);*/


// quetion 2

var arr = [1, 2, 3, 4, 5, 6, 7];
let size;
do {
  size = prompt('Enter array Element ');
  size = Number.parseInt(size);
  arr.push(size);
} while (size != 0);
console.log(arr);
