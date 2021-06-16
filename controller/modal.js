import { startModalBtnEvent } from './handler.js'


const abiriModal = () => {
    let modalElementRef = document.getElementsByClassName('modal')[0];
    modalElementRef.classList.add('open');    
    startModalBtnEvent();
}

const cerrarModal = () => {
    let modalElement = document.getElementById('popup');
    modalElement.classList.remove('open'); 
}

const mostrarErrorModal = () => {
    let element = document.getElementById('modal-invalid-msg');
    element.style.display = 'block';
}



export { abiriModal, cerrarModal ,mostrarErrorModal };



