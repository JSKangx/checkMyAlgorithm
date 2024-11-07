/*
  두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
  예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

/*
  필요한 알고리즘
  1. a, b 사이의 숫자를 순회하는 반복문
  2. a가 b보다 클 때 두 숫자 사이의 정수를 구하는 방법
  2. 숫자를 더하는 방법
*/

const solution = (a, b) => {
  let answer = 0;

  for (let i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
};
