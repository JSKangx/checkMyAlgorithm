/*
  문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
  s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
*/

function solution(s) {
  let lowerCase = "";
  let upperCase = "";

  let arr = s.split("").sort();

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === arr[i].toUpperCase()) {
      upperCase += arr[i];
    } else {
      lowerCase += arr[i];
    }
  }

  return lowerCase + upperCase;
}

// 참고할만한 다른 풀이 : .reverse 메서드 사용
function solution2(s) {
  return s.split("").sort().reverse().join("");
}
