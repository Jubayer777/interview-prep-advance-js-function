//primitive data types
var x = "ABC";
var y = 1;
var z = 1.2;
var w = 123344777788999999764343n;
var h;
var i = null;
var symbol;

console.log("primitive");
console.log("x=", typeof x);
console.log("y=", typeof y);
console.log("z=", typeof z);
console.log("w=", typeof w);
console.log("h=", typeof h);
console.log("i=", typeof i);
console.log("symbol=", typeof Symbol(symbol));

//non-primitive data types
var object1 = {name:'Habib', address:'Dhaka'};
var array1=[1,'name', true,5.4]
console.log('object1=',typeof object1);
console.log('array1=',typeof array1);