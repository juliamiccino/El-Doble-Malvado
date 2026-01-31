class Creditos {
  constructor() {
    this.botonVolver = new Boton(height - 100);
  }

  dibujar() {
    rectMode(CENTER);
    fill(0, 150);
    rect(width/2, height/2, 640, 480);
    fill(0, 210);
    rect(width/2, height/2, 320, 300);

    fill(255);
    textAlign(CENTER, TOP);
    textSize(18);
    text(
      "El Doble Malvado\n\n" +
      "Juego creado por:\n" +
      "Matías Arias\n\n" +
      "Inspirado en el cuento\n" +
      "\"Marionetas S.A.\" de Ray Bradbury",
      width/2,
      height/2 - 120
    );

    this.botonVolver.boton(4);
  }

  fueClickeado() {
    return this.botonVolver.fueClickeado();
  }
}
