/*
  문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  1. 문자열을 순회하는 방법
  2. 문자열의 문자 중 자연수만 골라내는 방법
  3. 그 자연수들의 합을 구하는 방법
*/

const solution = (my_string) => {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) {
      answer += parseInt(my_string[i]);
    }
  }
  return answer;
};

// 참고할만한 다른 풀이 : for... of 연산자, + 연산자 사용한 암묵적 타입 변환
const solution2 = (my_string) => {
  let answer = 0;
  for (const i of my_string) {
    if (!isNaN(i)) answer += +i;
  }
  return answer;
};
