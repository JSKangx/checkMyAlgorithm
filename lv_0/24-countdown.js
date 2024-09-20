/*
  정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  (1) start_num에서 end_num까지 1씩 감소시키는 반복문
  (2) start_num부터 end_num까지의 숫자를 배열에 넣어 반환하는 방법
*/

const solution = (start_num, end_num) => {
  let answer = [];
  for (let i = start_num; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
};
