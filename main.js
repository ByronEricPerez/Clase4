/* function resta(user){

    console.log("Bienvenido al sistema: " +user)
    let num1 = parseInt( prompt("Ingrese numero"));
    let num2 = parseInt( prompt("Ingrese num"));

    console.log( num1 - num2 )

}
let user = prompt("ingresar");
resta ( user ); */


/* function price( priceItem ){
    var priceItem = parseFloat(prompt("Precio producto"));
    return priceItem;
}

function offer( offerItem ){
    var offerItem = 50;
    var discout = priceItem - offerItem;
    return discout;
}

function iva( ivaItem ){
    var ivaItem = 1.21;
    var  final = discout * ivaItem;
}

alert("el precio final es " + final); */


function obtenerPrecioProducto (){
    precioProducto = parseFloat(prompt("Precio producto"));

}

function obtenerIvaProducto (){
    iva = parseFloat(prompt("Iva del producto"));

}

function productoMasIva (){
    obtenerPrecioProducto ();
    obtenerIvaProducto ();
    alert ("el precio del producto mas iva  es " + precioProducto * iva);
}