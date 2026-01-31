class Doblemalvado {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidadDoble = 2.8;
    this.ancho = 110;
    this.alto = 165;
    this.posXOriginal = 100;
    this.dobleAvanza = false;
    this.bala = new Bala(this.x + 78, this.y + 46);
  }

  alcanzarJugador(){}

  dibujar() {
    image(imgDM1, this.x, this.y, this.ancho, this.alto);
    this.disparar();
  }

  disparar() {
    if (this.bala.activa) {
      this.bala.dibujar();
    } else {
      this.bala = new Bala(this.x + 78, this.y + 46);
    }
  }
}
