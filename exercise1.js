const verifyPalindrome = (word) => {
    const reversedWord = word.split('').reverse().join('').toLowerCase();
    if (reversedWord === word.toLowerCase()) {
        return "Your word is a palindrome!";
    }
    return "Your word isn't a palindrome...";
};

console.log(verifyPalindrome("Arara"));
console.log(verifyPalindrome("Tigre"));
console.log(verifyPalindrome("Lucas"));
console.log(verifyPalindrome("Reviver"));
