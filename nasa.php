<html>
    <head>
        <title>Nasa Images</title>
    </head>
    <body style="background-color: lightgrey;"></body>
</html>

<?php
$json = file_get_contents("streaminfo.get.json");
$array = json_decode($json, true);
print_r($array);

echo "<div style='font-size:2.5em; color:blue; margin:10px;' >";
echo "Radio Station: ";
echo $array ['data'] [0] ['track'] ['playlist'] ['title'];
echo "<br>";

echo "Current song playing: ";
echo $array ['data'] [0] ['track'] ['title'];
echo "<br>";

echo "Artist: ";
echo $array ['data'] [0] ['track'] ['artist'];
echo "<br>";

$img = $array ['data'] [0] ['track'] ['imageurl'];
echo "<img src='$img'";
echo "<br>";
echo "<br>";

echo "Time: ";
echo $array ['data'] [0] ['date'];
echo ", ";
echo $array ['data'] [0] ['time']; echo " HST";
echo "</div>";
?>
</html>