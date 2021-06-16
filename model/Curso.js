class Curso{
    constructor(tecnologia, empresa, fecha){
    this.tecnologia = tecnologia;
    this.empresa = empresa;
    this.fecha = fecha;
}

get fecha() {
    return `${this.fecha}`;
}

}
export default Curso;