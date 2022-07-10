let number = Math.floor(Math.random() * 101), turn = 0;
let input = document.querySelector('input');
const button = document.querySelector('button');
console.log(number);

function startAgain() {
    const field = document.querySelector('#field3');
    field.textContent = "";
    const curButton = document.createElement('button');
    curButton.textContent = 'Start new game';
    curButton.addEventListener('click', () => {
        document.getElementById('field1').innerHTML = '';
        document.getElementById('field2').innerHTML = '';
        document.getElementById('field3').innerHTML = '';
        number = Math.floor(Math.random() * 101);
        turn = 0;
        button.disabled = input.disabled = false;
        input.focus();
        console.log(number);
    })
    field.append(curButton);
    button.disabled = input.disabled = true;
}

function writeMessage(mess, color) {
    const message = document.querySelector('#field2');
    message.textContent = mess;
    message.style.backgroundColor = color;
}

button.addEventListener('click', () => {
    let userNum = Number(input.value), guessed = false;
    console.log(userNum);
    turn++;
    if (isNaN(userNum)) {
        userNum = 'NaN';
        writeMessage('Wrong!', 'red');
        const order = document.querySelector('#field3');
        order.textContent = 'Last guess was not valid!';
    } else if (userNum === number) {
        writeMessage('Nice!', 'lightgreen');
        startAgain();
        guessed = true;
    } else if (userNum < number) {
        writeMessage('Wrong!', 'red');
        const order = document.querySelector('#field3');
        order.textContent = 'Last guess was too low!';
    } else {
        writeMessage('Wrong!', 'red');
        const order = document.querySelector('#field3');
        order.textContent = 'Last guess was too high!';
    }
    if (turn === 10 && !guessed) {
        writeMessage('Number of tries exceeded', 'red');
        startAgain();
    }
    let text = document.querySelector('#field1');
    if (turn === 1) {
        text.textContent = 'Previous tries: ';
    }
    text.textContent += userNum + ' ';
    input.value = '';
    input.focus();
});