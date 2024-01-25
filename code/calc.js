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



//Create Variables for the Display elements


var inputfield = document.querySelector('input')
var textfield = document.querySelector('p')

//Create Variables to save operands

var numb1;
var numb2;
var operator;

var numb2Index = -1;
var firstNumberSet = false;


//Create functionality of Clear Button

var clear = document.querySelector('#Clear-Button')
clear.addEventListener('click', function(e){

    inputfield.value = ''
    textfield.textContent = ''


})



var numberButtons = document.querySelector('#Number-Pad')
numberButtons.addEventListener('click', function(e){

    var id = e.target.id
    console.log(id)

    

    if(id === '/'){

        // I dunno

    } else if(id === 'Dot') {

        textfield.textContent = textfield.textContent + '.'

    } else {

        if(firstNumberSet && numb2Index === -1) {

            numb2Index = textfield.textContent.length

        }

        inputfield.value = id
        textfield.textContent = textfield.textContent + id

        

    }
    

})



//Create Functionality of Operator Buttons


var operators   =   document.querySelector('#Operations')
operators.addEventListener('click', function(e){

    var id = e.target.id

    if(id === 'Delete'){

        deleteLastCharacter(textfield.textContent)

    }  else if(id === 'Operate') {

        const text = textfield.textContent
        numb2 = parseInt(text.slice(numb2Index, text.length))

        textfield.textContent = simpleOperate(operator, numb1, numb2)

    }
    else {

        operator = id

        if(!firstNumberSet){

            numb1 = parseInt(textfield.textContent)
            firstNumberSet = true

        }
      

        if(wasLastButtonNumber()){
            inputfield.value = id
            textfield.textContent = textfield.textContent + ' ' + id + ' '
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