/*
  어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
  문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
*/

/*
  필요한 알고리즘
  (1) my_string을 순회하는 방법
  (2) my_string과 is_prefix를 동시에 순회하며 문자를 비교
  (2-1) 비교하다가 문자가 서로 다르면 더 이상 비교하지 않고 바로 조건문 탈출
*/

const solution = (my_string, is_prefix) => {
  let answer = 0;
  for (let i = 0; i < is_prefix.length; i++) {
    if (my_string[i] !== is_prefix[i]) {
      answer = 0;
      break;
    } else {
      answer = 1;
    }
  }
  return answer;
};

// 참고할만한 다른 답 : startsWith 메서드 사용, 암묵적 타입 변환 사용
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}
/*
  (1) startsWith() 메서드는 특정 문자열이 주어진 문자열로 시작하는지 여부를 확인하는데 사용된다. 이 메서드는 true / false를 반환한다.
  (2) 반환된 boolean 값 앞에 +를 붙이면 0 / 1로 암묵적 타입 변환된다.
*/
