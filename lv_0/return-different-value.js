/* 
  문제 : 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
*/

/*
  필요한 개념
  1. flag가 true인지 false인지 판별하는 조건문
  2. a와 b에 대한 연산자 표현식
*/

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

/* 
  적용한 개념
  1. 삼항 연산자
*/

// 참고할만한 풀이 : 화살표 함수를 써서 더 간단하게 표현 가능
const solution = (a, b, flag) => (flag ? a + b : a - b);
