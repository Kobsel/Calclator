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

//Create Variables for the Display elements


var inputfield = document.querySelector('input')
var textfield = document.querySelector('p')


//Create functionality of Clear Button

var clear = document.querySelector('#Clear-Button')
clear.addEventListener('click', function(e){

    inputfield.value = ''
    textfield.textContent = ''


})



var buttons = document.querySelector('#Number-Pad')
buttons.addEventListener('click', function(e){

    var id = e.target.id
    console.log(id)

    

    if(id !== '/'){


    } else if(id === 'Dot') {

        textfield.textContent = textfield.textContent + '.'


    } else {

        inputfield.value = id
        textfield.textContent = textfield.textContent + id

    }
    

})