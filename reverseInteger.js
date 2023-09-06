// 7. https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  let reverseNo = 0;
  while (x != 0) {
    let remainder = x % 10;
    if (x < 0) {
      x = Math.ceil(x / 10);
    } else {
      x = Math.floor(x / 10);
    }
    reverseNo = reverseNo * 10 + remainder;
  }

  if (reverseNo > 2147483647 || reverseNo < -2147483648) {
    return 0;
  }

  return reverseNo;
};
