num = 12345;
let n = num;
let rev = 0;
while (num > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}
if (n == rev) {
  console.log("Palindrome");
} else {
  console.log("not palindrome");
}
