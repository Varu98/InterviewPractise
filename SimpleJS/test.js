const isLeapYear = (num) => {
  let formatNum = Number(num);
  let answer;
  if (formatNum % 4 === 0) {
    if (formatNum % 100 === 0 && formatNum % 400) {
      answer = true;
      return;
    }
  } else answer = false;
  return answer;
};
