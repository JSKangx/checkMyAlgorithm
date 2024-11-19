/*
  대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

  예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
*/

const solution = (s) => {
  const sToLowerCase = s.toLowerCase();
  console.log(sToLowerCase);
  let countP = 0;
  let countY = 0;

  for (chr of sToLowerCase) {
    if (chr === "p") {
      countP++;
    } else if (chr === "y") {
      countY++;
    }
  }

  console.log(countP, countY);

  if (countP === countY) return true;
  else return false;
};

// 참고할만한 다른 풀이 : .match() 메서드
const solution2 = (s) => {
  return s.match(/p/gi).length === s.match(/y/gi).length;
};

/*
  1. match 메서드는 정규 표현식과 일치하는 값을 검색하고 검색된 결과를 반환하는 데 사용된다.
  2. /p/gi 
    - /p/ : p와 일치하는 문자를 찾는다.
    - g : 일치하는 모든 문자열을 배열로 반환한다.
    - i : 대소문자를 무시하고 비교한다.
*/
