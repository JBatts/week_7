
// Search

// .ind.....()
// .inc.....()
// .fi..()
// .fi....()

// fill in the blanks what javascript keywords and methods above have to do with search?

corpus = "Now is the time...";
i = corpus.indexOf("is");
console.log(i); // What do we get? ("4")
console.log(corpus.includes("old")); // What do we get? ("false")

data = [3, 2, 2, 1, 33, 4, 2, 1];
console.log(data.find(v => v === 1)); // What do we get? ("1")
console.log(data.filter(v => v === 2)); // What do we get? ("[2, 2, 2]")

// In the capstone we used filter and includes,
// Based on what we selected (park type),
// Rather than custom text we typed,
// Amd we only searched description.
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))