import Trabajador from "./Trabajador";

class Desarrollador extends Trabajador{
    constructor(rol, nivel, certificaciones, cursos, habilidades){
        this.rol = rol;
        this.nivel = nivel;
        this.certificaciones = certificaciones;
        this.cursos = cursos;
        this.habilidades = habilidades;
    }

    get rol() {
        return this.rol;
    }
}

export default Desarrollador;