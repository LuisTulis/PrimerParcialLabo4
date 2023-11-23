export class Container {

    capacidad : number;
    codigo : string;
    color : string;
    empresa : string;
    constructor(capacidad : number, codigo : string, color : string, empresa: string)
    {
        this.capacidad = capacidad;
        this.codigo = codigo;
        this.empresa = empresa;
        this.color = color;
    }
}
