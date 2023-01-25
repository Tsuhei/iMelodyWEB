const stockProductos = [
  {
      id: 1,
      nombre: "Candy",
      cantidad: 1,
      desc: "Plan B",
      precio: 2900,
      img: "media/Image/song1.jpg",
  },
  {
      id: 2,
      nombre: "You are the right one",
      cantidad: 1,
      desc: "Sports",
      precio: 2900,
      img: "media/Image/song2.jpg",
  },
  {
      id: 3,
      nombre: "Estación los Alpes",
      cantidad: 1,
      desc: "Buhodermia",
      precio: 2900,
      img: "media/Image/song3.jpg",
  },
  {
      id: 4,
      nombre: "Sudno",
      cantidad: 1,
      desc: "Molchat Doma",
      precio: 2900,
      img: "media/Image/song4.jpg",
  },
  {
      id: 5,
      nombre: "¿Qué se siente que me gustes tanto?",
      cantidad: 1,
      desc: "Daniel, me estas matando",
      precio: 2900,
      img: "media/Image/song5.jpg",
  },
  {
      id: 6,
      nombre: "Dos gardenias",
      cantidad: 1,
      desc: "Angel Canales",
      precio: 2900,
      img:"media/Image/song6.jpg",
  },
  {
      id: 7,
      nombre: "Paranoid",
      cantidad: 1,
      desc: "Black Sabbath",
      precio: 3500,
      img: "media/Image/song7.jpg",
  },
  {
      id: 8,
      nombre: "Aid Liberation",
      cantidad: 1,
      desc: "Aghori",
      precio: 3500,
      img: "media/Image/song8.jpg",
  },
  {
      id: 9,
      nombre: "Fantasy",
      cantidad: 1,
      desc: "Meiko Nakahara",
      precio: 2900,
      img: "media/Image/song9.jpg",
  },
  {
      id: 10,
      nombre: "Let's Get Ridiculous",
      cantidad: 1,
      desc: "Redfoo",
      precio: 3500,
      img: "media/Image/song10.jpg",
  },
  {
    id: 11,
    nombre: "After Like",
    cantidad: 1,
    desc: "IVE",
    precio: 1200,
    img: "media/Image/song11.jpg",
},
{
    id: 12,
    nombre: "743",
    cantidad: 1,
    desc: "Miranda!",
    precio: 2900,
    img: "media/Image/song12.jpg",
},
{
    id: 13,
    nombre: "Hype Boy",
    cantidad: 1,
    desc: "New Jeans",
    precio: 3500,
    img: "media/Image/song13&19.jpg",
},
{
    id: 14,
    nombre: "ANTIFRAGILE",
    cantidad: 1,
    desc: "LE SSERAFIM",
    precio: 3500,
    img: "media/Image/song14.jpg",
},
{
    id: 15,
    nombre: "Por amar al Amor",
    cantidad: 1,
    desc: "Miranda!",
    precio: 2900,
    img: "media/Image/song15&20.jpg",
},
{
    id: 16,
    nombre: "Banana Brain",
    cantidad: 1,
    desc: "Die Antwoord",
    precio: 2900,
    img: "media/Image/song16.jpg",
},
{
    id: 17,
    nombre: "Me gustas Tanto",
    cantidad: 1,
    desc: "No compres esto por tu bien",
    precio: 2900,
    img: "media/Image/song17.jpg",
},
{
    id: 18,
    nombre: "Fearless",
    cantidad: 1,
    desc: "LE SSERAFIM",
    precio: 3500,
    img: "media/Image/song18.jpg",
},
{
    id: 19,
    nombre: "Attention",
    cantidad: 1,
    desc: "New Jeans",
    precio: 3500,
    img: "media/Image/song13&19.jpg",
},
{
    id: 20,
    nombre: "Un Tiempo",
    cantidad: 1,
    desc: "Miranda!",
    precio: 1200,
    img: "media/Image/song15&20.jpg",
},
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "comprar.php";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_4db79so';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }