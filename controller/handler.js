import { mostrarContenido, inicializarDatos } from './app.js'
import { cerrarModal, mostrarErrorModal } from './modal.js'
import { validarEmail } from '../utils/validators.js'
import { setCookieValue } from '../service/storage.js';

let startScrollObserver = (elementRefId, action) => {

  let elementRef = document.getElementById(elementRefId);
  const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          action();
          observer.unobserve(entry.target);
        }
      });
    };
    
    const options = {
      root: null, 
      rootMargin: '0px 0px -100px 0px',
    };
    
    const observer = new IntersectionObserver(callback, options);
    observer.observe(elementRef);
}


const startModalBtnEvent = () => {
    let botonIngresarRef = document.getElementById('enter-modal-btn');
    botonIngresarRef.addEventListener('click', (event)=>{
        event.preventDefault();

        let email = document.getElementById('email-input').value;

        if ( validarEmail(email) ) {
            setCookieValue('email', email);
            cerrarModal();

            inicializarDatos();
            mostrarContenido();
        } else {
            mostrarErrorModal();
        }

    });
} 

export { startModalBtnEvent, startScrollObserver };