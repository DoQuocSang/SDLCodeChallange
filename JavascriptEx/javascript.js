
// >>> PART 1 <<< //
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


// ========================================================


// >>> PART 2 <<< //
// Ex 1 ===================================================
// Write a function to convert a string to title case
// ========================================================
// const str = prompt('Enter string: ');

function ConvertToTitleCase(str) {
    var arr = str.toLowerCase().trim().split(" ");

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" ");
}

// console.log(`"${str}" ---> "${ConvertToTitleCase(str)}"`,);

// Ex 2 ===================================================
// Write a function which can convert the time input given in 12 hours format to 24 hours format
// ========================================================
// const str = prompt('Enter time (hh:mm AM/PM): ');
function FormatNumber(arr) {
    for(let i = 0; i < arr.length; i++){
        if(!arr[i].match(/0\d/g) && parseInt(arr[i]) < 10) {
            arr[i] = '0' + arr[i];
        }
    }
}

function CheckType(type, hour) {
    let result = hour;
    switch(type) {
        case "AM":
            if(hour === "12") result = "00";
            break;
        case "PM":
            if(hour !== "12") result = parseInt(hour) + 12 + "";
            break;
        default:
          console.log("Wrong time format!!!");
    }
    return result;
}

function ConvertTime(str) {
    let type = str.match(/[a-zA-z]+$/).toString().toUpperCase();
    let timeArr = str.match(/\d+:\d+/g).toString().split(":");

    // Convert hour by type
    timeArr[0] = CheckType(type, timeArr[0]);

    // Format num before view
    FormatNumber(timeArr);

    return timeArr.join(":");
}

// console.log(`"${str}" ---> "${ConvertTime(str)}"`,);

// Ex 3 ===================================================
// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.
// ========================================================
const loc = [
    {
        location_key: [32, 22, 11],
        autoassign: 10,
    },
    {
        location_key: [41, 42],
        autoassign: 1,
    },
];
  
const bulkConfig = [
    {
      dataValues: {
        config_key: 100,
      },
    },
    {
      dataValues: {
        config_key: 200,
      },
    },
];

function MapData(loc, bulkConfig) {
    let result = [];
    for(let obj of loc) {
        for(let key of obj.location_key) {
            let item = {
                config_key: bulkConfig[obj.autoassign - 1]?.dataValues.config_key,
                location_key: key,
                autoassign: obj.autoassign,
            }

            result.push(item);
        }
    }

    return result;
}

// console.log(MapData(loc, bulkConfig));

// Ex 4 ===================================================
// Write a function to Replace parameters in url
// ========================================================
// const initialUrl = "/posts/:postId/comments/:commentId";
// console.log(initialUrl.match(/:\w+/g))

function replaceParamsInUrl(initialUrl, arr){
    let newUrl = initialUrl;

    for(let obj of arr) {
        newUrl= newUrl.replace(`:${obj.from}`, obj.to);
    }

    return newUrl;
}

// const resultUrl = replaceParamsInUrl(initialUrl, [
//   { from: "postId", to: "1" },
//   { from: "commentId", to: "3" },
// ]);

// console.log(resultUrl);

// Ex 5 ===================================================
// // Format backend validation message to frontend format
// ========================================================
const backendErrors = {
    email: {
        errors: [
            {
                message: "Can't be blank",
            },
        ],
    },
    password: {
        errors: [
            {
                message: "Must contain symbols in different case",
            },
            {
                message: "Must be at least 8 symbols length",
            },
        ],
    },
    passwordConfirmation: {
        errors: [
            {
                message: "Must match with password",
            },
        ],
    },
};

function FormatMessage(backendErrors) { 
    let result = [];

    for(const value of Object.values(backendErrors)) {
        let item = "";

        for(let error of value.errors) {
            if(item === ""){
                item = item.concat(error.message);
            } else {
                item = item.concat(", ", error.message);
            }
        }

        result.push(item);
    }

    return result;
}

console.log(FormatMessage(backendErrors));