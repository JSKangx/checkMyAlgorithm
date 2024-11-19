/*
  양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

const solution = (x) => {
  let sum = 0;
  (x + "").split("").forEach((item) => (sum += parseInt(item)));
  console.log("sum:", sum);
  console.log("x:", x);

  return x % sum === 0 ? true : false;
};

/*
  사용한 알고리즘
  1. 숫자를 문자열로 바꿔 배열의 원소로 넣는 방법
  2. 배열의 각 원소의 합을 구하는 방법
  3. 하샤드 수 조건문 (삼항연산자)
*/
