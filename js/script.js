// Contenedores
const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorOfertas = document.getElementById("contenedor-ofertas")
const contenedorMasVendidos = document.getElementById("contenedor-vendidos")
const resultadoBotones = document.getElementById("resultado-botones")

// Botones

const btnModoOscuro = document.getElementById("btnModoOscuro")
const botonMostrarTodos = document.getElementById("btnMostrarTodos")
const botonMostrarOfertas = document.getElementById("btnMostrarOfertas")
const botonMostrarCaros = document.getElementById("btnMostrarCaros")
const btnLimpiar = document.getElementById("btnLimpiar")

// Crear HTML plantilla
function crearHTMLProducto(producto) {
  return `
  <div class="producto-card">
    <h3>${producto.nombre}</h3>
    <span class="categoria">${producto.categoria}</span>
    ${
      producto.enOferta
        ? `
      <div>
        <span class="precio-original">${producto.precioOriginal}€</span>
        <div class="precio">${producto.precio}</div>
        <span class="oferta">OFERTA</span>
      </div>
    `
        : `<div class="precio">${producto.precio}</div>`
    }
  <p class="stock">Stock: ${producto.stock} unidades</p>
</div>
  `
}

// Mostrar todos los productos
const htmlProductos = productos.map(crearHTMLProducto).join("")
contenedorProductos.innerHTML = htmlProductos

// Mostrar productos en oferta
const productosEnOferta = productos.filter((producto) => producto.enOferta)
const htmlOfertas = productosEnOferta.map(crearHTMLProducto).join("")
contenedorOfertas.innerHTML = htmlOfertas

// Crear con createElement
function crearElementoProducto(producto) {
  const divCard = document.createElement("div")
  divCard.className = "producto-card"

  const h3 = document.createElement("h3")
  h3.textContent = producto.nombre
  divCard.appendChild(h3)

  const spanCategoria = document.createElement("span")
  spanCategoria.className = "categoria"
  spanCategoria.textContent = producto.categoria
  divCard.appendChild(spanCategoria)

  const divPrecio = document.createElement("div")
  divPrecio.className = "precio"
  divPrecio.textContent = producto.precio + "€"
  divCard.appendChild(divPrecio)

  if (producto.enOferta) {
    const spanPrecioOriginal = document.createElement("span")
    spanPrecioOriginal.className = "precio-original"
    spanPrecioOriginal.textContent = producto.precioOriginal + "€"
    divCard.insertBefore(spanPrecioOriginal, divPrecio)

    const spanOferta = document.createElement("span")
    spanOferta.className = "oferta"
    spanOferta.textContent = "OFERTA"
    divCard.appendChild(spanOferta)
  }

  const stock = document.createElement("p")
  stock.className = "stock"
  stock.textContent = `Stock: ${producto.stock} unidades`
  divCard.appendChild(stock)

  return divCard
}

// Mostrar más vendidos
const masVendidos = productos.slice(0, 4)

masVendidos.forEach((producto) => {
  const productoHTML = crearElementoProducto(producto)
  contenedorMasVendidos.appendChild(productoHTML)
})

// Evento modo oscuro

btnModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro") // añade o quita la clase

  const modoOscuroActivado = document.body.classList.contains("modo-oscuro")

  if (modoOscuroActivado) {
    btnModoOscuro.textContent = "Modo Claro"
  } else {
    btnModoOscuro.textContent = "Modo Oscuro"
  }
})

// Botón: Mostrar todos los productos

botonMostrarTodos.addEventListener("click", () => {
  const productosHTML = productos.map(crearHTMLProducto).join("")
  resultadoBotones.innerHTML = `
  <h3>Todos los productos (${productos.length})</h3>
  <div class="grid-productos">${productosHTML}</div>
  `
})

// Botón: Mostrar productos en oferta

botonMostrarOfertas.addEventListener("click", () => {
  const ofertas = productos.filter((producto) => producto.enOferta)
  const ofertasHTML = ofertas.map(crearHTMLProducto).join("")

  resultadoBotones.innerHTML = `
  <h3>Productos en oferta (${ofertas.length})</h3>
  <div class="grid-productos">${ofertasHTML}</div>
  `
})

// Botón: Mostrar productos premium

botonMostrarCaros.addEventListener("click", () => {
  const premium = productos.filter((producto) => producto.precio > 500)
  const premiumHTML = premium.map(crearHTMLProducto).join("")

  resultadoBotones.innerHTML = `
  <h3>Productos premium (${premium.length})</h3>
  <div class="grid-productos">${premiumHTML}</div>
  `
})

// Botón: Limpiar resultados

btnLimpiar.addEventListener("click", () => {
  resultadoBotones.innerHTML = ""
})
