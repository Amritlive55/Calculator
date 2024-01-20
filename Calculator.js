/*function Calculate(){
const a=parseFloat(document.getElementById("First").value);
var op= document.getElementById("op").value;
const b=parseFloat(document.getElementById("Second").value);
var c;
switch(op){
    case '+': 
    c=a+b;
    break;
    case '-':
    c=a-b;
    break;
    case '*':
    c=a*b;
    break;
    case '/':
    c=a/b;
    break;
    default:
         alert("Invalid Operator") ;
}
//document.write(c);
document.getElementById('res').value=c;

}*/

let display='';
function displayValue(value){
    display+=value;
    document.getElementById('display').value=display;

}
function ClearDisplay(){
    display='';
    document.getElementById('display').value=display;
}

function Result(){
    display=eval(display);
    document.getElementById('display').value=display;
}

function voice(){
    let utterance = new SpeechSynthesisUtterance("Amrit");
    speechSynthesis.speak(utterance);
}