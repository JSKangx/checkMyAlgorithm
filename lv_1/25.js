/*
  두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  1. 특정 정수의 약수의 개수를 구하는 방법
    - 약수의 갯수가 홀수인 경우는 제곱수인 경우밖에 없다.
  2. 약수의 개수에 따라 더할지 뺄지를 정하는 조건문
*/

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}

// 참고 할만한 다른 답 : 이중 for문
function solution2(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // i의 약수 개수를 카운트 하기 위한 변수
    let count = 0;

    // i의 약수 개수만큼 count 증가
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }

    // 내부 for문이 끝나고 나서 카운트가 홀수인지 짝수인지 판별
    if (count % 2 === 0) answer -= i;
    else answer += i;
  }

  return answer;
}

/*
  이 방법으로 시도하다가 실패한 이유
  1. count 변수를 어디에 선언해야 할지 몰랐다.
    - 내부에 하자니 j가 증가될 때마다 초기화되고, 루트에 하자니 초기화가 아예 안되고.
    - outer for 루프와 inner 루프 사이에 하면 i가 증가 될 때만 초기화 된다.
*/
