/*
  군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
  암호화된 문자열 cipher를 주고받습니다.
  그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
  문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  1. code의 배수를 구하는 방법
  2. code의 배수번째 글자만 골라서 반환하는 방법
  2-1. n 번째 글자의 인덱스는 n-1번이다.
*/

const solution = (cipher, code) => {
  let answer = "";
  for (let i = 1; i <= cipher.length / code; i++) {
    answer += cipher[code * i - 1];
  }
  return answer;
};

// 참고할만한 다른 답
function solution2(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
//  1. 증감식에서 code의 배수만큼 증가시키려면 i += code 해주면 된다.
