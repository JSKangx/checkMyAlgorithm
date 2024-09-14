/*
  문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  1. 문자열의 문자가 대문자인지 소문자인지 확인하는 조건문
    1-1. 각각의 문자를 toUpperCase 했을 때, toLowerCase 했을 때와 같은지 체크
    1-2. toUpperCase와 같다면 원래 대문자임, toLowerCase와 같다면 원래 소문자임.
  2. 대문자, 소문자로 바꾸는 함수
    2-1. 조건에 따라 toUpperCase, toLowerCase 적용.
*/

const solution = function (my_string) {
  let myStringArray = [...my_string];
  let newArray = myStringArray.map((value) => {
    if (value === value.toUpperCase()) {
      return value.toLowerCase();
    } else {
      return value.toUpperCase();
    }
  });

  return newArray.join("");
};

// 참고할만한 풀이 (1) 굳이 배열로 바꾸지 않고 문자열을 순회해도 된다.
function solution(my_string) {
  let answer = "";
  for (let i of my_string) {
    if (i === i.toUpperCase()) {
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  return answer;
}

// 참고할만한 풀이 (2) : if문을 삼항연산자로 대체하고, 반환된 값을 바로 리턴해도 된다.
function solution(my_string) {
  var answer = "";
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
/*
  1. answer를 빈문자열로 초기값 설정
  2. 문자열의 각각의 문자에 대해 삼항 연산자 실행
    2-1. 문자가 원래 소문자라면 대문자로 바꾸고, 아니라면 소문자로 바꾼 값을 answer에 누적 +
  3. 바뀐 answer 반환
*/
