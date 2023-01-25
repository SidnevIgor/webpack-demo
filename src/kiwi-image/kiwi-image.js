import Kiwi from './kiwi.jpeg'
import './kiwi-image.scss'

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'Kiwi';
        img.classList.add('kiwi-image');

        const docBody = document.querySelector('body');
        docBody.appendChild(img);
    }
}
export default KiwiImage;