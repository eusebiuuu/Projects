const images = ["../WebDevelopment/images/gymImage.jpg", "../WebDevelopment/images/gymImage.jpg", "../WebDevelopment/images/imagine2.jpg", "../WebDevelopment/images/gymImage.jpg", "../WebDevelopment/images/imagine2.jpg"];
for (let address of images) {
    const img = document.createElement('img');
    img.src = address;
    img.addEventListener('click', () => {
        const mainImg = document.getElementsByClassName('displayed-img');
        mainImg[0].src = img.src;
    })
    const par = document.getElementsByClassName('thumb-bar');
    par[0].append(img);
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    if (button.textContent === 'Darken') {
        button.textContent = 'Lighten';
        const overlay = document.querySelector('.overlay');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        button.textContent = 'Darken';
        const overlay = document.querySelector('.overlay');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
})