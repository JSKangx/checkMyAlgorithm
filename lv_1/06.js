/*
  정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
*/

/*
  필요한 알고리즘
  1. 짝수, 홀수를 판별하는 조건문
  2. 조건에 따라 결과를 다르게 반환
*/

const solution = (num) => (num % 2 === 0 ? "Even" : "Odd");

// 참고할만한 다른 풀이 : 0은 Falsy값이라는 걸 이용함
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
