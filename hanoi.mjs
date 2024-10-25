/* 재귀함수를 이용한 하노이의 탑
기둥 A에 꽃혀있는 3개의 크기가 다른 원반1,2,3을 기둥 B로 옮기기
크기가 작은 순으로 원반1 → 원반2 → 원반3
규칙1. 한 번에 한 개의 원반만 옮길 수 있다.
규칙2. 가장 위에 있는 원반만 옮길 수 있다.
규칙3. 작은 원반 위에 큰 원반이 올 수 없다.

시작(From): A
목표(To): C
임시(Temp): B */

function hanoi(count, from, to, temp){
  if(count == 0) return;
  hanoi(count-1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count-1, temp, to, from);
}

hanoi(3, "A", "C", "B");


/* 
과정
기둥C로 원반3을 옮겨야 하므로 기둥B로 원반 1,2를 옮겨야한다.
기둥C로 원반3을 옮긴다.
기둥C로 원반2를 옮겨야 하므로 기둥A로 원반 1을 옮겨야한다.
기둥C로 원반2를 옮긴다.
기둥C로 원반1을 옮긴다.
*/