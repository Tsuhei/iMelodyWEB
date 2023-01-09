<?php
    
    require "code-login.php";

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Logueate!</title>
    <link rel="stylesheet" href="CSS/estilosRL0.0.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel= "shortcut icon" href= "media/Icon/iMLogo.png" type="image/x-icon">
</head>

<body>

    <div class="container-all">

        <div class="ctn-form">
            <img src="media/Icon/iMLogoGIF.gif" alt="" class="logo">
            <h1 class="title">Iniciar Sesión</h1>
<!--htmlspecialchars  Esta función convierte caracteres especiales en entidades HTML.-->

<!--El Echo se puede utilizar para mostrar el resultado de cualquier expresión-->

<!--$_SERVER es una matriz que contiene información como encabezados, rutas y ubicaciones de secuencias de comandos-->
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

                <label for="">E-mail</label>
                <input type="text" name="email">
                <span class="msg-error"><?php echo $email_err; ?></span>
                <label for="">Contraseña</label>
                <input type="password" name="password">
                <span class="msg-error"><?php echo $password_err; ?></span>

                <input type="submit" value="Let's Rock">

            </form>

            <span class="text-footer">¿Aún no te has Registrado?
                <a href="register.php">Regístrate</a>
            </span>
        </div>
            

        
        <div class="ctn-text">
            <div class="capa"><video src="../public/videofondo.mp4" autoplay="true" 
            muted="true" loop="true"></div>

            <h1 class="title-description">Bienvenidx</h1>
            <p class="text-description">¡Inicia sesión para escuchar tus canciones Fav's!</p>
        </div>
    </div>

</body>

</html>