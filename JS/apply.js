function sayHello(message) {
    console.log(this.name + " is " + message);
}
var obj = { name: "arif" };
sayHello.apply(obj,['a murderer'])
