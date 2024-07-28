// function add(a) {
//     return function (b) {
//         console.log(a + b);
//     };
// }

// add(2)(4)

function multiply(a, b) {
    console.log(a * b);
}
function curryMul(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        };
    };
}

multiply(2,5)

var mul=curryMul(multiply);
mul(2)(8);
