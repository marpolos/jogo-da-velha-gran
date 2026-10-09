# jogo-da-velha-gran
Tic tac toe produzido no projeto de imersão da graduação de análise e desenvolvimento de sistemas

Estamos utilizando o nginx para containerizar esse projeto pois é um projeto estático simples.

## Para criar o container desse projeto utilize os comandos:
docker build -t jogo-da-velha .
docker run --rm -p 8080:80 jogo-da-velha

## Após subir seu container acesse por:
http://localhost:8080/jogoDaVelha.html