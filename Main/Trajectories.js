
class Circular extends Pilota {

  constructor(C, R, A, dA) { //C=centre, R=radi, A=angleinicial, dA=canvi en l'angle a cada iteracio
    this._C = C;
    this._R = R;
    this._A = A;
    this._dA = dA;
    super(new Punt(C.x + R*Math.cos(A), C.y + R*Math.sin(A)));
  }

  mou() {
    this._A = A + dA;
    this._p.x = C.x + R*Math.cos(A);
    this._p.y = C.y + R*Math.sin(A);
  }

}
