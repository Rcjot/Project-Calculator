/* 

answer

operand1
operand2
operator

listen for buttons


*/


const ansTop = document.querySelector("#ansTop");
const ansBot = document.querySelector("#ansBot");

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const bplus = document.querySelector("#bplus");
const bequals = document.querySelector("#bequals");
const bminus = document.querySelector("#bminus");
ansTop.textContent = ""
ansBot.textContent = "";
let opArr = ['','',''];
let screenTopText = '';
let screenBotText = '';
let ANS;
let op1Bool = true;
let equalsBool = false;
let op1String = '';
let op2String = '';
let operator = '';

function cleanString() {
    op1String = '';
    op2String = '';
}
function eqOperand(num) {
    if (!equalsBool) {
        op1Bool ? op1String += num : op2String += num;
        // if (!op1Bool){

        // } dont do this
    }else{
        screenTopText = "";
        cleanString();
        op1Bool = true;
        op1Bool ? op1String += num : op2String += num;

    }
    screenBotText += num;
    ansBot.textContent = screenBotText;
    equalsBool = false;
}
function eqOperator(ope){
    if(equalsBool){
        screenTopText = "";
        op1String = ANS;
    }
    if (!op1Bool){
        op1String = ANS;
        console.log("look" + op1String + operator + op2String);
        // operate(ANS, op2String, operator);
    }
    op1Bool = false;
    console.log("op1bool:" + op1Bool);
    equalsBool =false;
    operator = ope;
    opArr[0] = op1String;
    opArr[1] = ope;
    screenTopText += op1String + " " + ope
    ansTop.textContent = screenTopText;
    screenBotText = '';
    ansBot.textContent = '';
    console.log(opArr);
}


function operate(op1='', op2='', op=''){
    
    console.log(opArr);
    let op1P = parseFloat(op1);
    let op2P = parseFloat(op2);
    switch (op) {
        case '+':
            ANS = op1P + op2P;
            cleanString();
            break;
        case '-':
            ANS = op1P - op2P;
            cleanString();
            break;

    }
    ansBot.textContent = ANS;
    
    ansTop.textContent = screenTopText;

}

b1.addEventListener("click", () => {
    eqOperand('1');

})
b2.addEventListener("click", () => {
    eqOperand('2');

})
b3.addEventListener("click", () => {
    eqOperand('3');

})
bplus.addEventListener("click", () => {
    eqOperator('+');
});
bminus.addEventListener("click", () => {
    eqOperator('-');
})
bequals.addEventListener("click", () => {
    console.log(op1String + " " + op2String);
    console.log("op1Bool: "+op1Bool);
    opArr[2] = op2String;
    
    // console.log(op2String);
    // console.log(screenTopText);
    screenTopText += " " + op2String; // update answer screen fo
    ansTop.textContent = screenTopText;
    // console.log(screenTopText);
    
    ansBot.textContent = '';

    operate(op1String, op2String, operator);
    equalsBool = true;
    

    /*
    after every equals
    set up a bool

    make a function for every button that asks if true 
    (meaning button clicked before is equals) 
    for operand {
        ignore operand1 = ans;
    }
    for operator {
        keep operand1 = ans;
    }
    */
});

