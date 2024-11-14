// Wow I did this
function findDifference(a, b) {
    const sumA = a[0] * a[1] * a[2]; // Multiply each number in a (e.g. [1, 2, 3])
    const sumB = b[0] * b[1] * b[2]; // Multiply each number in b (e.g. [4, 5, 6])
    return Math.abs(sumA - sumB) // Return the difference as the absolute value (no negative)
  }
  console.log(findDifference([3, 2, 5], [1, 4, 4]))


  function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]); // Just do it all on one line duh
  }