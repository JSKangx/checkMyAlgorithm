/*
  정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

/*
  필요한 알고리즘
  1. n이하의 수를 순회하는 for문
  2. 약수인지 아닌지를 판단하는 조건문
*/

const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
};
