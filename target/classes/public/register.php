<?php 
    
    include 'code-register.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>¡Únetenos!</title>
    <link rel="stylesheet" href="CSS/estilosRL0.0.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel= "shortcut icon" href= "media/Icon/iMLogo.png" type="image/x-icon">
</head>

<body>

    <div class="container-all">
        <div class="ctn-form">
            <img src="media/Icon/iMLogoGIF.gif" alt="" class="logo">
            <h1 class="title">Registrate</h1>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                <label for="">Nombre de Usuario</label>
                <input type="text" name="username">
                <span class="msg-error"><?php echo $username_err; ?></span>
                <label for="">E-mail</label>
                <input type="text" name="email">
                <span class="msg-error"> <?php echo $email_err; ?></span>
                <label for="">Contraseña</label>
                <input type="password" name="password">
                <span class="msg-error"> <?php echo $password_err; ?></span>

                <input type="submit" value="Registrarse">

            </form>

            <span class="text-footer">¿Ya te has Registrado?
                <a href="login.php">Iniciar Sesión</a>
            </span>
        </div>
        
            <div class="ctn-text">
            <div class="capa"><video src="../public/videofondo.mp4" autoplay="true" 
            muted="true" loop="true"></div>
            <h1 class="title-description">¡Unete a nuestra pagína!</h1>
            <p class="text-description">¡Haz parte de iMelody!</p>
        </div>

    </div>

</body>

</html>