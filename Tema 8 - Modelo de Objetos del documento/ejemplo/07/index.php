<!DOCTYPE html>
<html>

<head>
    <script>
        function f1() {
            var x = document.activeElement.tagName; // Obtiene nombre de etiqueta HTML del elemento que tiene el foco.
            document.getElementById("p1").innerHTML = x; // Muestra el nombre de etiqueta HTML.
        }
    </script>

</head>

<body onclick="f1()">
    <input type="text" value="....">
    <button>Botón</button>
    <p id="p1"></p>
</body>

</html>