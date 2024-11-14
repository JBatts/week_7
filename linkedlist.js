// How we can visit every item in an infinit list
// Chaining data together
// Linked List
a = { v: 123 };
b = { v: 130 };
c = { v: 111 };
d = { v: 108 };

a.next = b;
b.next = c;
c.next = d;
d.next = null;

// Or you could do it like this 
// Must be backwards can't call next on a value not defined yet
d = { v: 108, next: null };
c = { v: 111, next: d };
b = { v: 130, next: c };
a = { v: 123, next: b };

function look(node) {
    console.log(node.v)
    if (node.next != null) {
        look(node.next)
    } else {
        console.log("All done")
    }
}
look(a);

// Other Data Structures
// Tree (Hierachy "parent/child" "red/black") 
// Graph (No Hierachy "no kids")

// Sorting is the most common