/*
  array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
  divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

/*
  필요한 알고리즘
  1. 나누어 떨어지는지 확인하는 조건문
  2. 배열을 오름차순으로 정렬하는 메서드
*/

const solution = (arr, divisor) => {
  let answer = [];

  for (const no of arr) {
    if (no % divisor === 0) {
      answer.push(no);
    }
  }
  answer.sort((a, b) => a - b);

  return answer.length > 0 ? answer : [-1];
};

// 참고할만한 다른 풀이 : filter 메서드 사용
const solution2 = (arr, divisor) => {
  let answer = arr.filter((num) => num % divisor === 0);
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
};
