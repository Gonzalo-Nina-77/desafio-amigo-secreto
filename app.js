const inputAmigo = document.getElementById ("amigo");
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulresultado = document.getElementById ("resultado");
const listaAmigos = [];


function agregarAmigo () {
      if (!inputAmigo.value) {
    alert ("Falta agregar un nombre");
   } else {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}<li>`;
    limpiarCaja ();
   }
return   
}

function sortearAmigo () {
    if (listaAmigos.length < 2){
    alert ("Para generar el sorteo se necesitan dos participantes");
    } else {
    const random = Math.floor (Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos [random];
    ulresultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
return}
}

function limpiarCaja (){
    inputAmigo.value = "";
    return
}







/*let amigos = []

function agregarAmigo () {
    let nuevoAmigo = document.getElementById ('amigo').value ;
    if (nuevoAmigo !== "") {
       amigos.push (nuevoAmigo);
       console.log (amigos);
       actualizarLista ();
       limpiarCaja ();
    } else {
    alert ("No ingreso un nombre");
    }
    return
}
function limpiarCaja () {
    document.querySelector ('#amigo').value= "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach(nuevoAmigo => {
        let li = document.createElement("li");
        li.textContent = nuevoAmigo;
        lista.appendChild(li);
    });
}*/