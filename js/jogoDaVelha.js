// Tabuleiro, jogadas válidas, vitória, empate e alternância de jogador
let tabuleiro;

export let jogador = 1;

export function IniciarTabuleiro() {
    tabuleiro = Array
    .from({ length: 3 }, 
        () => Array(3)
        .fill(0));
    jogador = 1;
}

export function ExibirTabuleiro() {
    let table = '<table cellPadding="50" border="1">';
    for(let i = 0; i<3; i++){
        table += '<tr>';
        for(let j = 0; j < 3; j ++){
            let marcador;
            switch(tabuleiro[i][j]){
                case 1:
                    marcador = 'X';
                    break;
                case -1:
                    marcador = 'O';
                    break;
                default:
                    marcador = '';
            }
            table += '<td>' + marcador + '</td>';
        }
        table += '</tr>';
    }
    
    table += '</table>';
    return table;
}

export function validarJogada(linha, coluna) {
    if (!Number.isInteger(linha) || !Number.isInteger(coluna) ||
        linha < 0 || linha > 2 || coluna < 0 || coluna > 2 ||
        tabuleiro[linha][coluna] !== 0) {
        return false;
    }

    tabuleiro[linha][coluna] = jogador;
    TrocarJogador();
    return true;
}

export function ChecarVitoria() {
    // linhas
    for(let i = 0; i <= 2; i++){
        const somaLinha = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];
        if(somaLinha === 3 || somaLinha === -3){
            return somaLinha / 3;
        }
    }

    // colunas
    for(let j = 0; j <= 2; j++){
        const somaColuna = tabuleiro[0][j] + tabuleiro[1][j] + tabuleiro[2][j];
        if(somaColuna === 3 || somaColuna === -3){
            return somaColuna / 3;
        }
    }

    // diagonais
    let somaDiagonal1 = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
    let somaDiagonal2 = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];

    if(somaDiagonal1 === 3 || somaDiagonal1 === -3){
        return somaDiagonal1 / 3;
    }
    if(somaDiagonal2 === 3 || somaDiagonal2 === -3){
        return somaDiagonal2 / 3;
    }

    return 0;
}

export function TrocarJogador() {
    console.log("Jogador: " + jogador);
    jogador = jogador === 1 ? -1 : 1;
}
