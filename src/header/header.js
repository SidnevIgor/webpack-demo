import './header.scss';

class Header {
    render() {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Heading';
        document.querySelector('body').appendChild(h1);
    }
}

export default Header;