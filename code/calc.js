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

    if(numb2 === 0){
        prompt("DIVIDE BY ZERO ERROR!")
    }
    return numb1 / numb2;
}

console.log(muliply(1, 2, 3, 43))



var firstOperand;
var Operator;
var secondOperand;


function simpleOperate(operator, numb1, numb2) {

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

console.log(simpleOperate('+', 7, 8))



//Create Variables for the Display elements


var inputfield = document.querySelector('input')
var textfield = document.querySelector('p')

//Create Variables to save operands

var numb1;
var numb2;
var operator;

var numberIndexStart;
var firstNumberSet;
var pointer;
var numbersSet;

function init(){

    inputfield.value = ''
    textfield.textContent = ''
    
    numb1 = -1;
    numb2 = -1;
    operator = '';
    prevOperator = ''

    numberIndexStart = 0;
    pointer = 0;
    firstNumberSet = false;
    numbersSet = 0;
}

init()



//Create functionality of Clear Button

var clear = document.querySelector('#Clear-Button')
clear.addEventListener('click', function(e){

  init()

})



//functionality of Number Buttons

var numberButtons = document.querySelector('#Number-Pad')
numberButtons.addEventListener('click', function(e){

    var id = e.target.id;

    if(id !== '/' && id !== 'Dot'){

        inputfield.value = id;
        textfield.textContent += id;

        confirmNumber(id)

        
        

    }
    

})

function confirmNumber(number){

    if(operator === ''){

        numb1 = buildNumber(numb1, number)

    } else {

        numb2 = buildNumber(numb2, number)

    }

}

function buildNumber(head, tail){

    console.log("build")
    if(head < 0){
        return tail;
    }

    return parseInt(String(head) + String(tail))

}



//Create Functionality of Operator Buttons


var operators   =   document.querySelector('#Operations')
operators.addEventListener('click', function(e){

    var id = e.target.id
    

    if(id === "Operate") {

        //Calculating value resulting from current operator and numbers.
        //numbers need to be parsed to Int explicitly for simpleOperate to function appropriatly

        inputfield.value = simpleOperate(operator, parseInt(numb1), parseInt(numb2))

        console.log("Operator: " + operator + "numb1: " + numb1 + "numb2: " + numb2)


    }
    else if(id === "Delete") {


    }
    else{

        prevOperator = operator
        operator = id;
        

        textfield.textContent = textfield.textContent += " " + id + " "

        if(numb2 !== -1){

            numb1 = simpleOperate(prevOperator, parseInt(numb1), parseInt(numb2));
            numb2 = -1;
            inputfield.value = numb1;

        }

    }

   
})

function deleteLastCharacter(string){


    var length = string.length

    if(wasLastButtonNumber()){

        textfield.textContent = string.slice(0,length-1)

    }  else {

        textfield.textContent = string.slice(0,length-2)

    }

}

function wasLastButtonNumber(){

    const text = textfield.textContent
    const lastChar = text.charAt(text.length-1) 
    

    if (lastChar === '7' ||
        lastChar === '8' ||
        lastChar === '9' ||
        lastChar === '4' ||
        lastChar === '5' ||
        lastChar === '6' ||
        lastChar === '1' ||
        lastChar === '2' ||
        lastChar === '3' ||
        lastChar === '0' ||
        lastChar === '/' ||
        lastChar === ',')  {

        return true

    }

    return false

}




function operate(string){




}