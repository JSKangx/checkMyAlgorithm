/*
  머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

/*
  필요한 알고리즘
  1. 나누어서 몫과 나머지를 구하기
  2. 몫과 나머지를 순서대로 배열에 담기
*/

const solution = (money) => {
  let price = 5500;
  let cup = Math.floor(money / price);
  let remain = money % price;
  let array = [cup, remain];
  return array;
};

// 참고할만한 다른 풀이 : 복잡하게 변수에 할당하지 말고, 그냥 바로 배열을 써라.
const solution2 = (money) => {
  return [Math.floor(money / 5500), money % 5500];
};
