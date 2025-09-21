<?php 
require 'src/utils/menu.php'; 
require 'src/services/algoritmos.php';
 
$staus = true;

while ($staus) {
    menu();
    $opcion = readline();
 

    switch ($opcion) {
        case 1:
            agregarPersona();
            break;
        case 2:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 12:  
            mostrarPersonas(); 
            break;
        case 13:  
            echo str_repeat(PHP_EOL, 50) ;
            echo "Consola despejadada\n";
            break;
        case 0:
            echo "Hasta la proxima\n";
            $staus = false;
            break;
        default:
            echo "Opción no válida\n";
            break;
    }
}

?>