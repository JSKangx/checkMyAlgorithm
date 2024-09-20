/*
  정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.
*/

/*
  필요한 알고리즘
  (1) 배열을 순회하는 방법
  (2) 조건에 맞는 원소를 만났을 때 해당 원소의 인덱스를 얻는 방법
  (3) 음수가 없다면 -1을 return 하는 방법
*/

const solution = (num_list) => {
  let answer = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      answer = i;
      break;
    } else {
      answer = -1;
    }
  }
  return answer;
};

// 참고할만한 다른 사람의 풀이 : .findIndex 메서드 사용
const solution2 = (num_list) => num_list.findIndex((v) => v < 0);
