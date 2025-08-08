// crear constantes o let
const inputAmigo = document.getElementById ("amigo");
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulresultado = document.getElementById ("resultado");
//crear lista de amigos
const listaAmigos = [];

// funcion para agregar amigos mediante el boton
function agregarAmigo () {
      
    // en caso de que no agregue texto, que salga una alerta 
    if (!inputAmigo.value) {
    alert ("Falta agregar un nombre");
   } else {
    // mostrar en pantalla, en forma de lista, abajo esta por la version foreach
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}<li>`;
    limpiarCaja ();
   }
return   
}
//funcion para sortear amigos, que solo permita cuando son dos o mas persona--
function sortearAmigo () {
    if (listaAmigos.length < 2){
    alert ("Para generar el sorteo se necesitan dos participantes");
    } else {
    const random = Math.floor (Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos [random];
    ulresultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
return}
}
// funcion para limpiar la caja de input
function limpiarCaja (){
    inputAmigo.value = "";
    return
}



/*

function actualizarLista() {
    ulista.innerHTML = ""; 
    listaAmigos.forEach(inputAmigo => {
        let li = document.createElement("li");
        li.textContent = inputAmigo;
        lista.appendChild(li);
    });
}*/