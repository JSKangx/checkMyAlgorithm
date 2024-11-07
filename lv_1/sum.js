/*
  자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
  예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/

/*
  필요한 알고리즘
  1. 자연수 N을 각 자릿수로 분리하는 것 (자연수는 iterable이 아니기에 문자열로 변환 후 순회)
  2. 자릿수를 더하는 것
*/

const solution = (n) => {
  let answer = 0;
  const noToString = n.toString();
  for (let chr of noToString) {
    answer += parseInt(chr);
  }

  return answer;
};

// 참고할만한 다른 풀이 : 배열 메서드 reduce 사용
function solution(n) {
  // 쉬운방법
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
/*
  1. n을 문자열로 만들어 모든 문자를 배열의 원소로 만듬
  2. reduce 메서드를 사용하여 배열 원소의 총합을 구함
*/
