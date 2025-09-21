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
        case 3:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 4:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 5:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 6:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 7:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 8:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 9:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 10:
            echo "Funcionalidad en desarrollo...\n";
            break;
        case 11:
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