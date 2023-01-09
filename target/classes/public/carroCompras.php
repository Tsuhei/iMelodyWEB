<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
        />

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />

    <link rel="stylesheet" href="CSS/carroCompras.CSS" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@600&display=swap" rel="stylesheet">
    <link rel= "shortcut icon" href= "media/Icon/iMLogo.png" type="image/x-icon">
    <title>Carro de Compras</title>
</head>

<body>
    <header>
        <nav class="navbar">
            <h2 class="p-3 text-white">iMelody Shop</h2>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a
                        class="nav-link text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#modal"
                    >
                    <i class="bi bi-cart mx-5" id="carritoContenedor">0</i>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    
    <main>
        <div class="row mt-5" id="contenedor"></div>
    </main>
    
    <div class="container-xl">
        <div class="modal" tabindex="-1" role="dialog" id="modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Carrito</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body"></div>

                    <div class="modal-footer">

                        <button type="button" class="btn btn-danger" id="vaciarCarrito">
                            Vaciar carrito
                        </button>

                        <button type="button" id="procesarCompra" class="btn btn-primary">
                            Continuar compra
                        </button>

                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cerrar
                        </button>

                        <span>Precio total:</span>

                        <p class="text-center" id="precioTotal"></p>
                    </div>
                </div>
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

    <script src="js/carrosCompras.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</body>

</html>
