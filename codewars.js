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