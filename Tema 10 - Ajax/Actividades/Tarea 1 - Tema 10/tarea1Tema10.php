<?php

/**
 * Creamos conexión con base de datos de la cual extraeremos los datos
 * 
 */

# Conectamos con la base de datos 
class Conexion
{
    public $db;

    public function __construct()
    {
        $this->db = new mysqli("localhost", "root", "", "tema10");
        if ($this->db->connect_errno) {
            throw new Exception('ERROR');
        }
    }

    public function recogerIdNombre()
    {
        $sql = "SELECT id, nombre FROM datos ORDER BY id";

        // Objeto clase prepare statement
        $stmt = $this->db->prepare($sql);

        // ejecuto
        $stmt->execute();

        // objeto clase mysqli_result
        $result = $stmt->get_result();

        return $result;
    }

    public function recogerDatos($id)
    {
        $sql = "SELECT 
                    id,
                    nombre,
                    apellidos,
                    ciudad
                FROM
                    datos
                WHERE id = ? ORDER BY id";

        // Objeto clase prepare statement
        $stmt = $this->db->prepare($sql);
        // Metemos el dato introducido en la cláusula select 
        $stmt->bind_param('i', $id);
        // ejecuto
        $stmt->execute();
        // objeto clase mysqli_result
        $result = $stmt->get_result();

        return $result;
    }
}

$conn = new Conexion();

$datos = $conn->recogerIdNombre();

// Convierte los datos a un array asociativo
$datosArray = $datos->fetch_all(MYSQLI_ASSOC);

// Codifica los datos en formato JSON
$datosJSON = json_encode($datosArray);

?>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarea 1 - Tema 10</title>

    <style>
        body {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">

    <!-- Hay que tener en cuenta la función json_encode la cual pasa de array a json -->

    <script>
        class Mostrar {

            constructor() {
                pintarNombres();
            }

            pintarNombres() {
            // Parsea los datos JSON a un objeto JavaScript
            var datos = JSON.parse('<?php echo $datosJSON; ?>');

            // Encuentra el elemento select con el id 'datos'
            var select = document.getElementById('datos');

            // Itera sobre los datos y crea un nuevo elemento option para cada uno
            datos.forEach(function (item) {
                // Crea un nuevo elemento option
                var option = document.createElement('option');
                // Establece el valor y el texto del option
                option.value = item.id;
                option.textContent = item.nombre;
                // Añade el option al select
                select.appendChild(option);
            });
        }

        
        // function funAjax() {
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function () {
        //     // Página 6 de la diapositiva 
        //     if (this.readyState == 4 && this.status == 200) {
        //         let obj = JSON.parse(this.responseText);
        //         document.getElementById("datos").innerHTML = obj[0].nombre;
        //     }
        // }
        // xhttp.open("GET", "carteras.json", true);
        // xhttp.send();
        // }
        
        window.onload = function () {
            new Mostrar();
        }
    }
    </script>
</head>

<body>

    <div class="card border-dark mb3" style="max-width: 30rem; display:block; align-items: center;">
        <div class="card-header">
            <h1> TAREA 1 - TEMA 10.</h1>
        </div>
        <div class="card-body">
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option id="datos"></option>
            </select>
        </div>
    </div>

</body>

</html>