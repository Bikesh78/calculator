function add(num1, num2){
    displayNumber.textContent = `${+num1 + +num2}`.substring(0,10);
}
function subtract(num1, num2){
    displayNumber.textContent = `${+num1 - +num2}`.substring(0,10);
}
function multiply(num1, num2){
    displayNumber.textContent = `${+num1 * +num2}`.substring(0,10);
}
function divide(num1,num2){
    if(+num2 ===0) return displayNumber.textContent = 'Math Error';
    displayNumber.textContent = `${+num1 / +num2}`.substring(0,10);
}
let operator = '';
function operate (num1, operator, num2){
    if(operator === '+'){
        return add(num1,num2);
    }
    if(operator === '-'){
        return subtract(num1,num2);
    }
    if(operator === '*'){
        return multiply(num1,num2);
    }
    if(operator === '/'){
        return divide(num1,num2);
    }
    
}

const displayNumber = document.querySelector('.displayNum');
const btnNum = document.querySelectorAll(".number");
let input = '';

btnNum.forEach(btnNum => {
    btnNum.addEventListener('click', (e) =>{
        getInput(e);
    });
});
function getInput(e) {
    input += e.target.textContent;
    displayNumber.textContent = input.substring(0,10);
}
const btnDel = document.querySelector('.del');
btnDel.addEventListener('click',(e) =>{
    deleteNumber(e);
});
function deleteNumber(e){ //fix the button from deleting when display shows 0 only
    let temp = input.slice(0,-1);
    input = temp;
    displayNumber.textContent = input;
}
const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click',(e) => clearNumber(e));
function clearNumber(e){
    input = '';
    counter = 0;
    operator = '';
    displayNumber.textContent = 0;
}
const btnDot =document.querySelector('.dot');
btnDot.addEventListener('click', (e) => getDot(e));
function getDot(e){
    if (!input.includes('.')){
        input += '.';
        displayNumber.textContent = input;
    }
}
const btnOperator = document.querySelectorAll('.signs');
let counter = 0;
let firstNum = '';
let secondNum = '';
btnOperator.forEach(btn => {
    btn.addEventListener('click',(e) => {
        getOperand(e);
    });
});
function getOperand(e){
    if (counter === 0){
        firstNum = displayNumber.textContent;
        input = ''; 
        operator = e.target.textContent; 
        counter++;
    } else if (counter > 0){
        secondNum = displayNumber.textContent;
        input = '';
        operate(firstNum,operator,secondNum);
        operator = e.target.textContent;
        firstNum = displayNumber.textContent;
    }
    // console.log(operator);
    // console.log(firstNum);
    
    // console.log(secondNum);
}