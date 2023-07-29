let nombreUsuario = prompt("Ingrese nombre de usuario: ");
let contrasenaUsuario = prompt("Ingrese una contraseña: ");
let tickets = 0;

if ((nombreUsuario != " ") && (contrasenaUsuario != " ")){
    alert ("Bienvenido " + nombreUsuario + " al mundo del Espectáculo!!");
} else {
    alert ("El usuario o la contraseña son invalidos. Por favor vuelva a intentarlo.")
}

class Espectaculo {
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria =categoria;
    }
}

const espectaculo1 = new Espectaculo ("Tom, Dick & Harry", 4000, "comedia");
const espectaculo2 = new Espectaculo ("Cocomelon", 2000, "musical");
const espectaculo3 = new Espectaculo ("Matilda", 5000, "musical");

const mostrarNombres = () =>  "\n" + espectaculo1.nombre + "\n" + espectaculo2.nombre + "\n" + espectaculo3.nombre;
alert("Los espctaculos disponibles son: " + mostrarNombres())
let entrada = prompt("Ingresar el nombre del espectaculo deseado o ingresar ESC para salir:");

function getPrecio(amount, precio) {
    const value = precio * amount;
    if (amount >= 3) {
        return value * 0.8;
    }
    return value;
}

const getValorTickets = (precio) => {
    alert("El precio de la entrada es de " + espectaculo1.precio);
    alert("Comprando 3 entradas obtendras un 20% de descuento en el total de la compra");
    tickets = Number(prompt("Indique la cantidad de entradas que desea comprar: "));
    alert("El total a pagar es de $ " + getPrecio(tickets, precio));
    alert("En caso de no querer realizar otra operacion ingresar ESC");
    return tickets;
}

while (entrada != "ESC"){
    switch (entrada) {
        case espectaculo1.nombre:
            tickets = getValorTickets(4000);
            break;
        case espectaculo2.nombre:
            tickets = getValorTickets(2000);
            break;
        case espectaculo3.nombre:
            tickets = getValorTickets(5000);
            break;
        default:
            alert("Nombre de evento invalido, por favor ingrese uno correcto.");
            break;
    }
    entrada = prompt("Ingresar el nombre del espectaculo deseado: ");
} 

alert("Seleccione del siguiente listado lo que desea agregar a su compra:")
const comidas = [
    {tipo: "Pochoclos", precio: 1200},
    {tipo: "Nachos con queso", precio: 1400},
    {tipo: "Pancho", precio: 1100},
    {tipo: "Bebida", precio: 1000},
    {tipo: "Golosinas", precio: 700},
    {tipo: "Combo: Pochoclos, Bebida y Golosina", precio: 2500},
]

const tipos = comidas.map((el) => el.tipo)
alert(tipos)

const opcionesEconomicas = comidas.filter(comida => comida.precio <= 1100);
console.log("Las opciones más economicas son las siguientes: ");
opcionesEconomicas.forEach(function(comida){
    console.log(comida.tipo);
})

let sumaPrecios = 0;

comidas.forEach(function(comida){
    sumaPrecios += comida.precio;
})
console.log("El precio total de todos los productos es de: ");
console.log(sumaPrecios)
