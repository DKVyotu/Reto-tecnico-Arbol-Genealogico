export class Persona {
    constructor(id, nombre) {
        this.id = id
        this.nombre = nombre
        this.hijos = []
    }

    agregarHijo(hijo) {
        this.hijos.push(hijo)
    }
}
 
