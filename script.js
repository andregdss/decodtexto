const caixaTexto = document.getElementById ("caixaTexto");

const direitaMensagem1 = document.getElementById ("direitaMensagem1");

const direitaMensagem2 = document.getElementById ("direitaMensagem2");

const imagemBoneco = document.getElementById("imagemBoneco");

const botaoEncriptar = document.getElementById("botaoEncriptar");

const botaoDesencriptar = document.getElementById ("botaoDesencriptar");

const botaoCopiar = document.getElementById ("botaoCopiar");

const direita = document.getElementById("direita");


let regra = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];




/* FUNCIONALIDADE DO BOTÃO DE ENCRIPTAR*/
botaoEncriptar.addEventListener("click", () => {
    const texto = caixaTexto.value.toLowerCase();
    if (texto != "") {
        function encriptar(textoDigitado) {
            for (let i = 0; i < regra.length; i++) {
                if (textoDigitado.includes(regra[i][0])) {
                    textoDigitado = textoDigitado.replaceAll(regra[i][0], regra[i][1]);
                };
            };
            return textoDigitado
        };
    } else {
        alert("Nenhum texto foi digitado!");
    };
    const textoEncriptado = encriptar(texto);
    console.log(encriptar(texto));
    direitaMensagem1.innerHTML = textoEncriptado;

    imagemBoneco.style.display = "none";
    direitaMensagem2.style.display = "none";
    botaoCopiar.style.display = "block";
    direita.classList.add("ajustar");
    direitaMensagem1.classList.add("ajustar");
    caixaTexto.value = "";
});


/* FUNCIONALIDADE DO BOTÃO DE DESENCRIPTAR*/
botaoDesencriptar.addEventListener("click", () => {
    const texto = caixaTexto.value.toLowerCase();
    if (texto != "") {
        function desencriptar(textoDigitado) {
            for (let i = 0; i < regra.length; i++) {
                if (textoDigitado.includes(regra[i][0])) {
                    textoDigitado = textoDigitado.replaceAll(regra[i][1], regra[i][0]);
                };
            };
            return textoDigitado
        };
    } else {
        alert("Nenhum texto foi digitado!");
    };
    const textoDesencriptado = desencriptar(texto);
    console.log(desencriptar(texto));
    direitaMensagem1.innerHTML = textoDesencriptado;

    imagemBoneco.style.display = "none";
    direitaMensagem2.style.display = "none";
    botaoCopiar.style.display = "block";
    direita.classList.add("ajustar");
    direitaMensagem1.classList.add("ajustar");
    caixaTexto.value = "";
});


/* FUNCIONALIDADE DO BOTÃO DE COPIAR*/
botaoCopiar.addEventListener("click", () => {
    let texto = direitaMensagem1.value;
    navigator.clipboard.writeText(texto);
    alert("Texto Copiado!")
    direitaMensagem1.innerHTML = "";
    imagemBoneco.style.display = "block";
    direitaMensagem2.style.display = "block";
    botaoCopiar.style.display = "none";
    direita.classList.remove("ajustar");
    direitaMensagem1.classList.remove("ajustar");
    caixaTexto.focus();
})







/*
 inputTexto = document.querySelector(".input");
const message = document.querySelector(".message");

function btnEncriptar() {
    const textEncriptada = encriptar(inputTexto.value);
    message.value = textEncriptada;
    message.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrixCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i=0; i <matrixCode.length; i++) {
        if (stringEncriptada.includes(matrixCode[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textDesencriptado = desencriptar(inputTexto.value);
    message.value = textDesencriptado;
    message.style.backgroundImage = "message";
}

function desencriptar(strDesencriptado) {
    let matrixCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    strDesencriptado = strDesencriptado.toLowerCase();
    for (let i=0; i < matrixCode.length; i++) {
        if(strDesencriptado.includes(matrixCode[i][1])) {
            strDesencriptado = strDesencriptado.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return strDesencriptado;
}

function btnCopy() {
    const copiedText = document.querySelector(".message");
    copiedText.select();
    navigator.clipboard.writeText(copiedText);
    copiedText.value = inputTexto.value;
    alert("Texto copiado, enviar para a área!");
    inputTexto.value = copiedText.value;
    copiedText.value = "";
    window.location.reload();
}

*/