var gVariable="Hello World";
function getVariable(){
    console.log(gVariable);
}
function sendMessage(){
    return getVariable();
}
sendMessage();