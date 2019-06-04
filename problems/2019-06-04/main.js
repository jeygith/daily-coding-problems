const jkt = require('jkt');

function main() {
    console.log("Hello, world!")
}

function solution() {
    console.log("solution");
    return "solution";
}


const Person = jkt`
    name: String
    age: Number`;


// node helper function
function Node(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function unival(node) {
    // console.log(node);

    if (node === null || node.value === null) return 0;

    let unique = true;

    if (node.left !== null && node.right !== null) {
        unique = node.left.value === node.right.value && node.right.value === node.value;
    } else if (node.left !== null) {
        unique = node.left.value === node.value;
    } else if (node.right !== null) {
        unique = node.right.value === node.value;
    }

    // console.log("unique: " + unique);

    if (!unique) {
        return unival(node.left) + unival(node.right);
    }

    return unival(node.left) + unival(node.right) + 1;


    /*    const someVar = Person({name: "Aditya", age: "26"});

    console.log(someVar);
    someVar.name // print "Aditya"
    someVar.age // print 26 (integer)*/

}


var root = new Node(0, new Node(1, null, null), new Node(0, new Node(1, new Node(1, null, null), new Node(1, null, null)), new Node(0, null, null)));

var root2 = new Node("Merry",
    new Node("Christmas", null, null),
    new Node("Tree", null, null));

console.log(unival(root));
console.log(unival(root2));
