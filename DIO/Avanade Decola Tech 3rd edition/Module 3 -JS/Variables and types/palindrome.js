const READ_LINE = require("readline");
const RL = READ_LINE.createInterface({
  input: process.stdin,
  output: process.stdout,
});

RL.question(
  "Write some word or phrase to verify a palindrome: \n",
  (palindrome) => {
    if (isLetter(palindrome)) {
    }
    RL.close();
  }
);

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function replaceSpecialChars(str) {
  str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
  str = str.replace(/[àáâãäå]/, "a");
  str = str.replace(/[ÈÉÊË]/, "E");
  str = str.replace(/[Ç]/, "C");
  str = str.replace(/[ç]/, "c");
  str = str.replace(/[oòóôõöø]/, "o");
  str = str.replace(/[OÒÓÔÕÖ]/, "O");

  return str.replace(/[^a-z0-9]/gi, "");
}

function isLetter(string) {
  !string || isNumber(string) ? console.log(new TypeError("It isn't a text! Please, don't try to trick my program.")) : verifyPalindrome(string);
}
  function verifyPalindrome(string){
    let removeSpecial = replaceSpecialChars(string);
    let originalPalindrome = removeSpecial.split("").filter((el) => el !== " ");
    let reversePalindrome = originalPalindrome.slice().reverse();
    originalPalindrome.toString().toUpperCase() ==
    reversePalindrome.toString().toUpperCase()
      ? console.log(`Yes!! ${string} is a palindrome.`)
      : console.log("Nop!, try again.");
  }
    
