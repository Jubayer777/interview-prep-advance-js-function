var obj = {
    name: "test",
    getName: function doSomething() {
        console.log(this.name);
    },
};

// obj.getName();
var getName = obj.getName;

var obj2 = { name: "akshay", getName };
obj2.getName();
