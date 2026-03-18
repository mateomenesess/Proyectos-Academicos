// inicializacion de variables
let tarjetasDestapadas = 0;
let trajeta1 = null;
let trajeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;

// apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos');



// generacion de numeros aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);


// funcion principal
function destapar(id) {
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if (tarjetasDestapadas == 1){
        // mostrar primer numero
        trajeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        trajeta1.innerHTML = primerResultado;

        // desabilitar primer boton
        trajeta1.disabled = true;
    }else if (tarjetasDestapadas ==2){
        // mostrar segundo numero
        trajeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        trajeta2.innerHTML = segundoResultado;

        // deshabilitar segundo boton
        trajeta2.disabled = true;

        // incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML =`Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado) {
            // encerrar contador tarjetas destapadas
            tarjetasDestapadas = 0

            // aumentar Aciertos
            aciertos++;
        }
    }

}