/*
  영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  1. 문자열을 순회해야 함.
  2. 조건에 맞는 글자만 반환해야 함.
  3. 근데, 동시에 만족해야 할 조건이 여러개임. 동시 조건을 사용하는 표현식이 필요.
*/

// 내가 제출한 정답 : && 연산자를 이용하여 조건을 다 써줬음.
const solution = (my_string) => {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (
      my_string[i] !== "a" &&
      my_string[i] !== "e" &&
      my_string[i] !== "i" &&
      my_string[i] !== "o" &&
      my_string[i] !== "u"
    ) {
      answer += my_string[i];
    }
  }
  return answer;
};

// 참고할만한 다른 답 (1) replace + 정규 표현식를 사용
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
/*
  1. replace 메서드 : 자바스크립트에서 문자열 내의 일부 텍스트를 다른 텍스트로 대체하는 데 사용되는 메서드.
      string.replace(searchValue, newValue);
  2. 정규 표현식을 사용한 대체 : replace 메서드는 정규 표현식을 사용하여 패턴에 맞는 모든 문자열을 찾고 대체할 수 있다.
      my_string.replace(/[aeiou]/g, '');
        2-1. g는 'global' 플래그로 문자열 전체를 탐색
        2-2. i는 'case-insensitive' 플래그로 대소문자를 구분하지 않음
        2-3. aeiou를 빈문자열로 대체
*/

// 참고할만한 다른 답 (2) filter, includes 메서드를 활용
function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}
/*
  1. Array.from() 메서드는 문자열을 한 글자씩 분리하여, 각각의 문자를 요소로 갖는 배열을 생성한다.
  2. .includes(t)는 현재 문자 t가 a, e, i, o, u인지 확인하는 메서드.
  3. join() 메서드는 배열의 모든 요소를 빈문자열로 연결하여 하나의 문자열로 만듬.
*/
