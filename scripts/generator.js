const body = document.querySelectorAll('body');
body[0].style.fontFamily = 'Trebuchet MS';
const button = document.querySelector('button');
const num = document.querySelector('#maxNum');

button.addEventListener('click', () => {
    generateNum(num.value);
})

function isPrime(num) {
    let prime = true;
    if (num == 1) return false;
    for (let div = 2; div * div <= num && prime; ++div) {
        if (num % div === 0) {
            prime = false;
        }
    }
    return prime;
}

function generateNum(maxNum) {
    const warn = document.querySelector('.warning');
    warn.style.color = 'red';
    warn.style.fontSize = '15px';
    warn.style.textAlign = 'left';
    if (maxNum === "") {
        warn.textContent = 'Enter the number';
        return;
    }
    if (isNaN(maxNum)) {
        warn.textContent = 'Input must be a number';
        return;
    }
    if (maxNum > 1000) {
        warn.textContent = 'Number is too big';
        return;
    }
    if (document.querySelectorAll('.new') != null) {
        const container = document.getElementById('container');
        container.innerHTML = '';
    }
    for (let i = 0; i < maxNum; ++i) {
        let div = document.createElement('div');
        let col = i % 6 + 1, row = i / 6 + 1;
        div.style.gridColumn = `${col}`;
        div.style.gridRow = `${row}`;
        div.textContent = i;
        if (i % 2 === 0 && i != 2) {
            div.style.backgroundColor = 'lightgreen';
        } else if (isPrime(i)) {
            div.style.backgroundColor = 'red';
        } else {
            div.style.backgroundColor = 'rgb(248, 216, 7)';
        }
        div.style.height = '100%';
        div.style.fontSize = '50px';
        div.setAttribute('class', 'new');
        document.getElementById('container').appendChild(div);
    }
}
