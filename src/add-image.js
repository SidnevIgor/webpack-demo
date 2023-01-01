import Cat from './cat.jpeg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Cat';
    img.width = 300;
    img.src = Cat;
    const body = document.querySelector('body').appendChild(img);
}

export default addImage;