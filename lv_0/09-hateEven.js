/*
  정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  1. (1) n이하 이면서, (2) 홀수를 동시에 만족시키는 정수를 구하는 방법
  2. 배열의 원소를 오름차순으로 나열하는 방법
*/

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer = [...answer, i];
  }
  return answer;
}
/*
  1. for문으로 오름차순, 홀수 조건을 만족시킴
  2. 초기값(빈배열)에다가 원소를 추가시킴
*/

// 참고할만한 다른 답 : push 메서드 활용하기
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i);
  return answer;
}
