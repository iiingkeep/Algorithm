function quickSort(arr, left, right){
  if(left <= right){
    let pivot = divide(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
    return;
  }
}

// leftStartIndex와 rightStartIndex가 이동하며 pivot을 정렬 및 반환하는 함수
function divide(arr, left, right){
  let pivot = arr[left];
  let leftStartIndex = left + 1;
  let rightStartIndex = right;

  while(leftStartIndex <= rightStartIndex){
    while(leftStartIndex <= right && pivot >= arr[leftStartIndex]){
      leftStartIndex++;
    }
    while(rightStartIndex >= (left + 1) && pivot <= arr[rightStartIndex]){
      rightStartIndex--;
    }
    // 해당 요소 교환
    if(leftStartIndex <= rightStartIndex){
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }

  swap(arr, left, rightStartIndex);
  return rightStartIndex;
}

// 인덱스간 요소를 교환하는 함수
function swap(arr, index1, index2){
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];

console.log("===== 정렬 전 =====");
console.log(arr);

quickSort(arr, 0, arr.length - 1);

console.log("===== 정렬 후 =====");
console.log(arr);