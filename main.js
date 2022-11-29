const character = document.getElementsByClassName("character")[0]; //pegue o primeiro elemento de classe character
const containerCharacter = document.getElementsByClassName("container-character")[0]; //pegue o primeiro elemento de classe container-character
//pegando a imagem de Jaypers

const VELOCITY = 10; //definindo a velocidade de Jaypers

const SCREEN_WIDTH = screen.width; //definindo largura da tela do game com base na do pc utilizado
const SCREEN_HEIGHT = screen.height; //definindo altura da tela do game com base na do pc utilizado

let xPosition = 500; //definindo a posição no eixo x em que Jaypers inicia sua movimentação
let yPosition = 300; //definindo a posição no eixo y em que Jaypers inicia sua movimentação

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]  //definindo as 4 setinhas como teclas disponíveis para movimentar Jaypers
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; //definindo as 4 direções que Jaypers poderá seguir a depender da tecla pressionada

window.addEventListener("keydown", (event) => { //adiciona um evento 'event' que será acionado quando alguma tecla for pressionada
    const key  = event.key //salva a tecla que foi pressionada

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { //realiza o teste abaixo para cada elemento do array keysAvaiable
        return currentKey === key; //se a tecla pressionada for igual a uma das teclas de keysAvaiable, retorna true. Caso não, retorna false
    })

    if(!keyPressedAvaiable) return; //caso tenha sido retornado false, retonar a função

    directions.forEach((direction) => { //para cada elemento do array das direções, chame a função
        if(character.classList.contains(direction)) character.classList.remove(direction); //se o elemento character contiver determinada classe de direção (uma das turns), remova essa classe
    })


    if(key === "ArrowUp"){ //se setinha pra cima estiver pressionada
        character.classList.add("turnUp"); //adicionando a classe turnUp ao elemento character, virando-o para cima
        yPosition -= VELOCITY; //reduza a coordenada y em 10, velocidade de Jaypers, movimentando-o para cima
    }

    if(key === "ArrowDown"){ //se setinha pra baixo estiver pressionada
        character.classList.add("turnDown"); //adicionando a classe turnDown ao elemento character, virando-o para baixo
        yPosition += VELOCITY; //aumente a coordenada y em 10, velocidade de Jaypers, movimentando-o para baixo
    }

    if(key === "ArrowLeft"){ //se setinha pra esquerda estiver pressionada
        character.classList.add("turnLeft"); //adicionando a classe turnLeft ao elemento character, virando-o para a esquerda
        xPosition -= VELOCITY; //reduza a coordenada x em 10, velocidade de Jaypers, movimentando-o para a esquerda
    }

    if(key === "ArrowRight"){ //se setinha pra direita estiver pressionada
        character.classList.add("turnRight"); //adicionando a classe turnRight ao elemento character, virando-o para a direita
        xPosition += VELOCITY; //aumente a coordenada x em 10, velocidade de Jaypers, movimentando-o para a direita
    }

    containerCharacter.style.top = `${yPosition}px`; //definindo a posição top (limite de cima do container) com base na coordenada y, usada para referenciar a posição vertical de Jaypers
    containerCharacter.style.left = `${xPosition}px` //definindo a posição left (limite à esquerda do container) com base na coordenada x, usada para referenciar a posição horizontal de Jaypers

});