export const getFizzBuzzResult = (count) => {
  let result = [];
  for (let i = 1; i <= count; i++) {
    let out = "";
    if (i % 3 === 0) out += "Fizz";
    if (i % 5 === 0) out += "Buzz";
    result.push(out || i);
  }
  return result;
};
