
fruit = ["apple", "banana", "cherry"];
console.log("ARRAY:", fruit) // Show array

console.log("Fruit:", ...fruit)
console.log("Join:", fruit.join(" "))

function menu(a,b,c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

menu(...fruit) // Spreads (Works)
// menu(fruit.join(" ")) // Does Not Spreads (Doesn't Works)
