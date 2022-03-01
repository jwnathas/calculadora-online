//i make a function with the name of my favorite professor <3

const resultado = document.getElementById("resultado");

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function insert(num) {
  resultado.innerHTML += num;
}