/*
  정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
*/

/* 
  필요한 알고리즘
  1. 배수(나누어 떨어지는)를 구하는 방법
  2. 곱 연산자를 사용하여 동시 조건 만족시키기
*/

function solution(number, n, m) {
  let answer = 0;
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

// 참고할만한 다른 답 : 단축 평가 + 암묵적 타입변환
// 그런데 코드를 들여다 보고 해석해야 하기 때문에 딱히 좋은 방법같진 않다.
function solution(number, n, m) {
  return +!(number % n || number % m);
}
/*
  1. 합 연산자를 이용한 단축평가(둘 중 하나만 true여도 true) : 먼저 나온 Truthy값을 그대로 반환. Truthy값이 없다면 뒤의 것을 반환.
  2. 둘 다 나누어 떨어지면, 즉 둘 다 0(Falsy)을 반환하면 논리 부정 연산자(!)에 의해 true로 변경.
  3. 암묵적 타입변환에 의해 +true는 1로, +false는 0으로 변환하여 return.
*/
