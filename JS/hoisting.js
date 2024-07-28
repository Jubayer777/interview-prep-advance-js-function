//js hoisting

//usual behavior
 var x= 1;
 function test() {
    console.log('usually called');
 }
 console.log('x=',x);
 test();

 //hoisting behavior
 y= 2;
 console.log('y=',y);
 test2();
 var y;
 function test2() {
    console.log('hoisting called');
 }
