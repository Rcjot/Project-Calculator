/* 

answer

operand1
operand2
operator

listen for buttons


*/
const lol = document.querySelector("#lol");

const ansTop = document.querySelector("#ansTop");
const ansBot = document.querySelector("#ansBot");

const b0 = document.querySelector("#b0");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const bdot = document.querySelector("#bdot");
const bplus = document.querySelector("#bplus");
const bequals = document.querySelector("#bequals");
const bminus = document.querySelector("#bminus");
const btimes = document.querySelector("#btimes");
const bdivide = document.querySelector("#bdivide");
const bdel = document.querySelector("#bdel");
const bac = document.querySelector("#bac");
ansTop.textContent = ""
let screenTopText = '';
ansBot.textContent = "";
let screenBotText = '0';

//booelans:
let op1Bool = true;
let equalsBool = false;
let operatorBool = '';

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
    ansBot.textContent = parseFloat(screenBotText);
    console.log("op2String1: " + op2String);
    equalsBool = false;
    operatorBool = false;
    operatorBool = '';
}
function eqOperator(ope){
    if (operatorBool === ope) return 0;

    operatorBool = ope;
    
    operator = ope;
    opsArray[0] = op1String;
    opsArray[1] = operator;
    if (op1Bool && op1String === '') {
        op1String = '0';
        opsArray[0] = op1String;

    }
    if (!op1Bool && op2String != '' ){
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

    screenTopText = parseFloat(opsArray[0]) + " " + opsArray[1];
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
        case 'x':
            ANS = op1Parsed * op2Parsed;
            cleanString();
            break;
        case '/':
            if (op2Parsed === 0) {
                ansBot.textContent = 'no';
                cleanString();
                return 1;
                break;
            }
            ANS = op1Parsed / op2Parsed;
            cleanString();
            break;
    }

    op1String = ANS.toString();
    opsArray[0] = op1String;
    ansBot.textContent = ANS;
    operatorBool = '';
    op2String = '';
}
b0.addEventListener("click", () => {
    eqOperand('0');
})
b1.addEventListener("click", () => {
    eqOperand('1');

})
b2.addEventListener("click", () => {
    eqOperand('2');

})
b3.addEventListener("click", () => {
    eqOperand('3');

})
bdot.addEventListener("click", () => {
    console.log("aaa");
    // eqOperand('.');
})
bplus.addEventListener("click", () => {
    eqOperator('+');
});
bminus.addEventListener("click", () => {
    eqOperator('-');
})
btimes.addEventListener("click", () => {
    eqOperator('x');
});
bdivide.addEventListener("click", () => {
    eqOperator('/');
});


bdel.addEventListener("click", () => {

    if (operator != '' && op2String === ''){
        console.log("here")
        operator = '';
        opsArray[1] = operator;
        screenTopText = '';
        ansTop.textContent = screenTopText;
        screenBotText = op1String;
        ansBot.textContent = screenBotText;
        op1Bool = true;
        operatorBool = '';
    }else if(op1Bool === false && op2String === ''){
        console.log('aaaaaaaaa');
        operator = '';
        opsArray[1] = operator;
        screenTopText = '';
        ansTop.textContent = screenTopText;
        screenBotText = op1String;
        ansBot.textContent = parseFloat(screenBotText);
        op1Bool = true;
        operatorBool = '';
    }else{
        console.log("here!");
        if (op1Bool){
            let myarr = op1String.split('');
            console.log(myarr);
            myarr.splice(myarr.length-1,1);
            op1String = myarr.join('');
            screenBotText = op1String;
        }else {
            console.log("hERE!!!")
            let myarr = op2String.split('');
            myarr.splice(myarr.length-1,1);
            op2String = myarr.join('');
            screenBotText = op2String;
        }
        if (screenBotText === ''){
            ansBot.textContent = '';
        }else{
            ansBot.textContent = parseFloat(screenBotText);
        }

    }

    // op1Bool ? op1String.split().splice(op1String.length-1, 1).join() : op2String.split().splice(op2String.length-1, 1).join()
    // console.log(op1String);
})

bequals.addEventListener("click", () => {
    console.log("op2String: " + op2String);

    if (equalsBool){
        
    }else{
        opsArray[2] = op2String;
    }
    if (opsArray.includes('')){
        ansBot.textContent = "syntax error";
        return 0;
    }
    console.log(opsArray);

    let screenTopText2 =  parseFloat(opsArray[0]) +" " + opsArray[1]+ " " + parseFloat(opsArray[2]) + " =";
    ansTop.textContent = screenTopText2;

    operate(opsArray[0], opsArray[1], opsArray[2]);





    equalsBool = true;
    op1Bool = true;
    operatorBool = false;
});



lol.addEventListener("click", () => {
    console.log("ans: " + ANS);
    console.log("op1: "+op1String);
    console.log("op: "+operator);
    console.log("op2: "+op2String);

    // console.log(screenTopText);
    console.log(opsArray);
    console.log("op1bool: " + op1Bool);
    console.log("operatorbool: " + operatorBool);
})


/*
note for self: 

work on situtation where u press operator more than once,
it should ignore its call...



*/