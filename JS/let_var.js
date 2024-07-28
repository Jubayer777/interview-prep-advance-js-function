//function scope and block scope
var x = 3;
if (x === 3) {
    var index = 4;
    console.log("inside block", index);
}

console.log("outside block", index);
