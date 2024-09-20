/*
  정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
*/

/*
  필요한 알고리즘
  (1) 1이상 n이하의 정수를 순회하는 반복문
  (2) 그 중에서 k의 배수만 고르는 조건문
  (3) 조건에 맞는 숫자만 배열에 추가하는 방법
*/

const solution = (n, k) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      answer.push(i);
    }
  }
  return answer;
};

// 참고할만한 다른 사람의 풀이
function solution(n, k) {
  var answer = [];
  // i의 초기값을 k로 설정, k만큼 반복 증가 시켜서, 반복 횟수를 줄였다.
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}
