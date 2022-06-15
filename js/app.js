
/* FUNCIONES */

function saludar(){
    alert("Bienvenido " + usuario + ", a continuacion verás las opciones del perfil :)");
}

function numeroCuotas(precio,iva){

    let cuotas = Number(prompt("Cuantos pagos desea realizar 3, 6 o 12? Ingrese el dígito"));

    if (cuotas === 3) {
        precio = ((precio * iva) /cuotas);
        alert(`El valor en 3 cuotas es de $${precio}`);
        console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
    } else if (cuotas === 6){
        precio = ((precio * iva) /cuotas);
        alert(`El valor en 6 cuotas es de $${precio}`);
        console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
    } else if (cuotas === 12){
        precio = ((precio * iva) /cuotas);
        alert(`El valor en 12 cuotas es de $${precio}`);
        console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
    } else {
        alert("Dígito no valido como cuota, ingresar nuevamente");
    }
}

/* LOGGING */
let usuario = prompt("Ingrese su nombre:").toUpperCase();

const precioPantalon = 5000;
const precioCamisa = 4500;
const precioRemera = 3000;
const precioZapatos = 8000;
const iva = 1.21;

while (true) {
    if (usuario === "LUCAS"){
        saludar();
        console.log("Nombre de Perfil: " + usuario);
        /* INSTANCIA DE COMPRA */

        let opciones = prompt ("Ingresa el número correspondiente de lo que quieres comprar: \n 1-Pantalón \n 2-Camisa \n 3-Remera \n 4-Zapatos \n ESC-Salir").toUpperCase();

        function setCases(item,precio,cuota){
            console.log('Ingresaste ' + item)
            alert('Precio de ' + item + ': $' + precio);
            let decision1 = prompt ("Desea seguir con la compra? SI / NO").toUpperCase();
            if (decision1 == "SI") {
                alert ("El precio del " + item + " + iva es de $" + (precio * iva));
                console.log("Precio " + item + " $" + precio);
                console.log("Precio " + item +  " + iva $" + (precio * iva));
                numeroCuotas(cuota,1.21);
            } else { 
                // no hago nada
            }
        }

        while (opciones !== "ESC"){
            switch (opciones){
                case "1":
                    setCases('Pantalón',precioPantalon,5000);
                    break;
                case "2":
                    setCases('Camisa',precioCamisa,4500);
                    break;
                case "3":
                    setCases('Remera',precioRemera,3000);
                    break;
                case "4":
                    setCases('Zapatos',precioZapatos,8000);
                    break;
                default:
                    alert("Opción no encontrada");
                    break;
            }
            opciones = prompt ("Ingresa el número correspondiente de lo que quieres comprar: \n 1-Pantalón \n 2-Camisa \n 3-Remera \n 4-Zapatos \n ESC-Salir").toUpperCase();
        }

        alert ("Esperamos vuelvas pronto!");
        console.log ("<--------- Fin de Compra --------->");
        break;


    } else if (usuario === "ADMIN") {
        // ADMIN
        saludar();
        console.log("Nombre de Perfil: " + usuario);
        alert ("IMPORTANTE: Para el ingreso de productos será necesario completar todos los datos solicitados")
        
        class Producto {
            constructor(id, tipo, precio, stock ) {
                this.id = id
                this.tipo = tipo
                this.precio = precio
                this.stock = stock
            }
        }

        const catalogo = [
            new Producto(1, 'Jean Azul', 5000, 20),
            new Producto(2, 'Jean Negro', 5200, 30),
            new Producto(3, 'Camisa', 4500, 10),
            new Producto(4, 'Remera Roja', 3000, 35),
            new Producto(5, 'Remera Blanca', 3200, 15),
        ]
        console.log(catalogo);

        while (true){
            function agregarProducto() {
                let id = Number( prompt ('Ingrese ID del producto') )
                let tipo = prompt ('Ingrese el tipo de producto')
                let precio = Number( prompt ('Ingrese precio del producto') )
                let stock = Number(prompt ('Ingrese el stock del producto') )
    
                catalogo.push( new Producto(id, tipo, precio, stock) )
                alert ("Se agregó exitosamente!");
            }

            let carga = prompt ("Cargar producto ahora? SI / NO").toUpperCase();

            if (carga === "SI") {
                
                agregarProducto();
                // console.log(caramelos);
                            
            } else {
                alert ("Carga de productos finalizada");
                break;
            }

        }
            
        
    } else {
        alert ("Error: Debes ingresar tu nombre!");
    }  
           
    usuario = prompt ("Ingrese tu nombre").toUpperCase();
}