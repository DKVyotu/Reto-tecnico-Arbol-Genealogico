import {
    dfsIterativo,
    bfsIterativo,
    profundidadMaxima,
    totalDescendientes,
    dfsIterativoBuscar,
} from './src/utils/algoritmos.js'

import {
    agregarPersona,
    moverSubarbol,
    moverSubarbolCompleto,
    eliminarPersona,
    dfs,
    bfs,
    buscarPersona,
    calcularProfundidadMaxima,
    verCantidadDescendientes,
    personaSeparar,
    recargaJson,
    mostrarPersonas,
} from './src/services/menuOpciones.js'
import { ArbolGenealogico } from './src/models/ArbolGenealogico.js'
import { menu } from './src/utils/menu.js'
import { col } from './src/utils/colores.js'
import { cargarPersonasDesdeJSON } from './src/services/persistencia.js'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// Crear árbol genealógico
const arbol = new ArbolGenealogico()
// Cargar personas desde JSON
cargarPersonasDesdeJSON(arbol, './personas.json')

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            agregarPersona(rl, arbol, mostrarMenu)
            break
        case '2':
            moverSubarbol(rl, arbol, mostrarMenu)
            break
        case '3':
            moverSubarbolCompleto(rl, arbol, mostrarMenu)
            break
        case '4':
            eliminarPersona(rl, arbol, mostrarMenu)
            break
        case '5':
            dfs(dfsIterativo, arbol, mostrarMenu)
            break
        case '6':
            bfs(bfsIterativo, arbol, mostrarMenu)
            break
        case '7':
            buscarPersona(rl, arbol, dfsIterativoBuscar, mostrarMenu)
            break
        case '8':
            calcularProfundidadMaxima(arbol, profundidadMaxima, mostrarMenu)
            break
        case '9':
            verCantidadDescendientes(rl, arbol, totalDescendientes, mostrarMenu)
            break
        case '10':
            personaSeparar(rl, arbol, mostrarMenu)
            break
        case '11':
            recargaJson(arbol, mostrarMenu)
            break
        case '12':
            mostrarPersonas(arbol, mostrarMenu)
            break
        case '13':
            console.clear()
            console.log(col.verde + 'Consola limpia :) ' + col.reset)
            mostrarMenu()
            break
        case '0':
            rl.close()
            break
        default:
            console.log(col.rojo + 'Opción inválida.')
            mostrarMenu()
    }
}

function mostrarMenu() {
    menu(rl, manejarOpcion)
}

mostrarMenu()
