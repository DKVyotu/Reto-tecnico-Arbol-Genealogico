import { validarId } from './validaciones.js'
import { col } from '../utils/colores.js'
import { guardarPersonasEnJSON, cargarPersonasDesdeJSON } from './persistencia.js'
import { esDescendiente, mostrarArbolIdentado } from '../utils/algoritmos.js'

export function agregarPersona(rl, arbol, mostrarMenu) {
    rl.question(col.amarillo + 'ID de persona a agregar: ' + col.verde, id => {
        if (isNaN(id) || id.trim() === '') {
            console.log(col.rojo + 'El ID debe ser un número válido.' + col.reset)
            mostrarMenu()
            return
        }
        if (validarId(parseInt(id), arbol)) {
            console.log(col.rojo + 'Ese ID ya existe.' + col.reset)
            mostrarMenu()
            return
        }
        rl.question(col.amarillo + 'Nombre de persona a agregar: ' + col.verde, nombre => {
            rl.question(
                col.amarillo +
                    'Ingrese ID de padre (si ingresa nada sera  uno nuevo): ' +
                    col.verde,
                idPadre => {
                    if (idPadre && (isNaN(idPadre) || idPadre.trim() === '')) {
                        console.log(col.rojo + 'El ID de padre debe ser un número válido o vacío.')
                        mostrarMenu()
                        return
                    }
                    const padreId = idPadre ? parseInt(idPadre) : null
                    if (padreId && !validarId(padreId, arbol)) {
                        console.log(col.rojo + 'ID de padre no existe.')
                        mostrarMenu()
                        return
                    }
                    arbol.agregarPersona(parseInt(id), nombre, padreId)
                    guardarPersonasEnJSON(arbol, './personas.json')
                    console.log(col.verde + 'Persona agregada Exitosamente')
                    mostrarMenu()
                }
            )
        })
    })
}
export function moverSubarbol(rl, arbol, mostrarMenu) {
    rl.question(
        col.amarillo + 'ID del nodo origen (solo sus hijos serán movidos): ' + col.verde,
        idOrigen => {
            rl.question(
                col.amarillo + 'ID del nodo destino (nuevo padre de los hijos): ' + col.verde,
                idDestino => {
                    const origenId = parseInt(idOrigen)
                    const destinoId = parseInt(idDestino)
                    if (!validarId(origenId, arbol) || !validarId(destinoId, arbol)) {
                        console.log(col.rojo + 'ID de origen o destino no existe.' + col.reset)
                        mostrarMenu()
                        return
                    }
                    if (origenId === destinoId) {
                        console.log(
                            col.rojo + 'No puedes mover los hijos al mismo nodo.' + col.reset
                        )
                        mostrarMenu()
                        return
                    }
                    const origen = arbol.personas.get(origenId)
                    const destino = arbol.personas.get(destinoId)
                    if (!origen.hijos.length) {
                        console.log(
                            col.rojo + 'El nodo origen no tiene hijos para mover.' + col.reset
                        )
                        mostrarMenu()
                        return
                    }
                    for (let hijo of origen.hijos) {
                        if (esDescendiente(hijo, destino)) {
                            console.log(
                                col.rojo +
                                    'No puedes mover un hijo a un descendiente suyo.' +
                                    col.reset
                            )
                            mostrarMenu()
                            return
                        }
                    }
                    // Mover los hijos
                    destino.hijos.push(...origen.hijos)
                    origen.hijos = []
                    guardarPersonasEnJSON(arbol, './personas.json')
                    console.log(col.verde + 'Hijos movidos exitosamente.' + col.reset)
                    mostrarMenu()
                }
            )
        }
    )
}
export function moverSubarbolCompleto(rl, arbol, mostrarMenu) {
    rl.question(
        col.amarillo + 'ID del nodo a mover (subárbol completo): ' + col.verde,
        idSubarbol => {
            rl.question(col.amarillo + 'ID del nuevo padre: ' + col.verde, idNuevoPadre => {
                const subarbolId = parseInt(idSubarbol)
                const nuevoPadreId = parseInt(idNuevoPadre)
                if (!validarId(subarbolId, arbol) || !validarId(nuevoPadreId, arbol)) {
                    console.log(col.rojo + 'ID de subárbol o nuevo padre no existe.' + col.reset)
                    mostrarMenu()
                    return
                }
                if (subarbolId === nuevoPadreId) {
                    console.log(col.rojo + 'No puedes mover el subárbol a sí mismo.' + col.reset)
                    mostrarMenu()
                    return
                }
                const subarbol = arbol.personas.get(subarbolId)
                const nuevoPadre = arbol.personas.get(nuevoPadreId)
                if (esDescendiente(subarbol, nuevoPadre)) {
                    console.log(
                        col.rojo +
                            'No puedes asignar como padre a un descendiente del nodo. Esto generaría un ciclo.' +
                            col.reset
                    )
                    mostrarMenu()
                    return
                }
                // Eliminar subárbol de su padre actual
                for (let p of arbol.personas.values()) {
                    p.hijos = p.hijos.filter(h => h.id !== subarbolId)
                }
                arbol.moverSubarbol(subarbolId, nuevoPadreId)
                arbol.raices = arbol.raices.filter(r => r.id !== subarbolId)
                guardarPersonasEnJSON(arbol, './personas.json')
                console.log(col.verde + 'Subárbol movido exitosamente.' + col.reset)
                mostrarMenu()
            })
        }
    )
}
export function eliminarPersona(rl, arbol, mostrarMenu) {
    rl.question(col.amarillo + 'ID Persona a eliminar: ' + col.verde, id => {
        const personaId = parseInt(id)
        if (!validarId(personaId, arbol)) {
            console.log(col.rojo + 'ID no existe.')
            mostrarMenu()
            return
        }
        rl.question(
            col.rojo +
                '¿Estás seguro? Esto eliminará a la persona y a todos sus descendientes. (s/n): ' +
                col.verde,
            confirm => {
                if (confirm.toLowerCase() === 's') {
                    arbol.eliminarPersona(personaId)
                    guardarPersonasEnJSON(arbol, './personas.json')
                    console.log(col.verde + 'Persona eliminada.')
                    mostrarMenu()
                }
                else {
                    console.log(col.amarillo + 'Operación cancelada.' + col.reset)
                    mostrarMenu()
                }
            }
        )
    })
}
export function dfs(dfsIterativo, arbol, mostrarMenu) {
    if (arbol.raices.length === 0) {
        console.log(col.rojo + 'No hay raíces en el árbol.')
    } else {
        arbol.raices.forEach(raiz => {
            console.log(col.verde + `\nDFS desde raíz ${raiz.nombre}:` + col.reset)
            dfsIterativo(raiz, p => console.log('ID: ' + p.id + ' -> ' + p.nombre))
        })
    }
    mostrarMenu()
}
export function bfs(bfsIterativo, arbol, mostrarMenu) {
    if (arbol.raices.length === 0) {
        console.log(col.rojo + 'No hay raíces en el árbol.')
    } else {
        arbol.raices.forEach(raiz => {
            console.log(col.verde + `\nBFS desde raíz ${raiz.nombre}:` + col.reset)
            bfsIterativo(raiz, p => console.log('ID: ' + p.id + ' -> ' + p.nombre))
        })
    }
    mostrarMenu()
}
export function buscarPersona(rl, arbol, dfsIterativoBuscar, mostrarMenu) {
    rl.question(col.amarillo + 'ID a buscar: ' + col.verde, id => {
        let encontrado = null
        for (let raiz of arbol.raices) {
            encontrado = dfsIterativoBuscar(raiz, parseInt(id))
            if (encontrado) break
        }
        if (encontrado) {
            console.log(col.verde + `Persona encontrada: ${col.reset + encontrado.nombre}`)
        } else {
            console.log(col.rojo + 'Persona no encontrada.')
        }
        mostrarMenu()
    })
}
export function calcularProfundidadMaxima(arbol, profundidadMaxima, mostrarMenu) {
    if (arbol.raices.length === 0) {
        console.log(col.rojo + 'No hay raíces en el árbol.')
    } else {
        arbol.raices.forEach(raiz => {
            console.log(
                col.verde + `Profundidad máxima desde ${col.reset + raiz.nombre}: ${ col.amarillo + profundidadMaxima(raiz)}`
            )
        })
    }
    mostrarMenu()
}
export function verCantidadDescendientes(rl, arbol, totalDescendientes, mostrarMenu) {
    rl.question(col.amarillo + 'ID de la persona: ' + col.verde, id => {
        const persona = arbol.personas.get(parseInt(id))
        if (persona) {
            console.log(
                col.verde +
                    `Total descendientes de ${col.reset + persona.nombre}: ${col.amarillo + totalDescendientes(persona)}`
            )
        } else {
            console.log(col.rojo + 'Persona no encontrada.')
        }
        mostrarMenu()
    })
}
export function personaSeparar(rl, arbol, mostrarMenu) {
    rl.question(col.amarillo + 'ID de la persona a separar: ' + col.verde, id => {
        const personaId = parseInt(id)
        if (!validarId(personaId, arbol)) {
            console.log(col.rojo + 'ID no existe.')
            mostrarMenu()
            return
        }
        if (arbol.raices.some(r => r.id === personaId)) {
            console.log(col.rojo + 'El usuario ya es una raíz.')
            mostrarMenu()
            return
        }
        // Eliminar de hijos de su padre actual
        for (let p of arbol.personas.values()) {
            p.hijos = p.hijos.filter(h => h.id !== personaId)
        }
        // Agregar como raíz si no lo es
        if (!arbol.raices.some(r => r.id === personaId)) {
            arbol.raices.push(arbol.personas.get(personaId))
        }
        guardarPersonasEnJSON(arbol, './personas.json')
        console.log(col.verde + 'Persona separada y convertida en raíz.')
        mostrarMenu()
    })
}
export function recargaJson(arbol, mostrarMenu) {
    arbol.personas.clear()
    arbol.raices = []
    cargarPersonasDesdeJSON(arbol, './personas.json')
    console.log(col.verde + 'Árbol recargado desde JSON.' + col.reset)
    arbol.raices.forEach(raiz => mostrarArbolIdentado(raiz))
    mostrarMenu()
}
export function mostrarPersonas(arbol, mostrarMenu) {
    if (arbol.raices.length === 0) {
        console.log(col.rojo + 'No hay raíces en el árbol.' + col.reset)
    } else {
        console.log(col.verde + 'Árbol genealógico completo:' + col.reset)
        arbol.raices.forEach(raiz => {
            mostrarArbolIdentado(raiz)
        })
    }
    mostrarMenu()
}
