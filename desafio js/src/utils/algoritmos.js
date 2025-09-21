import {col} from './colores.js'
// Algoritmos para el árbol genealógico

export function dfsIterativo(raiz, callback) {
    // Recorrido en profundidad (DFS) iterativo
    const stack = [raiz]
    while (stack.length > 0) {
        const actual = stack.pop()
        callback(actual)
        // Agregar hijos al stack (de derecha a izquierda para mantener orden)
        for (let i = actual.hijos.length - 1; i >= 0; i--) {
            stack.push(actual.hijos[i])
        }
    }
}

export function bfsIterativo(raiz, callback) {
    // Recorrido en anchura (BFS) iterativo
    const queue = [raiz]
    while (queue.length > 0) {
        const actual = queue.shift()
        callback(actual)
        for (let hijo of actual.hijos) {
            queue.push(hijo)
        }
    }
}

/* export function buscarPorId(raiz, id) {
    // Busca una persona por id usando DFS
    if (raiz.id === id) return raiz
    for (let hijo of raiz.hijos) {
        const encontrado = buscarPorId(hijo, id)
        if (encontrado) return encontrado
    }
    return null
} */

export function profundidadMaxima(raiz) {
    // Calcula la profundidad máxima del árbol
    if (raiz.hijos.length === 0) return 1
    return 1 + Math.max(...raiz.hijos.map(profundidadMaxima))
}

export function totalDescendientes(raiz) {
    // Calcula el número total de descendientes de una persona
    let total = 0
    for (let hijo of raiz.hijos) {
        total += 1 + totalDescendientes(hijo)
    }
    return total
}

export function dfsIterativoBuscar(raiz, id) {
    const stack = [raiz]
    while (stack.length > 0) {
        const actual = stack.pop()
        if (actual.id === id) return actual
        for (let i = actual.hijos.length - 1; i >= 0; i--) {
            stack.push(actual.hijos[i])
        }
    }
    return null
}
export function esDescendiente(posiblePadre, posibleHijo) {
    if (!posiblePadre || !posibleHijo) return false
    const stack = [posiblePadre]
    while (stack.length > 0) {
        const actual = stack.pop()
        if (actual.id === posibleHijo.id) return true
        for (let hijo of actual.hijos) {
            stack.push(hijo)
        }
    }
    return false
}

export function mostrarArbolIdentado(persona, nivel = 0) {
    console.log(
        ' '.repeat(nivel * 4) + col.amarillo + persona.nombre + col.reset + ` id: ${ col.verde + persona.id}`
    )
    persona.hijos.forEach(hijo => mostrarArbolIdentado(hijo, nivel + 1))
}