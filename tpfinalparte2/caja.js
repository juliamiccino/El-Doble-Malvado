class Juego {
  constructor() {
    this.estado = 0;
    this.portada = new Inicio();
    this.pantallaInstrucciones = new Instrucciones();
    this.pantallaCreditos = new Creditos();
    this.fondo = new Fondo();
    this.jugador = new Jugador(400, height/2-80);
    this.doble = new Doblemalvado(100, height/2-82.5);
    this.estructura = new Estructuras();
    this.pantallaReinicio = new Reiniciar();
    this.estructura = new Estructuras(700);
    this.estructuraAnterior = null;
    this.pantallaFinal = new Final();
  }

  dibujar() {
    if (this.estado === 0) {
      this.portada.dibujar();
      return;
    }

    if (this.estado === 2) {
      this.pantallaInstrucciones.dibujar();
      return;
    }

    if (this.estado === 3) {
      this.pantallaCreditos.dibujar();
      return;
    }

    if (this.estado === 1) {
      this.fondo.dibujarse();
      if (this.estructuraAnterior && this.estructuraAnterior.activa) {
        this.estructuraAnterior.dibujar();
      }

      if (this.estructura.activa) {
        this.estructura.dibujar();
      } else {
        this.estructuraAnterior = this.estructura;
        this.estructura = new Estructuras(700);
      }

      this.jugador.dibujar();
      this.doble.dibujar();
      if (keyIsDown(RIGHT_ARROW)) {
        this.fondo.moverDer();
      }
      this.colisionBala();
      if (this.fondo.llego) {
        this.pantallaFinal.dibujar();
      }
      if (this.jugador.estaMuerto()) {
        this.pantallaReinicio.dibujar();
      }
    }
  }

  colisionBala() {
    let b = this.doble.bala;
    if (b.activa === false) {
      return;
    }

    let bx = b.x - b.tam/2;
    let by = b.y - b.tam/2;
    let bTam = b.tam;

    let hx = this.jugador.hitX;
    let hy = this.jugador.hitY;
    let hitAl = this.jugador.hitAlto;

    let condicionLadoIzq = bx + bTam >= hx && bx < hx;
    let condicionVertical = by + bTam > hy && by < hy + hitAl;

    if (condicionLadoIzq && condicionVertical) {
      this.jugador.restarVida();
      b.activa = false;
    }
  }
}
