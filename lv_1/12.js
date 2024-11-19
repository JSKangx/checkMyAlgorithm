/*
  임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
  n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
*/

const solution = (n) => {
  let x = Math.sqrt(n);

  return x % 1 === 0 ? (x + 1) * (x + 1) : -1;
};

// 참고할만한 다른 개념 : Math.pow() - 주어진 숫자를 거듭 제곱하는 메서드
// Math.pow(밑 : 거듭제곱할 숫자, 지수 : 몇 번 곱할지 정하는 숫자)