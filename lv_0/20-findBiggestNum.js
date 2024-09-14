/*
  정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

/*
  필요한 알고리즘
  1. 배열의 원소 중 가장 큰 수를 찾는 법
    1-1. sort 메서드로 내림차순 배열한 다음에
    1-2. 첫 번재 원소와 같은 걸 찾고
    1-3. 그 i를 반환하면 됨.
  2. 해당 원소의 인덱스를 구하는 법
  3. 그 두 가지를 새로운 배열에 차례로 담는 법.
*/

const solution = function (array) {
  // 인수로 전달받은 배열을 스프레드 연산자를 통해 펼쳐준 뒤 내림차순으로 정렬하여 새 배열에 할당
  // 이렇게 하는 이유 : sort() 메서드는 원본 배열을 변경하기 때문.
  let newArray = [...array].sort((a, b) => b - a);
  // 가장 첫번째 인수(가장 큰 수)를 변수에 할당
  let big = newArray[0];
  let count = 0;

  // 인수로 전달받은 배열의 원소를 순회하며 big이랑 같은지 확인
  // big이랑 같을 때의 i를 count에 할당.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === big) {
      count = i;
    }
  }
  return [big, count];
};

// 참고할만한 다른 답 : Math.max(), indexOf()
function solution2(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
/*
  1. Math.max() : 배열에서 가장 큰 수를 찾아주는 메서드.
  2. array.indexOf() : 인수로 전달된 아이템이 array라는 배열 안에서 몇 번째 인덱스인지 알려주는 메서드
*/
