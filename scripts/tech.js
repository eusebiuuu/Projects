function generateColor() {
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    return 'rgb(' + num1 + ', ' + num2 + ', ' + num3 + ')';
}

function addZero(num) {
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

function getNow() {
    const now = new Date();
    let month = now.toLocaleString('en-US', {month: 'long'});
    let day = addZero(now.getDate());
    let year = addZero(now.getFullYear());
    let hour = addZero(now.getHours());
    let minute = addZero(now.getMinutes());
    let second = addZero(now.getSeconds());
    return month + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ':' + second;
}

function changeAspect() {
    const group = document.querySelector('#changing');
    group.textContent = getNow();
    group.style.margin = 'auto';
    group.style.width = '200px';
    group.style.padding = '5px';
    group.style.backgroundColor = generateColor();
    group.style.textAlign = 'center';
    const group2 = document.querySelector('.big');
    group2.style.color = generateColor();
}

const listElem = document.querySelectorAll('.event'); // try other names
for (let i = 0; i < listElem.length; ++i) {
    if (i == 0) {
        listElem[i].style.backgroundColor = 'rgb(88, 225, 102)';
    } else if (i == 1) {
        listElem[i].style.backgroundColor = 'rgb(240, 234, 107)';
    } else {
        listElem[i].style.backgroundColor = 'red';
    }
}

changeAspect();
setInterval(changeAspect, 1000);
