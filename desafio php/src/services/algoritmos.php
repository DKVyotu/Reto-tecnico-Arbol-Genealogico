<?php
require_once __DIR__ . '../../utils/col.php';
require 'persistencia.php';

function agregarPersona() { 
    global $col;

    echo $col['amarillo'] . "Ingrese el ID de la persona: " . $col['verde'];
    $id = readline();
    if (empty($id)) {
        echo $col['rojo'] . "El ID no puede estar vacío.\n" . $col['reset'];
        return;
        }
        if (!is_numeric($id)) {
        echo $col['rojo'] . "El ID debe ser un número.\n" . $col['reset'];
        return;
    }

    echo $col['amarillo'] . "Ingrese el nombre de la persona: " . $col['verde'];
    $nombre = readline();
    if (empty($nombre)) {
        echo $col['rojo'] . "El nombre no puede estar vacío.\n" . $col['reset'];
        return;
    }

    echo $col['amarillo'] . "Ingrese el ID del padre (o presione Enter si no tiene): " . $col['verde'];
    $idPadre = readline(); 
    if (empty($idPadre)) {
        $idPadre = null; 
        } elseif (!is_numeric($idPadre)) {
        echo $col['rojo'] . "El ID del padre debe ser un número o vacío.\n" . $col['reset'];
        return;
    }

    echo "Persona agregada: ID = $id, Nombre = $nombre, ID Padre = " . ($idPadre ?? 'Ninguno') . "\n" . $col['reset'];
    
    $persona = [
        'id' => (int)$id,
        'nombre' => $nombre,
        'idPadre' => (int)$idPadre ?: null
    ];

    guardarPersona($persona);  
}

function mostrarPersonas() {
    global $col;
    echo $col['amarillo'] . "Lista de personas:\n". $col['reset'];
    $personas = obtenerPersonas();
    foreach ($personas as $persona) {
        echo "ID: {$persona['id']}, 
        Nombre: {$persona['nombre']}, 
        ID Padre: " . ($persona['idPadre'] ?? 'Ninguno') . "\n";
    }
}

?>