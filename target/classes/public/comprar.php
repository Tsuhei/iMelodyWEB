<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />

    <link rel="stylesheet" href="CSS/carroCompras.css" >
    <link rel="stylesheet" href="CSS/espinner.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@600&display=swap" rel="stylesheet">
    <link rel= "shortcut icon" href= "media/Icon/iMLogo.png" type="image/x-icon">
    
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

    <script type="text/javascript">
        emailjs.init('0bU4qjecNcP2aiuNx')
    </script>
</body>
    <title>iMelody</title>
</head>

<body>
    <header>
        <nav class="navbar">
            <h2 class="p-3 text-white">iMelody</h2>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link text-white" data-bs-toggle="modal" data-bs-target="#modal">
                        <i class="bi bi-cart mx-5" id="carritoContenedor">0</i>
                    </a>
                    <a class="text-white" href="carroCompras.php">Volver</a>
                </li>
            </ul>
        </nav>
    </header>

    <button id="activarFuncion" class="btn btn-secondary boton mt-2">¡Click!</button>

    <main>
        <div class="container">
            <div class="row mt-3">
                <div class="col">
                    <h2 class="d-flex justify-content-center mb-3">Realizar Compra</h2>
                    <form id="procesar-pago" method="POST">
                        <div class="form-group row">
                            <label for="cliente" class="col-12 col-md-2 col-form-label h2">Cliente :</label>
                            <div class="col-12 col-md-10">
                                <input type="text" class="form-control" id="cliente"
                                    placeholder="Ingresa nombre cliente" name="persona">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-12 col-md-2 col-form-label h2">Correo :</label>
                            <div class="col-12 col-md-10">
                            <input type="text"  id="correo" class="form-control"  name="email.id" id="email.id">
                            </div>
                        </div>

                        <div id="carrito" class="form-group table-responsive">
                            <table class="table" id="lista-compra">
                                <thead>
                                    <tr>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Sub Total</th>
                                    </tr>

                                </thead>
                                <tbody>

                                </tbody>
                                <tr>
                                    <th colspan="4" scope="col" class="text-right">TOTAL
                                        <p id="totalProceso"></p>
                                    </th>
                                    <!-- <th scope="col"></th> -->
                                </tr>

                            </table>
                        </div>

                        <div class="row justify-content-center d-none" id="spinner">
                            <div class="spinner">
                                <div class="dot1"></div>
                                <div class="dot2"></div>
                            </div>
                        </div>

                        <div class="row justify-content-between">
                            <div class="col-md-4 mb-2">
                                <a href="carroCompras.php" class="btn btn-info btn-block">Seguir comprando</a>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <input type="submit" class="btn btn-success btn-block" id="button" value="Finalizar compra" >
                            </div>
                        </div>
                    </form>


                </div>


            </div>

        </div>
    </main>




    <script src="js/carrosCompras.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


</html>