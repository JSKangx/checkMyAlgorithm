/*
  정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  (1) 배열에서 n번째 원소부터 마지막 원소까지의 모든 원소를 반환하는 방법
*/

const solution = (num_list, n) => {
  return num_list.slice(n - 1);
};

// n 번째 원소부터 리턴하려면 slice(n - 1)을 해야 한다.
