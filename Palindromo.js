// Função para reiniciar o estado da aplicação
function reiniciar() {
    habilitarBotaoVerificador();
    desabilitarBotaoReiniciar();
    palavrasPalindromos = [];
    palavrasNaoPalindromos = [];
    palavrasArmazenadas = [];
    resultado = [];
    verificar = [];
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("quantidade").value = "";
}

// Função para habilitar o botão de reiniciar
function habilitarBotaoReiniciar() {
    alterarEstadoBotao("btn-reiniciar", true);
}

// Função para desabilitar o botão de reiniciar
function desabilitarBotaoReiniciar() {
    alterarEstadoBotao("btn-reiniciar", false);
}

// Função para habilitar o botão de verificar
function habilitarBotaoVerificador() {
    alterarEstadoBotao("btn-verificar", true);
}

// Função para desabilitar o botão de verificar
function desabilitarBotaoVerificador() {
    alterarEstadoBotao("btn-verificar", false);
}

// Função para alterar o estado de um botão
function alterarEstadoBotao(idBotao, habilitado) {
    let botao = document.getElementById(idBotao);
    botao.classList.toggle("container__botao-desabilitado", !habilitado);
    botao.classList.toggle("container__botao", habilitado);
}

// Desabilita o botão de reiniciar inicialmente
desabilitarBotaoReiniciar();

// Variáveis globais
let palavrasPalindromos = [];
let palavrasNaoPalindromos = [];
let palavrasArmazenadas = [];
let resultado = [];
let verificar = [];

// Função para verificar se uma palavra é um palíndromo
function palindromo(palavra) {
    let reversedWord = palavra.split("").reverse().join(""); // Inverte a palavra
    return palavra === reversedWord; // Retorna true se a palavra original for igual à palavra invertida
}

// Função para verificar a palavra inserida
function verificador() {
    let palavra = document.getElementById("quantidade").value.trim().toLowerCase();
    if (!palavra) {
        alert("Por favor, insira uma palavra antes de verificar!");
        return;
    }
    if (palavrasArmazenadas.includes(palavra)) {
        alert("Esta palavra já foi inserida!");
        return;
    }

    palavrasArmazenadas.push(palavra);
    resultado = [];
    verificar = [];

    for (let i = 0; i < palavra.length; i++) {
        resultado.push(palavra[i]);
    }

    let resultadoCopia = [...resultado]; // Copia do array usando spread operator
    while (resultadoCopia.length > 0) {
        verificar.push(resultadoCopia.pop());
    }

    if (palindromo(palavra)) {
        palavrasPalindromos.push(palavra);
        document.getElementById("resultado").innerHTML = `A palavra ${palavra.toUpperCase()} é um palíndromo.`;
    } else {
        palavrasNaoPalindromos.push(palavra);
        document.getElementById("resultado").innerHTML = `A palavra ${palavra.toUpperCase()} não é um palíndromo.`;
    }

    habilitarBotaoReiniciar();
    document.getElementById("quantidade").value = "";
}

// Função para mostrar resultado total e reiniciar
function resultadoTotal() {
    let mensagemPalindromos = palavrasPalindromos.length > 1 ? "As palavras" : "A palavra";
    let verboPalindromos = palavrasPalindromos.length > 1 ? "são palíndromos" : "é palíndromo";

    let mensagemNaoPalindromos = palavrasNaoPalindromos.length > 1 ? "As palavras" : "A palavra";
    let verboNaoPalindromos = palavrasNaoPalindromos.length > 1 ? "não são palíndromos" : "não é palíndromo";

    document.getElementById("resultado").innerHTML = `${mensagemPalindromos} <strong style="color: red;">${palavrasPalindromos.map(palavra => palavra.toUpperCase()).join(', ')}</strong> ${verboPalindromos}.<br><br>${mensagemNaoPalindromos} <strong style="color: red;">${palavrasNaoPalindromos.map(palavra => palavra.toUpperCase()).join(', ')}</strong> ${verboNaoPalindromos}.`;

    reiniciar(); // Reinicia o estado após mostrar o resultado
}

// Evento de clique para reiniciar
document.getElementById("btn-reiniciar").addEventListener("click", reiniciar);

// Evento de clique para mostrar resultado total
document.getElementById("btn-resultado-total").addEventListener("click", resultadoTotal);
