let caja;
let imagenFondo, imgPJ1, imgPJ2, imgDM1;

function preload() {
  imagenFondo = loadImage("data/fondo.jpeg");
  imgPJ1 = loadImage("data/pj1.png");
  imgPJ2 = loadImage("data/pj2.png");
  imgDM1 = loadImage("data/doblecorriendo.1.png");
  // imgDM2 = loadImage("");
}

function setup() {
  createCanvas(640, 480);
  caja = new Juego();
}

function draw() {
  background(50);
  caja.dibujar();
}

function mousePressed() {
  // PORTADA
  if (caja.estado === 0) {
    if (caja.portada.botonInicio.fueClickeado()) {
      caja.estado = 1;
    }
    if (caja.portada.botonInstrucciones.fueClickeado()) {
      caja.estado = 2;
    }
    if (caja.portada.botonCreditos.fueClickeado()) {
      caja.estado = 3;
    }
  }

  // INSTRUCCIONES
  if (caja.estado === 2) {
    if (caja.pantallaInstrucciones.fueClickeado()) {
      caja.estado = 1;
    }
  }

  // CRÉDITOS
  if (caja.estado === 3) {
    if (caja.pantallaCreditos.fueClickeado()) {
      caja.estado = 0;
    }
  }

  // REINICIO / FINAL
  if (caja.estado === 4) {
    if (caja.pantallaReinicio.fueClickeado()) {
      caja.estado = 0;
    }
  }
}
