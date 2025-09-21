# Árbol Genealógico Avanzado (Node.js CLI y PHP)

## Descripción

Este proyecto implementa un sistema de árbol genealógico dinámico en Node.js y PHP, pensado para retos técnicos y aplicaciones educativas. Permite gestionar personas, relaciones familiares y realizar operaciones avanzadas sobre el árbol, todo desde la terminal.

## Funcionalidades

-   **Agregar personas**: Añade nuevas personas al árbol en cualquier nivel, definiendo padre opcionalmente.
-   **Definir relaciones padre-hijo**: Permite vincular personas como padre e hijo en cualquier momento.
-   **Eliminar personas y subárboles**: Elimina una persona y todos sus descendientes, con confirmación.
-   **Mover subárboles**: Cambia la posición de una persona (y sus hijos) a otro padre.
-   **Recorridos DFS y BFS**: Visualiza el árbol en profundidad (DFS) y anchura (BFS).
-   **Buscar por ID**: Encuentra cualquier persona por su ID, sin importar el nivel.
-   **Profundidad máxima**: Calcula la profundidad máxima del árbol desde cada raíz.
-   **Cantidad de descendientes**: Muestra el número total de descendientes de cualquier persona.
-   **Persistencia en JSON**: Guarda y carga el árbol automáticamente en un archivo JSON.

## Estructura del proyecto

### Node.js

-   `app.js`: Punto de entrada y menú principal.
-   `src/models/Persona.js`: Clase para personas (id, nombre, hijos).
-   `src/models/ArbolGenealogico.js`: Lógica del árbol y operaciones principales.
-   `src/utils/algoritmos.js`: Algoritmos DFS, BFS, búsqueda, profundidad y descendientes.
-   `src/utils/colores.js`: Códigos de color para la terminal.
-   `src/utils/menu.js`: Menú visual y navegación.
-   `src/services/menuOpciones.js`: Funciones para cada opción del menú.
-   `src/services/persistencia.js`: Guardado y carga en JSON.
-   `src/services/validaciones.js`: Validaciones de ID y relaciones.
-   `personas.json`: Archivo de datos persistente.

### PHP

-   `app.php`: Punto de entrada y menú principal.
-   `personas.json`: Archivo de datos persistente.
-   `src/models/`: Clases principales (Personas, Árbol, etc.).
-   `src/services/algoritmos.php`: Algoritmos y lógica de negocio.
-   `src/services/persistencia.php`: Guardado y carga en JSON.
-   `src/utils/col.php`: Códigos de color para la terminal.
-   `src/utils/menu.php`: Menú visual y navegación.

La estructura modular facilita el mantenimiento y la escalabilidad en ambos lenguajes.

## Proyecto PHP

El proyecto PHP replica la arquitectura modular del sistema en Node.js, separando modelos, servicios y utilidades. Por temas de tiempo, solo se implementaron 2 funciones del menú, pero la base está lista para crecer y seguir buenas prácticas.

**Importante:**

-   Solo las opciones en color verde del menú están disponibles y funcionales actualmente.
-   El resto de las opciones siguen en desarollo.

La estructura y organización del código PHP permite agregar nuevas funcionalidades fácilmente y demuestra buenas prácticas profesionales.

## ¿Qué, cómo y por qué se hizo cada paso?

-   **Modularización**: Separar modelos, algoritmos y servicios facilita el mantenimiento y la escalabilidad.
-   **Uso de ES Modules**: Permite imports/exports claros y modernos, compatibles con Node.js actual.
-   **Estructuras eficientes**: Uso de `Map` para personas y recorridos iterativos para evitar problemas de rendimiento.
-   **Persistencia**: El árbol se guarda/carga automáticamente en JSON, permitiendo trabajar con miles de nodos sin perder datos.
-   **Validaciones y confirmaciones**: Se valida cada entrada y se pide confirmación antes de eliminar, evitando errores accidentales.
-   **Interfaz CLI**: El menú visual y los colores mejoran la experiencia de usuario y la claridad de las operaciones.

## Instrucciones para correr el programa

### 1. Clonar el repositorio y ejecutar

```bash
# Clona el repositorio desde GitHub
git clone https://github.com/DKVyotu/Reto-tecnico-Arbol-Genealogico

# Si deseas correr la versión en Node.js:
cd "desafio js"
node app.js   # Requiere Node.js instalado

# Si deseas correr la versión en PHP:
cd "desafio php"
php app.php   # Requiere PHP instalado
```

### 2. Uso

-   Navega por el menú usando los números de opción.
-   Sigue las instrucciones en pantalla para agregar, eliminar, mover y buscar personas.
-   En PHP, solo las opciones en verde están disponibles actualmente.
-   Los datos se guardan automáticamente en `personas.json`.

## Notas

-   El sistema está optimizado para manejar miles de nodos gracias a la estructura y algoritmos usados.
-   Puedes modificar `personas.json` manualmente si lo deseas, pero se recomienda hacerlo solo desde el programa.
-   Si tienes dudas o encuentras errores, revisa los mensajes en la terminal: el sistema valida y alerta sobre cualquier problema.
