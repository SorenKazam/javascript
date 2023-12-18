// calc memory
var displayNumbers = [];
var currentNumber = '';

// get the elements
var calcDisplay = document.querySelector('td#display')
// numbers
var btnNumZero = document.querySelector('td#btn-num-zero');
var btnNumOne = document.querySelector('td#btn-num-one');
var btnNumTwo = document.querySelector('td#btn-num-two');
var btnNumThree = document.querySelector('td#btn-num-three');
var btnNumFour = document.querySelector('td#btn-num-four')
var btnNumFive = document.querySelector('td#btn-num-five')
var btnNumSix = document.querySelector('td#btn-num-six')
var btnNumSeven = document.querySelector('td#btn-num-seven')
var btnNumEight = document.querySelector('td#btn-num-eight')
var btnNumNine = document.querySelector('td#btn-num-nine')
//action buttons
var btnActionAc = document.querySelector('td#btn-action-ac')
var btnActionEnter = document.querySelector('td#btn-action-enter')
var btnActionDot = document.querySelector('td#btn-action-dot')
// operator buttons
var btnOpSoma = document.querySelector('td#btn-op-soma')
var btnOpSubt = document.querySelector('td#btn-op-subt')
var btnOpDivi = document.querySelector('td#btn-op-divi')
var btnOpMult = document.querySelector('td#btn-op-mult')

// adding numbers to the buttons
btnNumZero.innerHTML = '0';
btnNumOne.innerHTML = '1';
btnNumTwo.innerHTML = '2';
btnNumThree.innerHTML = '3';
btnNumFour.innerHTML = '4';
btnNumFive.innerHTML = '5';
btnNumSix.innerHTML = '6';
btnNumSeven.innerHTML = '7';
btnNumEight.innerHTML = '8';
btnNumNine.innerHTML = '9';
// adding operators to the buttons
btnOpSoma.innerHTML = '+'
btnOpSubt.innerHTML = '-'
btnOpDivi.innerHTML = '/'
btnOpMult.innerHTML = '*'
// adding action buttons to the buttons
btnActionAc.innerHTML = 'AC'
btnActionEnter.innerHTML = '='
btnActionDot.innerHTML = '.'

// calc display default cursor
if (currentNumber.length === 0){
    calcDisplay.textContent = '0'
}

// Agrupando todos os butoes numericos
var numericButtons = document.querySelectorAll('.numeric-button')

// add digits
numericButtons.forEach(function(button){
    button.addEventListener('click', function(){
        if (button.textContent === '0'){
            if (currentNumber.length !== 0){
                addDigit(button.textContent)
            } else {
                console.error('Zerro')
            }
        } else {
            addDigit(button.textContent)
        }
    })
})

// butao all clear
btnActionAc.addEventListener('click', clear)

// add operators
btnOpSoma.addEventListener('click', function(){
    addOperator('+')
})


function clear() {
    console.log('Clear() called')
    displayNumbers = [];
    currentNumber = '';
    updateDisplay()
    calcDisplay.textContent = '0';
}


function addDigit(digit){
    currentNumber += digit
    updateDisplay()
}

function addOperator(operator){
    if (currentNumber !== ''){
        displayNumbers.push(currentNumber)
        currentNumber = ''
        displayNumbers.push(operator)
        updateDisplay()
    }
}

function updateDisplay() {
    if(currentNumber === '89572023121'){
        window.alert('Welcome DocMods')
    }
    calcDisplay.textContent = displayNumbers.join(' ') + ' ' + currentNumber
}