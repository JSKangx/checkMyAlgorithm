/*
  어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
*/

/*
  사용해야 할 개념
  1. n의 제곱근을 구하는 함수
  2. n의 제곱근이 정수인지 아닌지를 구별하는 함수
*/

const solution = (n) => (Number.isInteger(Math.sqrt(n)) ? 1 : 2);

/* 
  몰랐던 개념
  1. 제곱근을 구하는 함수 : Math.sqrt();
  2. 정수인지 아닌지를 판별하는 함수 : Number.isInteger();
*/

// 참고할만한 다른 풀이 1 : 제곱근을 1로 나누었을 때 나누어 떨어지면 정수라는 것을 활용
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
