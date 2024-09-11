/*
  머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
  구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
*/

/*
  필요한 알고리즘
  1. 가격별로 할인율을 다르게 적용하는 조건식
    1-1 100,000원 미만은 할인을 해 주면 안 되기 때문에 구간을 설정해줘야 한다.
    1-2. 수학처럼 0 < x < 10 과 같은 식은 안 되고, && 연산자를 사용해야 한다.
*/

const solution = (price) => {
  let discount = 0;
  if (price >= 100000 && price < 300000) {
    discount = 0.05;
  } else if (price >= 300000 && price < 500000) {
    discount = 0.1;
  } else if (price >= 500000) {
    discount = 0.2;
  }
  let totalPrice = parseInt(price - price * discount);

  return totalPrice;
};

// 참고할만한 다른 풀이 : for... of 반복문을 사용함.
const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const solution2 = (price) => {
  for (const discount of discounts) {
    if (price >= discount[0]) return Math.floor(price - (price * discount[1]) / 100);
  }
  return price;
};
/*
  1. 배열의 원소로 배열을 넣을 수 있다.
  2. 배열의 원소를 순회하며, 내부 배열의 원소에 접근할 수 있다.
  3. 큰 금액부터 조건을 걸면, 굳이 구간으로 조건을 설정해주지 않아도 된다.
  4. 소수점 이하를 버려야 하기 때문에 parseInt보다는 Math.floor가 더 적절하다.
*/
