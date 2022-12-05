let result;
let firstNumber;
let secondNumber;
let operationAsk = prompt('please add operation', 'add, sub, mult, div');
let operation;

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
            operation = '+'
            break;
        case 'sub':
            result = firstNumber - secondNumber
            operation = '-'
            break;
        case 'mult':
            result = firstNumber * secondNumber
            operation = '*'
            break;
        case 'div':
            result = firstNumber / secondNumber
            operation = '/'
            break;
    }
    alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`)
} else {
    alert('something went wrong, restart your page')
}
