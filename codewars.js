// Wow I did this
function findDifference(a, b) {
    const sumA = a[0] * a[1] * a[2]; // Multiply each number in a (e.g. [1, 2, 3])
    const sumB = b[0] * b[1] * b[2]; // Multiply each number in b (e.g. [4, 5, 6])
    return Math.abs(sumA - sumB) // Return the difference as the absolute value (no negative)
}

function find_difference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]); // Just do it all on one line duh
}

function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
} // .reduce is used here to multiply each number in the list/array (e.g. [a * b = total * c] - [a * b = total * c])

//////////////////////////////////////////////////////////////////////////////////////////////

function stockList(books, categories) {
    cat_text = categories.join("")
    let cat_totals = {}
    categories.forEach(c => cat_totals[c] = 0)
    books.forEach(b => {
        first = b.charAt(0)
        if (cat_text.includes(first)) {
            parts = b.split(" ");
            value = Number(parts[1]); // Second part to the right of the space
            cat_totals[first] += value
        }
    });
    output = []
    for (c in cat_totals) {
        v = cat_totals[c];
        output.push(`(${c} : ${v})`)
    }
    return output.join(' - ');
}

// console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]))
// Expected outcome (A : 200) - (B : 1140)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function arrayDiff(a, b) { // LETS GO THIS IS BEST PRACTICE
    return a.filter(num => !b.includes(num));
} // Filter through the "a" list and if b does not include a num in the "a" list/array return the value out of "a"

// console.log(arrayDiff([1, 2, 3, 2, 5], [2]));
// Expected outcome [1, 3, 5]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function solution(number) { // Best practice POGGERS
    let sum = 0
    for (let i = 0; i < number; i++) { // as long as "i" is less than (number) add 1 to "i" then do the following
        if (i % 3 == 0 || i % 5 == 0) { // if divisiable by 3 or 5 do the following / If not then go back up a line
            sum += i // Add the number divisiable to the sum 
        }
    }
    return sum; // Return the solution
}



// console.log(solution(10)) 
// Expected out come 23
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function disemvowel(str) {
    let vowels = "aeiou" // split("") to seperate the string in a list/array by letter 
    return str.split("").filter(char => !vowels.includes(char.toLowerCase())).join("");
} // Then .filter through each character that DON'T include vowels after setting it to lowercase


function disemvowel(str) { // Best Practice
    // .replace is used to create a new string by replacing parts of the orginal "str"
    return str.replace(/[aeiou]/gi, ''); // /[]/ is used to store characters we want to replace (e.g. vowels or /[aeiou]/) 
} // g is the global flag to match against all characters not just the first
// i is the ignore so the it will match regardless of being uppercase or lowercase
// '' is used at the end to replace the letter

// console.log(disemvowel("Jalen Battle"))
// Expected outcome Jln Bttl

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

function testEven(n) { // Best practice
    return n % 2 === 0;
}; // divide n by 2 if the remainder is 0 return true else false

// console.log(testEven(99)) // Expect result false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeNegative(num) {
    if (num > 0) {
        return -num
    }
    return num
}
// Either two below are best practice
function makeNegative(num) {
    return -Math.abs(num)
} // turn the num to the absoulte value then set negative

function makeNegative(num) {
    return num < 0 ? num : -num;
} // if num is less than 0 return the num else return negative num

// console.log(makeNegative(42)) // Expected result -42

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function basicOp(operation, value1, value2) { // One of the best practices could use switch case
    if (operation == "+") {
        return value1 + value2
    } else if (operation == "-") {
        return value1 - value2
    } else if (operation == "*") {
        return value1 * value2
    } else if (operation == "/") {
        return value1 / value2
    }
}

// console.log(basicOp("-", 15, 18)) // Expected result -3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isDigit(s) {
    return !isNaN(Number(s))
}

function isDigit(s) { // Just parseFloat the string to see if it is a number
    return s == parseFloat(s);
}

jt = "s1111"
kl = "-1218271.4"

// console.log(isDigit(jt))// Expected result false
// console.log(isDigit(kl))// Expected result true 

// console.log(parseFloat(jt))// Expected result NaN
// console.log(parseFloat(kl))// Expected result -1218271.4

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function evenOrOdd(number) { // Best practice
    return number % 2 === 0 ? "Even" : "Odd"
}

//console.log(evenOrOdd(1090909)) // Expected result Odd

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////