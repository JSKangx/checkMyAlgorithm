/*
  0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  1. 없는 숫자를 찾아 더하려면 0 ~ 9를 더한 값(45)에서 배열 원소의 총 합을 빼면 답이 나오지만, 그렇게 접근하지 않겠다.
  2. 기준이 되는 배열을 만들어두고 그 배열에서 numbers의 원소와 같은 것만 제거해 남은 원소만 더해야겠다.
*/

function solution(numbers) {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < numbers.length; i++) {
    let index = array.findIndex((num) => num === numbers[i]);
    array.splice(index, 1);
  }

  return array.reduce((sum, num) => sum + num);
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);

// 참고할만한 다른 답 : for 문의 i 자체를 기준이 되는 배열로 쓰는 방법
function solution2(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
}

// numbers 배열에 i가 포함되어 있지 않다면 해당 i를 정답에 더함.
