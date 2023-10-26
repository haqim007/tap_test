<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ganjil Genap </title>
    <style>
        body {
            text-align: center;
            padding: 20px;
        }

        input[type="text"] {
            padding: 10px;
            font-size: 16px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h2>Ganjil Genap </h2>
    <form method="post">
        <input type="text" name="number" placeholder="Enter a number">
        <button type="submit">Cek</button>
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $number = $_POST["number"];

        if ($number % 2 == 0) {
            echo "<p>$number adalah ganjil.</p>";
        } else {
            echo "<p>$number adalah genap.</p>";
        }
    }
    ?>
</body>
</html>
