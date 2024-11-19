/*
  자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
*/

/*
  필요한 알고리즘
  1. n을 x로 나눈 나머지가 1인 수를 구하기
  2. 그 수 중에서 가장 작은 수 찾기
    - label 문을 사용해 숫자가 나오면 바로 반복문 탈출
*/

const solution = (n) => {
  loop: for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break loop;
    }
  }

  return answer;
};
/*
  - 굳이 레이블문으로 탈출하지 말고 i를 return 하면 반복문이 끝난다
*/

// 참고할만한 다른 풀이 : while문
function solution2(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
