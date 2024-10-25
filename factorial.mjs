// 재귀를 통한 하향식 계산
function factorial(number) {
  if(number == 1 || number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(5));

