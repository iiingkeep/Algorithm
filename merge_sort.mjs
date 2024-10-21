/*
leftIndex: 배열의 시작 인덱스
rightIndex: 배열의 마지막 인덱스
*/

function MergeSort(arr, leftIndex, rightIndex){
  if(leftIndex < rightIndex){
    let midIndex = parseInt((leftIndex + rightIndex) / 2);
    MergeSort(arr, leftIndex, midIndex);
    MergeSort(arr, midIndex + 1, rightIndex);
    Merge(arr, leftIndex, midIndex, rightIndex);
  }
}

function Merge(arr, leftIndex, midIndex, rightIndex){
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = midIndex + 1;

  let tempArr = [];
  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1);

  let tempArrIndex = leftIndex;

  while(leftAreaIndex < midIndex + 1 && rightAreaIndex < rightIndex + 1){
    if(arr[leftAreaIndex] < arr[rightAreaIndex]){
      tempArr[tempArrIndex] = arr[leftAreaIndex];
      leftAreaIndex ++;
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex];
      rightAreaIndex ++;
    }
    tempArrIndex ++;
  }

  // if(leftAreaIndex > midIndex) {
  //   tempArr.slice(tempArrIndex, -1) = arr.slice(rightAreaIndex, -1);
  // }

  if(leftAreaIndex > midIndex){
    for(let i = rightAreaIndex; i < rightIndex + 1; i++){
      tempArr[tempArrIndex++] = arr[i];
    }
  } else {
    for(let i = leftAreaIndex; i < midIndex + 1; i++){
      tempArr[tempArrIndex++] = arr[i];
    }
  }

  for(let i = leftIndex; i < rightIndex + 1; i++){
    arr[i] = tempArr[i];
  }
}

let arr = [3,5,2,4,1,7,8,6]

console.log("===== 정렬 전 =====")
console.log(arr);

MergeSort(arr, 0, arr.length-1);

console.log("===== 정렬 후 =====")
console.log(arr);