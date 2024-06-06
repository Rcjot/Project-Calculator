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
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");

const bnegative = document.querySelector("#bnegative");
const bpercent = document.querySelector("#bpercent");
const bdot = document.querySelector("#bdot");
const bplus = document.querySelector("#bplus");
const bequals = document.querySelector("#bequals");
const bminus = document.querySelector("#bminus");
const btimes = document.querySelector("#btimes");
const bdivide = document.querySelector("#bdivide");
const bdel = document.querySelector("#bdel");
const bac = document.querySelector("#bAC");

ansTop.textContent = ""
let screenTopText = '';
ansBot.textContent = "";
let screenBotText = '';

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
    if (screenBotText.split('').includes('.') && num=== '.') return 0;
    if (screenBotText === '' && num === '.'){
        op1Bool ? op1String += '0' : op2String += '0';
        screenBotText +='0';
    }
    if (screenBotText === '0' && num != '.'){
        screenBotText = '';
    }
    if (equalsBool){
        op1Bool = true;
        AC();
        op1Bool ? op1String += num : op2String += num;
    }else{
        console.log("haio");
        op1Bool ? op1String += num : op2String += num;
    }
    // console.log(screenBotText);
    screenBotText += num;

    ansBot.textContent = screenBotText;
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
        console.log("WARNING");
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

function precisionRound(number, precision) {  // copied from internet
    var factor = Math.pow(10, precision); 
    return Math.round(number * factor) / factor; 
  } 

function operate(op1, op, op2){
    let op1Parsed = parseFloat(op1);
    let op2Parsed = parseFloat(op2);
    switch (op) {
        case '+':
            ANS = precisionRound(op1Parsed + op2Parsed, 10);
            cleanString();
            break;
        case '-':
            ANS = precisionRound(op1Parsed - op2Parsed, 10);
            cleanString();
            break;
        case '*':
            ANS = precisionRound(op1Parsed * op2Parsed, 10);
            cleanString();
            break;
        case '/':
            if (op2Parsed === 0) {
                ansBot.textContent = 'no';
                cleanString();
                return 1;
                break;
            }
            ANS = precisionRound(op1Parsed / op2Parsed, 10);
            cleanString();
            break;
    }

    op1String = ANS.toString();
    opsArray[0] = op1String;
    ansBot.textContent = ANS.toString();
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
b4.addEventListener("click", () => {
    eqOperand('4');
});
b5.addEventListener("click", () => {
    eqOperand('5');
});
b6.addEventListener("click", () => {
    eqOperand('6');
});
b7.addEventListener("click", () => {
    eqOperand('7');
});
b8.addEventListener("click", () => {
    eqOperand('8');
});
b9.addEventListener("click", () => {
    eqOperand('9');
});

bnegative.addEventListener("click", () => {
    if (op1String === '') return 0;

    if(equalsBool){
        ansTop.textContent = ""
        screenTopText = '';
    }

    console.log("odfhoaj");
    op1Bool ? op1String = (parseFloat(op1String) * -1).toString()  : op2String = (parseFloat(op2String) * -1).toString();
    screenBotText = (parseFloat(screenBotText) * -1).toString()
    ansBot.textContent = screenBotText;

    equalsBool = false;

});
bpercent.addEventListener("click", () => {
    if (op1String === '') return 0;

    if(equalsBool){
        ansTop.textContent = ""
        screenTopText = '';
    }

    console.log("odfhoaj");
    op1Bool ? op1String = (precisionRound(parseFloat(op1String) /100, 10)).toString()  : op2String = (precisionRound(parseFloat(op2String) /100, 10)).toString();
    screenBotText = (precisionRound(parseFloat(screenBotText) /100,10)).toString()
    ansBot.textContent = screenBotText;

    equalsBool = false;
})
bdot.addEventListener("click", () => {
    console.log("aaa");
    eqOperand('.');
})
bplus.addEventListener("click", () => {
    eqOperator('+');
});
bminus.addEventListener("click", () => {
    eqOperator('-');
})
btimes.addEventListener("click", () => {
    eqOperator('*');
});
bdivide.addEventListener("click", () => {
    eqOperator('/');
});
function AC() {
    ansTop.textContent = ""
    screenTopText = '';
    ansBot.textContent = "";
    screenBotText = '';
    
    //booelans:
    op1Bool = true;
    equalsBool = false;
    operatorBool = '';
    
    ANS = 0;
    opsArray = ['','',''];
    op1String = '', op2String = '', operator = '';
}
bac.addEventListener("click", () => {
    AC();
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
            ansBot.textContent = parseFloat(screenBotText); //to string??
        }

    }

    // op1Bool ? op1String.split().splice(op1String.length-1, 1).join() : op2String.split().splice(op2String.length-1, 1).join()
    // console.log(op1String);
})

bequals.addEventListener("click", () => {
    if(op1Bool && opsArray[2] === '') return 0;
    if(op2String === '' && opsArray[2] === '') return 0;
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


    screenBotText = ANS.toString();


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
    console.log("screenbottext: " + screenBotText);
})


/*
note for self: 

work on situtation where u press operator more than once,
it should ignore its call...



*/