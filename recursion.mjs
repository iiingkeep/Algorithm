// 기저 조건 부재시
// function myFunction(number){
//   console.log(number);
//   myFunction(number + 1);
// }

// myFunction(1);

// 기저 조건 추가
function myFunction(number){
  if(number > 10) return;
  console.log(number);
  myFunction(number + 1);
}

myFunction(1);