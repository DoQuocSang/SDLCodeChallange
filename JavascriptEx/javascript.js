
// Ex 1 ===================================================
// Design a function which returns a fibonacci sequence value
// ========================================================

// const number = parseInt(prompt('Enter number: '));

function FibonacciValue(num) {
    if(num <= 1)
        return num
    else {
        return FibonacciValue(num - 1) + FibonacciValue(num - 2);
    }
}

function FibonacciSequence(num) {
    let arr = [];
    let firstNum = 0, secondNum = 1;
    if(num === 0) {
        arr = [0];
    } else if(num === 1) {
        arr = [1];
    } else if(num === 2) {
        arr = [0, 1];
    } else {
        for (let i = 1; i <= num; i++) {
            arr.push(firstNum);
            let sum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = sum;
        }
    }

    return arr;
}

// console.log('Fibonacci sequence:', FibonacciSequence(number));
// 0 1 1 2 3 5 8 13 21 34

// Ex 2 ===================================================
// Write a function which checks if string is a palindrome
// ========================================================

// const str = prompt('Enter string: ');

function isPalindrome(str) {
    for (let i = 1; i <= str.length/2; i++) {
        if(str[i] !== str[str.length - 1 -i]) {
            return false;
        }
    }
    return true;
}

// console.log(`${str} is`, isPalindrome(str) ? "palindrome" : "not palindrome" );


// Ex 3 ===================================================
// Write a function which checks if string is an anagram
// ========================================================

// const str1 = prompt('Enter string 1: ');
// const str2 = prompt('Enter string 2: ');

function isAnagram(str1, str2) {
    return formatString(str1) === formatString(str2);
}

function formatString(str) {
    return str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
}

// console.log(`"${str1}" and "${str2}" is`, isAnagram("silent", "listen") ? "anagram" : "not anagram")


// Ex 4 ===================================================
// Write a function which counts vowels in a string
// 5 basic vowel: u, e, o, a, i
// ========================================================
// const str = prompt('Enter string: ');

function CountVowel(str) {
    return str.match(/[aeoiu]/gi).length;
}

// console.log(`"${str}" has "${CountVowel(str)}" vowel(s)`,);



