const repeatLetter = (text, times = 1) => text.trim().split("").map((x, i) =>  x == " " ? " " : x.repeat(times)).join("");
console.log(repeatLetter("what ! ", 2));
module.exports = repeatLetter;