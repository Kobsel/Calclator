function add(...numbers){

    return numbers.reduce((total, current) => {
    return total + current}, 0);

}



function subtract(numb1, numb2){

    return numb1 - numb2;

}

function muliply(...numbers){

    return numbers.reduce((total, current) => {
    return total * current}, 1);

}

function divide(numb1 , numb2){

    if(numb1 === 0){
        prompt("DIVIDE BY ZERO ERROR!")
    }
    return numb1 / numb2;
}

console.log(muliply(1, 2, 3, 43))



var firstOperand;
var Operator;
var secondOperand;


function operate(operator, numb1, numb2) {

    switch (operator) {

        case '+':
            return add(numb1, numb2);
        case '-':
            return subtract(numb1, numb2);
        case '*':
            return muliply(numb1, numb2);
        case '/':
            return divide(numb1, numb2);
        default:
            prompt("NO VALID OPERATOR!");

    }


}

console.log(operate('/', 4, 5));