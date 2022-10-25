
/* Bojeto de productos */

class Producto {
    constructor(nombre, precio, imagen, tipo, idproducto) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.tipo = tipo;
        this.cantidad = 10;
        this.idproducto = idproducto;

    }


    sumarStock(cantidad) {
        this.cantidad = this.cantidad + cantidad;
    }
}


/* Productos */

const sixPackHeineken = new Producto("Six Pack Heineken", 1800, "imagenes/productos/Six-Pack-Heineken.png", "Cerveza", 1);
const sixPackCorona = new Producto("Six Pack Corona", 1600, "imagenes/productos/Six-Pack-Corona.png", "Cerveza", 2);
const twelvePackBudweiser = new Producto("Twelve Pack Budweiser", 2200, "imagenes/productos/Six-Budweiser-American.png", "Cerveza", 3);
const sixPackbrahma = new Producto("Six Pack BRAHMA", 1300, "imagenes/productos/Six-Brahma.jpg", "Cerveza", 4);
const sixPackSchneider = new Producto("Six Pack Schneider", 1640, "imagenes/productos/six-pack-schneider.jpg", "Cerveza", 5);
const sixPackQuilmes = new Producto("Six Pack Quilmes", 1200, "imagenes/productos/six-pack-quilmes.jpg", "Cerveza", 6)
const ronDiplomaticoReserva = new Producto("Ron Diplomatico Reserva", 6850, "imagenes/productos/diplomatico-reservagrande.jpg", "Ron", 7);
const ronBacardiAñejo = new Producto("Ron Bacardi Añejo", 3750, "imagenes/productos/bacardi.jpg", "Ron", 8);
const ronBarceló = new Producto("Ron Barceló", 2380, "imagenes/productos/barcelo.jpg", "Ron", 9);
const ronSantaTeresa = new Producto("Ron Santa Teresa 1796", 7350, "imagenes/productos/santa-teresa.jpg", "Ron", 10);
const whiskyBuchanan = new Producto("Whisky Buchanan", 12550, "imagenes/productos/buchanans.jpg", "Whisky", 11);
const whiskyOldParr = new Producto("Whisky Old Parr", 7850, "imagenes/productos/Old_parr.png", "Whisky", 12);
const whiskyChivasRegal = new Producto("Whisky Chivas Regal", 7850, "imagenes/productos/chivas-regal.jpg", "Whisky", 13);
const whiskyJohnnieWalker = new Producto("Whisky Johnnie Walker Red Label", 6850, "imagenes/productos/whisky_johnnie_walker_red_label.jpg", "Whisky", 14);
const vodkaAbsolut = new Producto("Vodka Absolut", 2650, "imagenes/productos/absolut.jpg", "Vodka", 15);
const vodkaSmirnoff = new Producto("Vodka Smirnoff", 1800, "imagenes/productos/smirnoff.png", "Vodka", 16);
const vodkaCiroc = new Producto("Vodka Ciroc", 1600, "imagenes/productos/ciroc.jpg", "Vodka", 17);
const vodkaSernova = new Producto("Vodka Sernova + Speed", 1700, "imagenes/productos/sernova.png", "Vodka", 18);


/* Array de productos */

const stockProductos = [sixPackHeineken, sixPackCorona, twelvePackBudweiser, sixPackbrahma, sixPackSchneider, 
    sixPackQuilmes, ronDiplomaticoReserva, ronBacardiAñejo, ronBarceló, ronSantaTeresa, whiskyBuchanan, whiskyOldParr, 
    whiskyChivasRegal, whiskyJohnnieWalker, vodkaAbsolut, vodkaSmirnoff, vodkaCiroc, vodkaSernova, ];

console.log(stockProductos);

/* Aumentar Stock */

function aumentarStockCorona(arrayProducto) {
    for (let producto of arrayProducto) {
        if(producto.nombre === "Six Pack Corona") {
            producto.sumarStock(23);
        }
    }
}
aumentarStockCorona(stockProductos);
console.log(stockProductos);


function aumentarStockHeineken(arrayProducto) {
    for (let producto of arrayProducto) {
        if(producto.precio === "Six Pack Heineken") {
            producto.sumarStock(17);
        }
    }
}
aumentarStockHeineken(stockProductos);




/* Buscador */

const busqueda = document.getElementById("busqueda");

const ingresaBusqueda = document.getElementById("ingresaBusqueda");

const filtrar = () =>{

    busqueda.innerHTML = '';
    
    const texto = ingresaBusqueda.value.toLowerCase();
    for ( let producto of stockProductos ){
        let nombre = producto.nombre.toLowerCase();

        if ( nombre.indexOf(texto) !== -1){
            busqueda.innerHTML += `
            
        <div class="card" style="width: 18rem;" id="resultado">
            <img src=${producto.imagen} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${producto.nombre}</h5>
                <h5 class="card-title">Precio: $ ${producto.precio}</h5>
                <h5 class="card-title"> Licor: ${producto.tipo}</h5>
                <p class="card-text">Stock: ${producto.cantidad}</p>
                <a href="#" class="btn btn-success" id= ${producto.idproducto} >Agrgar al carrito</a>
            </div>
        </div>
            `
        }

    }
    if ( busqueda.innerHTML === '' ){
        busqueda.innerHTML = `<li>Producto no encontrado</li>`
    }

    const boton = document.getElementById(`boton${progucto.idproducto}`);
    boton.addEventListener("click", () => {

    })

}

ingresaBusqueda.addEventListener('keyup', filtrar)
filtrar();



