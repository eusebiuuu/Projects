const field = document.querySelector('body');

field.addEventListener('keydown', k => {
    const text = document.querySelector('.magic');
    text.textContent = `You pressed `;
    if (document.querySelectorAll('.number').length === 0) {
        const aux = document.createElement('div');
        aux.setAttribute('class', 'number');
        document.getElementById('content').append(aux);
    }
    const code = document.querySelector('.number');
    const pressedKey = document.createElement('span');
    pressedKey.textContent = k.key;
    pressedKey.style.color = 'lightgreen';
    pressedKey.style.textShadow = '2px 2px 0 black';
    document.getElementById('text').append(pressedKey);
    code.textContent = k.keyCode;
    code.style.color = 'lightgreen';
    code.style.textShadow = '2px 2px 0 black';
    document.getElementById('content').appendChild(code);
});