const READ_LINE = require("readline");
const RL = READ_LINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

RL.question("Write some word or phrase to verify a palindrome");
