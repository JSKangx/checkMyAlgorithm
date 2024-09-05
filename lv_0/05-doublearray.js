/*
  정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 개념
  1. 배열의 각 원소에 접근하여 2배를 곱하는 함수
  2. 2배를 곱한 원소를 가진 배열을 리턴하는 함수
*/

const solution = (numbers) => numbers.map((item) => item * 2);

// 참고할만한 다른 풀이 : reduce 함수 사용법 익히기
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
/*
  예시 입력
  let numbers = [1, 2, 3]
  1. 초기상태
    a = [] 빈배열
    b = 1 (첫 번째 요소)
  2. 첫 번째 반복
    a = []
    b = 1
    콜백함수 결과 : [...a, 1 * 2]
    a = [2]
  3. 두 번째 반복
    a = [2]
    b = 2
    콜백함수 결과 : [2, 2 * 2]
    a = [2, 4]
  ... 모든 요소에 대해 반복.
*/
