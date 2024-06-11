function copiarArray(arrayOriginal) {
    let novoArray = [];
    for (let i = 0; i < arrayOriginal.length; i++) {
        novoArray.push(arrayOriginal[i]);
    }
    return novoArray;
}

function reiniciar() {
    habilitarBotaoVerificador();
    desabilitarBotaoReiniciar();
    resultado = [];
    verificar = [];
    let mensagemPalindromos = palavrasPalindromos.length > 1 ? "As palavras" : "A palavra";
    let verboPalindromos = palavrasPalindromos.length > 1 ? "são palíndromos" : "é palíndromo";
    
    let mensagemNaoPalindromos = palavrasNaoPalindromos.length > 1 ? "As palavras" : "A palavra";
    let verboNaoPalindromos = palavrasNaoPalindromos.length > 1 ? "não são palíndromos" : "não é palíndromo";
    
    document.getElementById("resultado").innerHTML = `${mensagemPalindromos} <strong style="color: red;">${palavrasPalindromos.map(palavra => palavra.toUpperCase()).join(', ')}</strong> ${verboPalindromos}.<br><br>${mensagemNaoPalindromos} <strong style="color: red;">${palavrasNaoPalindromos.map(palavra => palavra.toUpperCase()).join(', ')}</strong> ${verboNaoPalindromos}.`;

}


function habilitarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

function habilitarBotaoVerificador() {
    let botao = document.getElementById("btn-verificar");
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

function desabilitarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
}

function desabilitarBotaoVerificador() {
    let botao = document.getElementById("btn-verificar");
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
}

desabilitarBotaoReiniciar();
let palavrasPalindromos = [];
let palavrasNaoPalindromos = [];
let palavrasArmazenadas = [];
let resultado = [];
let verificar = [];

function palindromo(palavra) {
    let reversedWord = palavra.split("").reverse().join(""); // Inverte a palavra
    return palavra === reversedWord; // Retorna true se a palavra original for igual à palavra invertida
}

function verificador() {
    let palavra = document.getElementById("quantidade").value.trim(); 
    palavra = palavra.toLowerCase();
    if (!palavra) {
        alert("Por favor, insira uma palavra antes de verificar!");
        return; 
    }

    palavrasArmazenadas.push(palavra);
    resultado = [];
    verificar = [];

    for (let i = 0; i < palavra.length; i++) {
        resultado.push(palavra[i]);
    }
    console.log(resultado);

    let resultadoCopia = copiarArray(resultado);
    while (resultadoCopia.length > 0) {
        verificar.push(resultadoCopia.pop());
    }
    console.log(verificar);

    console.log(JSON.stringify(resultado));
    console.log(JSON.stringify(verificar));

    if (palindromo(palavra)) {
        palavrasPalindromos.push(palavra);
    } else {
        palavrasNaoPalindromos.push(palavra);
    }

    habilitarBotaoReiniciar();
    document.getElementById("quantidade").value = "";

    resultado = [];
    verificar = [];
    let mensagemPalindromos = palavrasPalindromos.length > 1 ? `As palavras` : "A palavra";
    let mensagemNaoPalindromos = palavrasNaoPalindromos.length > 1 ? "As palavras" : "A palavra";
    

    document.getElementById("resultado").innerHTML = `A palavra ${palavra.toUpperCase()} ${palindromo(palavra) ? "é um palíndromo" : "não é um palíndromo"}`;
}
