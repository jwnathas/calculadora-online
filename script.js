//i make a function with the name of my favorite professor <3

const resultado = document.getElementById("resultado");

function clean() {
    document.getElementById("resultado").innerHTML = "";
}

function insert(num) {
    resultado.innerHTML += num;
}

function calcular() {
    document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
}

function diogoMoreira(sinal) {
    document.querySelector("body").addEventListener("keydown", (tecla) => {
        if (tecla.key == sinal) {
            document.getElementById("resultado").innerHTML += sinal;
        }
    });
}

document.getElementById("limpar").addEventListener("click", () => {
    clean();
});

document.querySelector("#calculo").addEventListener("click", () => {
    calcular();
});

for (let i = 0; i <= 9; i++) {
    diogoMoreira(i);
}

document.querySelector("body").addEventListener("keydown", (tecla) => {
    if (tecla.key == "c") {
        clean();
    }
});

diogoMoreira(".");
diogoMoreira("/");
diogoMoreira("*");
diogoMoreira("+");
diogoMoreira("-");

document.querySelector("body").addEventListener("keydown", (tecla) => {
    if (tecla.key == "=") {
        calcular();
    }
});
