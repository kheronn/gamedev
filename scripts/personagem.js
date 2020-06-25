class Personagem extends Animacao {


  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.frameAtual = 0
  }

  exibe() {
    image(this.imagem, 0, height - 135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270);
    this.anima();
  }

  pula() {

  }




}