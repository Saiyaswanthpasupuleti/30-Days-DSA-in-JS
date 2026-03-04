var secondHighest = function (s) {
  var largest = [];
  function validate(char) {
    return !/[a-z]/i.test(char);
  }

  for (let i = 0; i <= s.length - 1; i++) {
    if (validate(s[i])) {
      if (!largest.includes(s[i])) {
        largest.push(s[i]);
      }
    }
  }
  largest.sort((a, b) => b - a);
  if (largest.length <= 1) {
    return -1;
  } else {
    return Number(largest[1]);
  }
};
console.log(secondHighest("abc1111"));
