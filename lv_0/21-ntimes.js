/*
  정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
*/

/*
  필요한 알고리즘
  (1) 배열에서 조건에 맞는 원소만 리턴하는 방법
*/

const solution = (n, numlist) => {
  return numlist.filter((value) => value % n === 0);
};
