/*
  정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 개념
  1. 배열의 각 원소에 접근하여 2배를 곱하는 함수
  2. 2배를 곱한 원소를 가진 배열을 리턴하는 함수
*/

const solution = (numbers) => numbers.map((item) => item * 2);

// 참고할만한 다른 풀이
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
