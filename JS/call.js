// function sayHello1() {
//     console.log(this.name + " is ");
// }
// var obj = { name: "arif" };
// sayHello1.call(obj)

// function sayHello2(message) {
//     console.log(this.name + " is " + message);
// }
// var obj = { name: "arif" };
// sayHello2.call(obj,'a murderer')

var person = {
    name: "arif",
    sayHello: function () {
        console.log(this.name + " is my friend");
    },
};
var person1 = { name: "hanif" };
person.sayHello.call(person1);
