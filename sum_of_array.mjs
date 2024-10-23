// 재귀를 통한 구현 1
let array = [1,2,3,4,5];
let lastIndex = array.length-1;

function arraySum(lastIndex) {
  if(lastIndex == 0 ) {return array[0];}
  return array[lastIndex] + arraySum(lastIndex-1);
}

console.log(arraySum(lastIndex));

// 재귀를 통한 구현 2
function sumArray(arr) {
  if(arr.length == 1) return arr[0];
  return sumArray(arr.slice(0,-1)) + arr[arr.length - 1];
};

let arr = [1,2,3,4,5];
let sum = sumArray(arr);
console.log(sum);