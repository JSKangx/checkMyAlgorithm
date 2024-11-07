/*
  함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
*/

/*
  필요한 알고리즘
  1. x부터 x씩 증가시키는 방법
  2. n번만 반복하는 방법
    - count 변수 활용
    - 반복할 때마다 count 1씩 증가
  3. 배열에 push
*/

const solution = (x, n) => {
  let answer = [];
  let count = 1;
  for (let i = x; count <= n; i = i + x) {
    answer.push(i);
    count++;
  }

  return answer;
};

// 참고할만한 다른 풀이 (1) i를 카운트로 쓰고, 배열의 원소를 x * i로 함
function solution2(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
/*
  1. x씩 증가한다는 건 x의 배수의 모음집이라는 것
*/

// 참고할만한 다른 풀이 (2) 배열 메서드 fill, map 사용
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

/*
  1. Array(n) : 길이가 n인 빈 배열을 생성
  2. fill(x) : 배열의 모든 요소를 x로 채움
  3. .map((v, i) => (i + 1) * v
    - index(i)를 1씩 증가시키며 현재 요소를 곱함
    - 새로운 배열로 반환
*/
