/*
  괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

  - "()()" 또는 "(())()" 는 올바른 괄호입니다.
  - ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

  '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
*/

/*
  1. (로 열리고 )로 닫혀야한다.
  2. (와 )의 개수가 같아야 한다.
*/

function solution(s) {
  let ifFirst = false;
  let ifSecond = false;

  let count1 = 0;
  let count2 = 0;

  // 1. 조건 : (로 열리고 )로 닫혀야한다.
  if (s.startsWith("(") && s.endsWith(")")) {
    ifFirst = true;
  } else {
    ifFirst = false;
  }

  // 2. 조건 : (와 )의 개수가 같아야 한다.
  for (chr of s) {
    if (chr === "(") {
      count1++;
    } else {
      count2++;
    }
  }

  // 3. 내가 놓치고 있는 조건3은 뭐지?

  if (count1 === count2) {
    ifSecond = true;
  } else {
    ifSecond = false;
  }

  if (ifFirst && ifSecond) {
    return true;
  } else {
    return false;
  }
}

("( )) ((( ))) (( )");
