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

console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B"]))
// Expected outcome (A : 200) - (B : 1140)

function arrayDiff(a, b) { // LETS GO THIS IS BEST PRACTICE
    return a.filter(num => !b.includes(num));
} // Filter through the "a" list and if b does not include a num in the "a" list/array return the value out of "a"

console.log(arrayDiff([1, 2, 3, 2, 5], [2]));
// Expected outcome [1, 3, 5]