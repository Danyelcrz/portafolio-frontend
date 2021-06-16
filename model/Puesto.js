class Puesto{
    constructor(rol, descripcion, duracion, lugar){
    this.rol = rol;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.lugar = lugar;
}

get descripcion() {
    return this.descripcion;
}

}
export default Puesto;