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
    if(operator === '*' && num2 !== ''){
        return multiply(num1,num2);
    }
    if(operator === '/' && num2 !== ''){
        return divide(num1,num2);
    }
    
}

const displayNumber = document.querySelector('.displayNum');
const btnNum = document.querySelectorAll(".number");
let input = '';

btnNum.forEach(btnNum => {
    btnNum.addEventListener('click', (e) =>{
        getInput(e.target.textContent);
    });
});
function getInput(num) {
    input += num;
    displayNumber.textContent = input.substring(0,10);
}
const btnDel = document.querySelector('.del');
btnDel.addEventListener('click',() =>{
    deleteNumber();
});
function deleteNumber(){ 
    if(displayNumber.textContent === '0'){
        return;
    } else{
        let temp = input.slice(0,-1);
        input = temp;
        if (input === ''){
            displayNumber.textContent = 0;
        }else {
            displayNumber.textContent = input;
        }
        
    }
    
}
const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click',() => clearNumber());
function clearNumber(){
    input = '';
    counter = 0;
    operator = '';
    displayNumber.textContent = 0;
}
const btnDot =document.querySelector('.dot');
btnDot.addEventListener('click', () => getDot());
function getDot(){
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
        getOperand(e.target.textContent);
    });
});
function getOperand(userOperator){
    if (counter === 0){
        firstNum = displayNumber.textContent;
        input = ''; 
        operator = userOperator; 
        counter++;
    } else if (counter > 0){
        secondNum = input;
        input = '';
        operate(firstNum,operator,secondNum);
        operator = userOperator;
        firstNum = displayNumber.textContent;
    }
}
const numList = ['0','1','2','3','4','5','6','7','8','9'];
const operatorList = ['+','-','*','/'];
window.addEventListener('keydown',(e) => {
    if(numList.includes(e.key)){
        getInput(e.key);
    }
    if(e.key === '.'){
        getDot();
    }
    if(e.key === "Backspace"){
        deleteNumber();
    }
    if(operatorList.includes(e.key) || e.key ==="Enter"){
        getOperand(e.key);
    }
    if(e.key === "Escape"){
        clearNumber();
    }
})