class Trabajador{
    constructor(nombre, edad, email, telefono, puesto, experiencia, estudios){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
    this.puesto = puesto;
    this.experiencia = experiencia;
    this.estudios = estudios;
}

get nombre() {
    return `${this.nombre}`;
}

}
export default Trabajador;