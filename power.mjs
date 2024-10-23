// 재귀를 통한 구현
// 밑을 x로, 지수를 n으로 가정
function power(x, n){
  if(n == 0) return 1;
  return power(x, n-1) * x;
}

console.log(power(2, 5));