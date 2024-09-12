/*
  x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
  x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
  x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
  x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
  x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
*/

/*
  필요한 알고리즘
  1. dot 배열의 원소가 음수인지 양수인지를 판별하는 조건문
*/

const solution = (dot) => {
  let answer = 0;
  if (dot[0] > 0 && dot[1] > 0) answer = 1;
  else if (dot[0] < 0 && dot[1] > 0) answer = 2;
  else if (dot[0] < 0 && dot[1] < 0) answer = 3;
  else answer = 4;
  return answer;
};

// 참고할만한 다른 답 : 구조분해, 두 원소의 곱셈, 삼항 연산자
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
/*
  1. 배열 dot을 구조분해하여 1, 2원소를 각각 num, num2에 할당한다.
  2. num * num2 > 0 조건문에 따라 check는 true / false가 반환된다.
  3. num(x좌표)이 양수면 1, 4사분면 중 하나 / 음수면 2, 3사분면중 하나
  3-1. check가 true : 두 개의 곱이 양수 / false : 두 개의 곱이 음수
*/
