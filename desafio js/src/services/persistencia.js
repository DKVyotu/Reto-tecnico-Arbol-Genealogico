import fs from 'fs' 
import { col } from '../utils/colores.js'

export function cargarPersonasDesdeJSON(arbol, ruta) {
    if (!fs.existsSync(ruta)) return
    try {
        const data = fs.readFileSync(ruta, 'utf-8')
        const personas = JSON.parse(data)
        personas.forEach(p => {
            arbol.agregarPersona(p.id, p.nombre, p.idPadre)
        })
    } catch (e) {
        console.log(col.amarillo + 'Error al cargar JSON:\n', col.rojo + e.message + col.reset)
    }
}

export function guardarPersonasEnJSON(arbol, ruta) {
    const personas = []
    for (let persona of arbol.personas.values()) {
        // Buscar el idPadre recorriendo todos los padres
        let idPadre = null
        for (let posiblePadre of arbol.personas.values()) {
            if (posiblePadre.hijos.some(h => h.id === persona.id)) {
                idPadre = posiblePadre.id
                break
            }
        }
        personas.push({ id: persona.id, nombre: persona.nombre, idPadre })
    }
    fs.writeFileSync(ruta, JSON.stringify(personas, null, 2))
}

