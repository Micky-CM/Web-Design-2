<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serie Fibonacci</title>
    <style>
        body {
            background-color: #f0f8ff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Serie Fibonacci</h1>
        <?php
            $n1 = 0;
            $n2 = 1;
            $suma = $n1 + $n2;

            echo $n1 . "<br>";
            echo $n2 . "<br>";

            for($i = 2; $i < 7; $i++) {
                $n3 = $n1 + $n2;
                echo $n3 . "<br>";
                $suma += $n3;
                $n1 = $n2;
                $n2 = $n3;
            }

            echo "<h2>Suma de la serie: " . $suma . "</h2>";
        ?>
    </div>
</body>
</html>
