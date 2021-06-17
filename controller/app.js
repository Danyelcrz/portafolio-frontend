import { abiriModal } from './modal.js'
import { startScrollObserver } from './handler.js'
import { getCookieValue } from "../service/storage.js";
import { getUsers } from '../service/usuario.js'
import { getPuestos } from '../service/puesto.js'
import { getHabilidades } from '../service/habilidad.js';
import { getCertificaciones } from '../service/certificacion.js';
import { renderInitialData, renderExperienceCard, renderSkillBar, renderCertifications } from '../utils/render.js';
import { validarEmail } from '../utils/validators.js'


window.onload = function(){
    let email = getCookieValue('email');
    if( validarEmail(email) ) {
        inicializarDatos();
        mostrarContenido();
    } else {
        abiriModal();
        ocultarContenido();
    }
}

export const mostrarContenido = () => {
    let containerElement = document.getElementsByClassName('container')[0];
    containerElement.classList.add('fade-animation');
    containerElement.classList.remove('blur');
}

const ocultarContenido = () => {
    let modalElement = document.getElementById('popup');
    if (modalElement.className === 'modal open') {
        let element = document.getElementsByClassName('container')[0];
        element.classList.add('blur');
    }
}

export const inicializarDatos = () => {
    let cvBtnRef = document.getElementById('btn-cv');
    cvBtnRef.addEventListener('click', () => {
        descargarCV();
    });



    const puestoCallbackFn = () => {
        getPuestos().then ( res => renderExperienceCard( res ) );
    }

    const skillsCallbackFn = () => {
        getHabilidades().then ( res => renderSkillBar( res ) );
        getCertificaciones().then ( res => renderCertifications( res ) );
    }
    
    getUsers().then ( res => { 
        renderInitialData( res.usuarios[0] );
        startScrollObserver('experience-btn', puestoCallbackFn); 
        startScrollObserver('conociminetos-container', skillsCallbackFn); } );
}


const descargarCV = () => {
    window.open('./assets/docs/cv.pdf', '_blank').focus();
}
