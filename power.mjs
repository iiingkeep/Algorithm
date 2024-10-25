// 재귀를 통한 구현
// 밑 = x 지수 = n
function power(x, n){
  if(n == 0) return 1;
  return power(x, n-1) * x;
}

console.log(power(2, 5));