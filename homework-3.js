// task 1
function calculateSum(...nums) {
    let sum = 0;
    for (n in nums) {
        sum += nums[n]
    }
    return sum;
};
console.log(calculateSum(1, 2, 3)); // 6


// task 2
function isTriangle(a, b, c) {
    if (((a + b) >= c) & (a <= (b + c)) & (b <= (a + c))) {
        return true;
    } else
        return false;
}
console.log(isTriangle(5, 6, 7)); // true
console.log(isTriangle(2, 9, 3)); // false


// task 3
function isIsogram(str) {
    const alphabeticStr = str.toLowerCase().replace(/[^a-z]/g, '');

    const charSet = new Set(alphabeticStr);

    return charSet.size === alphabeticStr.length;
}
console.log(isIsogram('')); // true
console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('abab')); // false
console.log(isIsogram('hello')); // false


// task 4
function isPalindrome(str) {
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < alphanumericStr.length / 2; i++) {
        if (alphanumericStr[i] !== alphanumericStr[alphanumericStr.length - i - 1]) {
            return false;
        }
    }

    return true;
}
console.log(isPalindrome('')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false


// task 5
function showFormattedDate(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} of ${month}, ${year}`;
}
console.log(showFormattedDate(new Date('05/12/22'))); // '12 of May, 2022'


// task 6
function letterCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
console.log(letterCount("Marry", "r")); // 2
console.log(letterCount("Barny", "y")); // 1
console.log(letterCount("", "z"));      // 0


// task 7
function countRepetitions(arr) {
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element in counts) {
            counts[element]++;
        } else {
            counts[element] = 1;
        }
    }
    return counts;
}

console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }


// task 8
function calculateNumber(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = num * 2 + arr[i];
    }
    return num;
}

console.log(calculateNumber([0, 1, 0, 1])); // 5
console.log(calculateNumber([1, 0, 0, 1])); // 9
