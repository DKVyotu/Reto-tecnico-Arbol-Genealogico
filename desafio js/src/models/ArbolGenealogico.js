import {Persona} from './Persona.js'

export class ArbolGenealogico {
    constructor() {
        this.personas = new Map() 
        this.raices = [] 
    }

    agregarPersona(id, nombre, idPadre = null) {
        const nuevaPersona = new Persona(id, nombre)
        this.personas.set(id, nuevaPersona)
        if (idPadre) {
            const padre = this.personas.get(idPadre)
            if (padre) {
                padre.agregarHijo(nuevaPersona)
            }
        } else {
            this.raices.push(nuevaPersona)
        }
        return nuevaPersona
    }

    definirRelacionPadreHijo(idPadre, idHijo) {
        const padre = this.personas.get(idPadre)
        const hijo = this.personas.get(idHijo)
        if (padre && hijo) {
            padre.agregarHijo(hijo)
        }
    }

    eliminarPersona(id) {
        const persona = this.personas.get(id)
        if (!persona) return
        // Eliminar de hijos de su padre
        for (let padre of this.personas.values()) {
            padre.hijos = padre.hijos.filter(hijo => hijo.id !== id)
        }
        // Eliminar subárbol
        const eliminarRecursivo = p => {
            p.hijos.forEach(eliminarRecursivo)
            this.personas.delete(p.id)
        }
        eliminarRecursivo(persona)
        // Eliminar de raíces si aplica
        this.raices = this.raices.filter(r => r.id !== id)
    }

    moverSubarbol(idSubarbol, idNuevoPadre) {
        const subarbol = this.personas.get(idSubarbol)
        const nuevoPadre = this.personas.get(idNuevoPadre)
        if (!subarbol || !nuevoPadre) return
        // Eliminar subarbol de su padre actual
        for (let p of this.personas.values()) {
            p.hijos = p.hijos.filter(h => h.id !== idSubarbol)
        }
        // Agregar al nuevo padre
        nuevoPadre.agregarHijo(subarbol)
    }
}
 