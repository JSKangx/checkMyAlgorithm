/*
  문제 :
  문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 개념
  1. 문자열을 순회하는 함수
  2. 문자열을 순회해서 문자열을 반환하는 함수
  2. 뒤에서부터 --하면서 순회해서 리턴하면 어떨까?
*/

// 내가 제출한 답
function solution(my_string) {
  var answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}
/*
  위와 같은 답을 쓴 이유
  1. 문자열을 뒤에서 부터 순회하기 위해 i를 1씩 감소시켰다.
  2. 문자열의 인자는 0번부터 시작하기에 초기값을 .length-1로 해줬다.
  3. my_string[i]를 answer에 할당된 문자열에 계속 더해줬다.
*/

// 참고할만한 다른 답
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}
/*
  위 답에서 쓴 개념
  1. 문자열을 분해해서 객체의 각 인자로 담았다. (split 메서드도 사용 가능)
  2. .reverse 메서드를 사용해 배열의 순서를 역순으로 뒤집었다.
  3. .join 메서드를 사용하여 배열의 모든 요소를 다시 하나의 문자열로 결합했다.
  3-1. 결합할 때의 구분자는 '공백없음'이었다.
*/
