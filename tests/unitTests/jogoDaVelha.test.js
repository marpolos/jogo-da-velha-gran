import {beforeEach, describe, it} from 'node:test';
import assert from 'node:assert/strict';

import {
    IniciarTabuleiro,
    ExibirTabuleiro,
    validarJogada,
    jogador,
    TrocarJogador,
    ChecarVitoria
} from '../../js/jogoDaVelha.js';

beforeEach(() => {
    IniciarTabuleiro();
});

describe('Inicializa o tabuleiro', () => {
    it('Cria um tabuleiro vazio', () => {
        IniciarTabuleiro();
        let tabuleiro = ExibirTabuleiro();
        assert.equal(tabuleiro.match(/<td>/g).length, 9);
    });
});

describe('Validação de jogadas', () => {
    it('Aceita uma posição livre e troca o jogador', () => {
        assert.equal(validarJogada(0, 0), true);
        assert.equal(jogador, -1);
    });

    it('Recusa uma posição ocupada e mantém o jogador', () => {
        assert.equal(validarJogada(0, 0), true);
        assert.equal(validarJogada(0, 0), false);
        assert.equal(jogador, -1);
    });
});

describe('Troca de jogador', () => {
    it('Testa o mecanismo de troca do jogador', () => {
        assert.equal(jogador, 1);
        TrocarJogador();
        assert.equal(jogador, -1);
    });
});

describe('Checagem de vitória', () => {
    it('Detecta vitória na primeira linha', () => {
        validarJogada(0, 0);
        validarJogada(1, 0);
        validarJogada(0, 1);
        validarJogada(1, 1);
        validarJogada(0, 2);
        assert.equal(ChecarVitoria(), 1);
    });

    it('Detecta vitória na diagonal', () => {
        validarJogada(0, 0);
        validarJogada(0, 1);
        validarJogada(1, 1);
        validarJogada(0, 2);
        validarJogada(2, 2);
        assert.equal(ChecarVitoria(), 1);
    });

    it('Detecta vitória na segunda coluna', () => {
        validarJogada(0, 1);
        validarJogada(0, 0);
        validarJogada(1, 1);
        validarJogada(1, 0);
        validarJogada(2, 1);
        assert.equal(ChecarVitoria(), 1);
    });
});