// DOM, campos, botões, mensagens e renderização

import * as JogoDaVelha from './jogoDaVelha.js';
let board;
let tabuleiro;

let aviso;
let linha;
let coluna;
let alerta;

function Iniciar() {
    board = document.getElementById("board");
    aviso = document.getElementById("aviso");
    alerta = document.getElementById("alerta");
    
    JogoDaVelha.IniciarTabuleiro();

    aviso.innerHTML = "Vez do jogador " + (JogoDaVelha.jogador === 1 ? 1 : 2);
    console.log("Iniciar");
    Exibir();
}

function Exibir() {
    tabuleiro = JogoDaVelha.ExibirTabuleiro();
    board.innerHTML = tabuleiro;
    console.log(tabuleiro);
    console.table(tabuleiro);
}

function ReiniciarLinhasEColunas() {
    document.getElementById("linha").value = 1;
    document.getElementById("coluna").value = 1;
}

function Jogar() {
    alerta.innerHTML = "";
    
    linha = document.getElementById("linha").value - 1;
    coluna = document.getElementById("coluna").value - 1;
    
    var validaJogada = JogoDaVelha.validarJogada(linha, coluna);
    if (validaJogada) {
        Exibir();
        var jogadorVencedor = JogoDaVelha.ChecarVitoria();
        if (jogadorVencedor !== 0) {
            EncerrarPartida(jogadorVencedor);
        } else {
            aviso.innerHTML = "Vez do jogador " + (JogoDaVelha.jogador === 1 ? 1 : 2);
        }
    } else {
        alerta.innerHTML = "Posição inválida ou já ocupada!";
    }
}

function EncerrarPartida(jogadorVencedor){
    aviso.innerHTML = "Jogador " + (jogadorVencedor === 1 ? 1 : 2) + " venceu!";
    DesabilitarJogar()
}

function Resetar() {
    document.getElementById("jogar").disabled = false;
    document.getElementById("restart").disabled = true;
    alerta.innerHTML = "";

    ReiniciarLinhasEColunas();
    Iniciar();
}

function DesabilitarJogar(){
    document.getElementById("jogar").disabled = true;
    document.getElementById("restart").disabled = false;
}

document.addEventListener("DOMContentLoaded", () => {
    Iniciar();

    document.querySelector(".move-form").addEventListener("submit", (event) => {
        event.preventDefault();
        Jogar();
    });

    document.getElementById("restart").addEventListener("click", Resetar);
});