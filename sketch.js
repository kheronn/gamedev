let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

function preload(){
 
 imagemCenario = loadImage('imagens/floresta.png');
 imagemPersonagem = loadImage('imagens/correndo.png');
 frameRate(40);
// somDoJogo = loadSound('sons/musica_jogo.ogg');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
 // somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}

