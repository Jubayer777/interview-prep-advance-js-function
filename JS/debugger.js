function test() {
    let result="";
    for (var i = 1; i <= 5; i++) {
        result += "*";
    }
    document.getElementById("result").innerText=result;
}
test();
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     play(status){
//         console.log(`${this.name} aged ${this.age} playing ${status}`);
//     }
// }

// const person1=new Person('sakib');
// const person2=new Person('rakib',34);

// person1.play('well');
// person2.play('fairy');
