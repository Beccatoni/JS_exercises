// Write a function that checks if a string is a palindrome.
function isPalindrome(str){
    str = str.replace(/[^A-Za=z0-9]/g, '').toLowerCase();
    console.log(str);
    return str ===str.split('').reverse().join('');
}
console.log(isPalindrome("hello"));