/*
  어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
*/

function solution(absolutes, signs) {
  let newArr = [];

  for (let i = 0; i < absolutes.length; i++) {
    let sign = signs[i] === true ? "+" : "-";
    newArr.push(parseInt(`${sign}${absolutes[i]}`));
  }

  return newArr.reduce((sum, num) => sum + num, 0);
}

// 참고할만한 다른 답 : answer에 바로 셈을하는 방법
function solution2(abs, signs) {
  let answer = 0;

  for (let i = 0; i < abs.length; i++) {
    signs[i] ? (answer += abs[i]) : (answer -= abs[i]);
  }

  return answer;
}

/*
  장점
  1. reduce 메서드를 안 써도 된다
  2. 새로운 배열 할당에 메모리를 안 써도 된다.
*/
