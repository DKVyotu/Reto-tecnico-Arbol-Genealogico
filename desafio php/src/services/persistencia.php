<?php
require_once __DIR__ . '../../utils/col.php';
$archivo = __DIR__ . '/../../personas.json';

function guardarPersona($persona) {
    global $col;
    global $archivo; 
    $personas = json_decode(file_get_contents($archivo), true) ?? [];
    $personas[] = $persona;
    file_put_contents($archivo, json_encode($personas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    echo $col['verde'] . "Persona guardada exitosamente.\n" . $col['reset']; 
}

function obtenerPersonas() { 
    global $col;
    global $archivo; 
    $personas = json_decode(file_get_contents($archivo), true) ?? [];
    if (empty($personas)) {
        echo $col['rojo'] . "No hay personas registradas.\n" . $col['reset'];
    } 
    return $personas;
}


?>
