let numeroSecreto = 0;
let numeroIntento = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${numeroIntento} ${(numeroIntento === 1 ? 'vez' : 'veces')}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
        //El usuario no acerto  
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor'); 
        }else{
            asignarTextoElemento('p','El número es mayor'); 
        }
        numeroIntento++; 
        limpiarCaja();

    }
    
    return; 
};

function generarNumeroSecreto(){

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    // si ya sorteamos todo los numeros

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los número posibles')
    }else{
        // si el número generado está incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{  
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
    
}

function limpiarCaja(){
    
    document.querySelector('#valorUsuario').value = "";

    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = ''; 
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntento = 1;  
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de número
    //Generar el número aleatorio 
    //Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
    
condicionesIniciales();
