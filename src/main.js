const productos = [
   {
      nombre: "Producto 1",
      imagen: "producto1.jpg",
      descripcion: "Descripción del Producto 1.",
   },
   {
      nombre: "Producto 2",
      imagen: "producto2.jpg",
      descripcion: "Descripción del Producto 2.",
   },
   {
      nombre: "Producto 3",
      imagen: "producto3.jpg",
      descripcion: "Descripción del Producto 3.",
   },
   {
      nombre: "Producto 4",
      imagen: "producto4.jpg",
      descripcion: "Descripción del Producto 4.",
   },
   {
      nombre: "Producto 5",
      imagen: "producto5.jpg",
      descripcion: "Descripción del Producto 5.",
   },
];

// Obtén la referencia al elemento <section> de productos
const productosSection = document.getElementById("productos-nuevos");

// Recorre el array de productos y crea una tarjeta para cada uno
productos.forEach((producto) => {
   // Crea un elemento <article> para cada producto
   const productoCard = document.createElement("article");
   productoCard.classList.add("producto-card");

   // Crea una imagen
   const imagen = document.createElement("img");
   imagen.src = producto.imagen;
   imagen.alt = producto.nombre;

   // Crea un título
   const titulo = document.createElement("h3");
   titulo.textContent = producto.nombre;

   // Crea una descripción
   const descripcion = document.createElement("p");
   descripcion.textContent = producto.descripcion;

   // Agrega los elementos al <article> del producto
   productoCard.appendChild(imagen);
   productoCard.appendChild(titulo);
   productoCard.appendChild(descripcion);

   // Agrega la tarjeta de producto al <section> de productos
   productosSection.appendChild(productoCard);
});
// Verificar el ancho de la ventana al cargar o redimensionar
window.addEventListener("resize", function () {
   toggleDropdown();
});

function toggleDropdown() {
   const selectElement = document.getElementById("HeadlineAct");
   const windowWidth = window.innerWidth;

   if (windowWidth <= 768) {
      // Cambia el valor 768 según tus necesidades de diseño responsivo
      selectElement.classList.remove("opacity-0");
   } else {
      selectElement.classList.add("opacity-0");
   }
}

// Llamar a toggleDropdown al cargar la página
toggleDropdown();
