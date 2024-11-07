/*
  정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
*/

/*
  필요한 알고리즘
  1. 배열의 총합을 구하는 방법
  2. 배열의 원소 개수를 구하는 방법
*/

const solution = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
};
