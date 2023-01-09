<?php
// Iniciar una sesión nueva o reanudar una existente
    session_start();
// Determina si una variable está declarada y es diferente de NULL
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: cuentaUser.php");
    exit;
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Iconos-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--Estlico CSS-->   
    <link rel="stylesheet" type="text/css" href="CSS/cuentaUser0.1.css">
    <!--Fuentes-->
    <link href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@600&display=swap" rel="stylesheet">
    <!--Icono de Pestaña-->
    <link rel= "shortcut icon" href= "media/Icon/iMLogo.png" type="image/x-icon">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <title>iMelody</title>
</head>


<body>
    <!--Barra Menu-->
<header>}

    <video src="media/Image/Dj - 1258.mp4" autoplay="true" 
    muted="true" loop="true">
    </video>
    <nav>   
        <p id="logo"><img src="media/Icon/iMLogo.png"></p>
        <!--<a href= "#start">Inicio</a>-->
        <a href= "#reproductor">Reproductor</a>
        <!--<a href= "#songs">Catálogo</a>-->
        <a href= "carroCompras.php" target="_blank">Carrito</a>
        <a href= "#social-media">Redes Sociales</a>
        <a href= "cerrar-sesion.php" >Cerrar Sesión</a> <!--class="close-sesion"-->
    </nav>
    <section class= "text-header" id ="start">
        <h1>iMelody</h1>
        <h2>Bienvenidx!</h2>
    </section>
    <div class= "wave" style= "height: 150px; overflow: hidden;">
        <svg viewBox= "0 0 500 150" preserveAspectRatio= "none" 
        style= "height: 100%; width: 100%;">
        <path d = "M0.00, 49.98 C150.00, 150.00 349.20, -50.00 500.00, 49.98 L500.00, 150.00 L0.00, 150.00 Z"
        style= "stroke: none; fill:rgb(140, 82, 255);">
        </path>
        </svg>
    </div>
</header>

<div class="main" >
    <!--Reproductor-->
    <div class="container">
        <h2 class= "title" id="reproductor">Reproductor</h2>
        <!--Contador de canciones-->
        <div class="show_song_no">
            <p id="present">1</p>
            <p>/</p>
            <p id="total">20</p>
        </div>
        <!--Imagen de cancion-->
        <img id="main_img">
        <!--Datos de Cancion-->
        <div class="info">
            <p id="nombre">Candy</p>
            <p id="artista">Plan B</p>
        </div>
        <!--barra de duracion y progreso-->
        <div class="duration">
            <input type="range" min="0" max="100" value="0" id="duration_slider" onchange="change_duration()">
        </div>
        <!--Botones de reproduccion-->
        <div class="btns">
            <button onclick="prev_song()" id="pre"><i class="fa fa-step-backward" aria-hidden="true"></i></button>
            <button onclick="justplay()" id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
            <button onclick="next_song()" id="next"><i class="fa fa-step-forward" aria-hidden="true"></i></button>
        </div>
        
        <button id="auto" onclick="autoplay_switch()"><i class="fa fa-circle-o-notch" aria-hidden="true"></i></button>
        
        <!--Volumen-->
        <div class="volume">
            <p id="volume_show">50</p>
            <i class="fa fa-volume-up" aria-hidden="true" onclick="mute_sound()" id="volume_icon"></i>
            <input type="range" min="0" max="100" value="50" onchange="volume_change()" id="volume">  
        </div>
    </div>
</div>

<footer>
<div class= "container-socialmedia">
    
    <div id= "social-media">
        <a href="" target="_blank"><img src="media/Icon/IG.png" id="img-media"></a>
    </div>
        
    <div id= "social-media">
        <a href="" target="_blank"><img src="media/Icon/TikTok.png" id="img-media"></a>
    </div>

    <div id= "social-media">
        <a href="" target="_blank"><img src="media/Icon/YouTube.png" id="img-media"></a>
    </div>
</div>

    <div class="title-final">
        <h3>Redes Sociales de:<img src="media/Icon/iMLogo.png" id="logito"></h3>
    </div>

</footer>

<script src="js/musicplayer.js"></script>

</body>

</html>