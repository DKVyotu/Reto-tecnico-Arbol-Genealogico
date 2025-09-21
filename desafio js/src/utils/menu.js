// src/utils/menu/mostrarMenu.js
import { col } from './colores.js'

export function menu(rl, manejarOpcion) { 
    console.log(col.morado + '╔════════════════════════════════════════════════════════╗' + col.reset)
    console.log(col.morado + '║           ÁRBOL GENEALÓGICO - MENÚ PRINCIPAL           ║' + col.reset)
    console.log(col.morado + '╠════════════════════════════════════════════════════════╣' + col.reset)
    console.log(col.azul   + '║  1. Agregar persona                                    ║' + col.reset)
    console.log(col.azul   + '║  2. Mover solo los hijos de un nodo a otro             ║' + col.reset)
    console.log(col.azul   + '║  3. Mover persona y hijos si los tiene                 ║' + col.reset)
    console.log(col.azul   + '║  4. Eliminar persona                                   ║' + col.reset)
    console.log(col.azul   + '║  5. Recorrido DFS                                      ║' + col.reset)
    console.log(col.azul   + '║  6. Recorrido BFS                                      ║' + col.reset)
    console.log(col.azul   + '║  7. Buscar persona por id                              ║' + col.reset)
    console.log(col.azul   + '║  8. Profundidad máxima del árbol                       ║' + col.reset)
    console.log(col.azul   + '║  9. Ver cantidad de descendientes                      ║' + col.reset)
    console.log(col.azul   + '║ 10. Separar persona (convertir en raíz)                ║' + col.reset)
    console.log(col.azul   + '║ 11. Recargar árbol desde JSON                          ║' + col.reset)
    console.log(col.azul   + '║ 12. Mostrar todas las personas                         ║' + col.reset)
    console.log(col.azul   + '║ 13. Borrar consola                                     ║' + col.reset)
    console.log(col.azul   + '║  0. Salir                                              ║' + col.reset)
    console.log(col.morado + '╚════════════════════════════════════════════════════════╝' + col.reset
    )
    rl.question(col.gris + '\nElige una opción: ' + col.verde, manejarOpcion)
}
