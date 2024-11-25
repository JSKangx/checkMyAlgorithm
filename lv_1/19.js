/*
  정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
*/

/*
  필요한 알고리즘
  1. 배열에서 가장 작은 원소를 찾아내는 방법
    - Math.min
  2. 해당 원소를 배열에서 제거하는 방법 : filter
*/

function solution(arr) {
  let newArr = arr.filter((num) => num !== Math.min(...arr));

  if (newArr.length > 0) {
    return newArr;
  } else {
    return [-1];
  }
}
