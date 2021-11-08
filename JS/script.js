function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num2 ===0) return 'Math Error';
    return num1/num2;
}
function operate (num1, operator, num2){
    if(operator = '+') return add(num1,num2);
    if(operator = '-') return subtract(num1,num2);
    if(operator = '*') return multiply(num1,num2);
    if(operator = '/') return divide(num1,num2); 
}
let temp = '';
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click',(e) => {
        
        if (e.target.classList.contains("number")){
            temp +=e.target.textContent; 
        } else if (e.target.classList.contains("del")){  
                let newTemp = temp.slice(0,temp.length-1);
                temp= newTemp;
        } 
        const displayNumber = document.querySelector('.displayNum');
        displayNumber.textContent = temp;
        if (e.target.classList.contains("clear")){
            temp = '';
            displayNumber.textContent = '0';
        }           
    });
});
