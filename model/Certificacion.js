class Certificacion{
    constructor(tecnologia, empresa, anio){
    this.tecnologia = tecnologia;
    this.empresa = empresa;
    this.anio = anio;
}

get tecnologia() {
    return this.tecnologia;
}

}
export default Certificacion;