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

    let loaderRef =  document.getElementById('loader-spinner');
    loaderRef.classList.remove('hidden');
    loaderRef.classList.add('show');

    let mainRef =  document.getElementsByTagName('main')[0];
    mainRef.classList.add('hidden');

    let footerRef =  document.getElementsByTagName('footer')[0];
    footerRef.classList.add('hidden');

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
    

    setTimeout( () => {
         getUsers()
            .then ( res => { 
                renderInitialData( res.usuarios[0] );
                startScrollObserver('experience-btn', puestoCallbackFn); 
                startScrollObserver('conociminetos-container', skillsCallbackFn); })
            .then( () => {
                loaderRef.classList.replace('show', 'hidden');   
                mainRef.classList.replace('hidden', 'show');   
                footerRef.classList.replace('hidden', 'show');   
             })
            .catch( () => {
                let errorMsgRef =  document.getElementById('error-msg');
                errorMsgRef.classList.replace('hidden', 'show');   
                loaderRef.classList.replace('show', 'hidden');   
            } );

    } , 500);

}


const descargarCV = () => {
    window.open('./assets/docs/cv.pdf', '_blank').focus();
}
