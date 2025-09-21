<?php
require_once __DIR__ . '/col.php';

function menu()  {   
    global $col;

    echo $col['morado'] . "╔════════════════════════════════════════════════════════╗" . $col['reset'] . "\n";
    echo $col['morado'] . "║      ÁRBOL GENEALÓGICO - MENÚ PRINCIPAL      PHP       ║" . $col['reset'] . "\n";
    echo $col['morado'] . "╠════════════════════════════════════════════════════════╣" . $col['reset'] . "\n";
    echo $col['verde']  . "║  1. Agregar persona                                    ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║  2. Mover solo los hijos de un nodo a otro             ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║  3. Mover persona y hijos si los tiene                 ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║  4. Eliminar persona                                   ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║  5. Recorrido DFS                                      ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║  6. Recorrido BFS                                      ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║  7. Buscar persona por id                              ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║  8. Profundidad máxima del árbol                       ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║  9. Ver cantidad de descendientes                      ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║ 10. Separar persona (convertir en raíz)                ║" . $col['reset'] . "\n";
    echo $col['azul']   . "║ 11. Recargar árbol desde JSON                          ║" . $col['reset'] . "\n";
    echo $col['verde']  . "║ 12. Mostrar todas las personas                         ║" . $col['reset'] . "\n";
    echo $col['verde']  . "║ 13. Borrar consola                                     ║" . $col['reset'] . "\n";
    echo $col['verde']  . "║  0. Salir                                              ║" . $col['reset'] . "\n";
    echo $col['morado'] . "╚════════════════════════════════════════════════════════╝" . $col['reset'] . "\n";
    echo $col['gris'] . "\nElige una opción: " . $col['verde'];
   
}
?>