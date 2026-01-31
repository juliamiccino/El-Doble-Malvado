class Final {
  constructor() {
    this.reiniciar = new Boton(200);
    this.botonCreditos = new Boton(270);
  }
  dibujar() {
    this.estetica();
    this.reiniciar.boton(3);
    this.botonCreditos.boton(2);
  }
  estetica() {
    fill(0, 150);
    rect(width/2, height/2, 640, 480);
    rectMode(CENTER);
    fill(0, 210);
    rect(width/2, 255, 305, 373);
  }
  fueClickeado() {
    if (this.reiniciar.fueClickeado()) return true;
    if (this.botonCreditos.fueClickeado()) return true;
    return false;
  }
}
