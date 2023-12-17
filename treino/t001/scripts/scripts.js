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
//action buttons
var btnActionAc = document.querySelector('td#btn-action-ac')
var btnActionEnter = document.querySelector('td#btn-action-enter')
// operator buttons
var btnOpSoma = document.querySelector('td#btn-op-soma')

// adding button numbers to the buttons
btnNumZero.innerHTML = '0';
btnNumOne.innerHTML = '1';
btnNumTwo.innerHTML = '2';
btnNumThree.innerHTML = '3';
btnNumFour.innerHTML = '4';
btnNumFive.innerHTML = '5';
btnNumSix.innerHTML = '6';

// calc display default cursor
if (currentNumber.length === 0){
    calcDisplay.textContent = '0'
}

btnActionAc.addEventListener('click', clear)

// add digits
btnNumZero.addEventListener('click', function() {
    if (currentNumber.length !== 0){
        addDigit('0')
    } else {
        console.error('Zerro')
    }
})

btnNumOne.addEventListener('click', function() {
    addDigit('1')
})

btnNumTwo.addEventListener('click', function(){
    addDigit('2')
})

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
    console.log('displayNumbers: ' + displayNumbers)
    console.log('currentNumbers:' + currentNumber)
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
        console.log('Welcome DocMods')
    }
    calcDisplay.textContent = displayNumbers.join(' ') + ' ' + currentNumber
}


/* 
<section class="calc">
        <table>
            <thead>
                <tr>
                    <td colspan="4" id="display">342423789416237841623948172649823764982376149823674192387425452345234523452345236.359</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="btn-action-ac">AC</td>
                    <td id="btn-op-divi">/</td>
                    <td id="btn-op-mult">*</td>
                    <td id="btn-op-subt">-</td>
                </tr>
                <tr>
                    <td id="btn-num-seven">7</td>
                    <td id="btn-num-eight">8</td>
                    <td id="btn-num-nine">9</td>
                    <td rowspan="2" id="btn-op-soma">+</td>
                </tr>
                <tr>
                    <td id="btn-num-four">4</td>
                    <td id="btn-num-five">5</td>
                    <td id="btn-num-six">6</td>
                </tr>
                <tr>
                    <td id="btn-num-one">1</td>
                    <td id="btn-num-two">2</td>
                    <td id="btn-num-three">3</td>
                    <td rowspan="2" id="btn-">Enter</td>
                </tr>
                <tr>
                    <td colspan="2" id="btn-num-zero">0</td>
                    <td id="btn-action-dot">.</td>
                </tr>
            </tbody>
        </table>
    </section>
*/