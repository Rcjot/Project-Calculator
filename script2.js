/* 

answer

operand1
operand2
operator

listen for buttons


*/


const ansTop = document.querySelector("#ansTop");
const ansBot = document.querySelector("#ansBot");

const b0 = document.querySelector("#b0");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const bplus = document.querySelector("#bplus");
const bequals = document.querySelector("#bequals");
const bminus = document.querySelector("#bminus");
ansTop.textContent = ""
let screenTopText = '';
ansBot.textContent = "";
let screenBotText = '';

//booelans:
let op1Bool = true;
let equalsBool = false;
// let operatorBool = false;
let ANS;
let opsArray = ['','',''];
let op1String = '', op2String = '', operator = '';


function cleanString() {
    op1String = '';
    // op2String = '';
    operator = '';
}
function eqOperand(num) {
    
    if (equalsBool){
        op1Bool = true;
        cleanString();
        op1Bool ? op1String += num : op2String += num;
    }else{
        op1Bool ? op1String += num : op2String += num;
    }
    // console.log(screenBotText);
    screenBotText += num;
    ansBot.textContent = screenBotText;
    console.log("op2String1: " + op2String);
    equalsBool = false;
    operatorBool = false;
}
function eqOperator(ope){
    // if (operatorBool) return 0;
    op2String = '';
    operator = ope;
    opsArray[0] = op1String;
    opsArray[1] = operator;

    if (!op1Bool){
        opsArray[2] = op2String;
        console.log("hi! im here "+opsArray);
        operate(opsArray[0], opsArray[1], opsArray[2]);
        // op1String = ANS;
        
        console.log("look here! " + opsArray[1]);
    }
    if (equalsBool){
        // op1String = ANS;
        op1Bool = false;
    }

    screenTopText = opsArray[0] + " " + opsArray[1];
    ansTop.textContent = screenTopText;

    screenBotText = '';
    ansBot.textContent = screenBotText;


    
    op1Bool = false;
    equalsBool = false;
}


function operate(op1, op, op2){
    let op1Parsed = parseFloat(op1);
    let op2Parsed = parseFloat(op2);
    switch (op) {
        case '+':
            ANS = op1Parsed + op2Parsed;
            cleanString();
            break;
        case '-':
            ANS = op1Parsed - op2Parsed;
            cleanString();
            break;

    }
    op1String = ANS;
    opsArray[0] = op1String;
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
    console.log("op2String: " + op2String);
    opsArray[2] = op2String;
    console.log(opsArray);

    let screenTopText2 =  opsArray[0] +" " + opsArray[1]+ " " + opsArray[2];
    ansTop.textContent = screenTopText2;

    operate(opsArray[0], opsArray[1], opsArray[2]);

    ansBot.textContent = ANS;



    equalsBool = true;
    op1Bool = true;
    operatorBool = false;
});



b0.addEventListener("click", () => {
    console.log(op1String);
    console.log(op2String);
    console.log(operator);
    console.log(screenTopText);
    console.log(opsArray);
})


/*
note for self: 

work on situtation where u press operator more than once,
it should ignore its call...



*/