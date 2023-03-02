//task 1
function toCamelCase(str) {
    str = str.replace(/[.\-=/_]/g, ' ');

    var words = str.split(' ');

    for (var i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}
console.log(toCamelCase("background-color")); // Output: "backgroundColor"
console.log(toCamelCase("list-style-image")); // Output: "listStyleImage"
console.log(toCamelCase("-webkit-transition")); // Output: "WebkitTransition"


// task 2
function filterAndReplace(arr, a, b) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}
let arr = [5, 3, 8, 1];
filterAndReplace(arr, 1, 4);
console.log(arr); // Output: [3, 1]


//task 3
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];

let usersMapped = users.map(function (user) {
    return { fullName: user.name + ' ' + user.surname, id: user.id };
});

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id); // Output: 1
console.log(usersMapped[0].fullName); // Output: John Smith


//task 4
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Output: ["Hare", "Krishna", ":-O"]


// task 5
function groupById(arr) {
    return arr.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
    }, {});
}

let ussers = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(ussers);

console.log(usersById);
// Output: {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }


// task 6
function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "…";
    }
    return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te…"
console.log(truncate("Hi everyone!", 20)); // "Hi everyone!"


// task 7
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}


//task 8
let user = { named: "John", years: 30 };

let {named, years: age, isAdmin = false} = user;

console.log(named); // John
console.log(age); // 30
console.log(isAdmin); // false