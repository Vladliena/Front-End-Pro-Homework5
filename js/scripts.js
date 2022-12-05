let result;
let firstNumber;
let secondNumber;
let operationAsk = prompt('please add operation', 'add, sub, mult, div');

if (operationAsk === 'add' || operationAsk === 'sub' || operationAsk === 'mult' || operationAsk === 'div') {
    do {
        firstNumber = parseInt(prompt('please add first number'))
    } while (!firstNumber || isNaN(firstNumber))
    if (firstNumber) {
        do {
            secondNumber = parseInt(prompt('please add second number'))
        } while (!secondNumber || isNaN(secondNumber))
    }
    switch (operationAsk) {
        case 'add':
            result = firstNumber + secondNumber
            break;
        case 'sub':
            result = firstNumber - secondNumber
            break;
        case 'mult':
            result = firstNumber * secondNumber
            break;
        case 'div':
            result = firstNumber / secondNumber
            break;
    }
    alert(result)
} else {
    alert('something went wrong, restart your page')
}
