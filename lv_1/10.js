/*
  자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

const solution = (n) => {
  let answer = [];
  let nArr = String(n).split("");
  for (elem of nArr) {
    answer.unshift(parseInt(elem));
  }

  return answer;
};

// 참고할만한 다른 풀이 : reverse, map을 활용
const solution2 = (n) => {
  return (n + "")
    .split("")
    .reverse()
    .map((item) => parseInt(item));
};
