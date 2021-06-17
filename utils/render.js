const renderInitialData = (data) => {
    let dataSelected = data;

    setValueByClassName('name', dataSelected.nombre);
    setValueByClassName('profile', dataSelected.puesto);
    setValueByClassName('description', dataSelected.objetivo);

    setValueByClassName('goal', dataSelected.info);


    createNode('contact-info', 'p', `Email: ${dataSelected.correo}`);
    createNode('contact-info', 'p', `Telefono: ${dataSelected.numero}`);

    createNode('about-me-info', 'p', `Nombre: ${dataSelected.nombre}`);
    createNode('about-me-info', 'p', `Edad: ${dataSelected.edad}`);
    createNode('about-me-info', 'p', `Sexo: ${dataSelected.sexo.toLowerCase()}`);
}

const renderExperienceCard = (job) => {
    const parentRef = document.getElementById('experience-container');
    parentRef.innerHTML = '';
    
    job.puestos.forEach(job => {
        const card = `
            <div class="experience-card">
                <p class="tittle-card">${job.rol}</p>
                <p class="activity">
                ${job.descripcion}
                </p>
                <p class="work-place">${job.lugar}</p>
            </div>
        `;
        parentRef.innerHTML += card;
    });
    
}

const renderSkillBar = (skills) => {
    const parentRef = document.getElementById('skills-container');
    parentRef.innerHTML = '';
    
    skills.skills.forEach(skill => {
        const card = `
            <div class="skill">
                <div class="skill-detail">
                <label for="${skill.tecnologia}" id="skill-name">${skill.tecnologia}</label>
                <p>${skill.nivel}</p>
                </div>
                <progress id="${skill.tecnologia}" max="100"></progress>
            </div>
        `;
        parentRef.innerHTML += card;

        setTimeout( () => {
            document.getElementById(skill.tecnologia).value = skill.nivel; 
         }, 100);
    });
    
}


const renderCertifications = ( proof ) => {
    const parentRef = document.getElementById('certification-container');
    parentRef.innerHTML = '';
    
    proof.proofs.forEach(proof => {
        const card = `
            <div class="certificacion-card">
                <p id ="tecnologia">${proof.tecnologia}</p>
                <p id="fecha">${proof.anio}</p>
            </div>
        `;
        parentRef.innerHTML += card;
    });
    
}



const setValueByClassName = (className, value) => {
    let elementRef = document.getElementsByClassName(className)[0];
    elementRef.innerHTML  = value;
}

const createNode = (containerId, nodeType, value) => {
    const parentRef = document.getElementById(containerId);
    const node = document.createElement(nodeType);
    const nodeValue = document.createTextNode(value);
    node.appendChild(nodeValue);
    parentRef.appendChild(node);
}

export { renderInitialData, renderExperienceCard, renderSkillBar, renderCertifications };

