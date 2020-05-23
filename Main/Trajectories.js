
class Circular extends Pilota {

  constructor(C, R, A, dA) { //C=centre, R=radi, A=angleinicial, dA=canvi en l'angle a cada iteracio
    super(new Punt(C.x + R*Math.cos(A), C.y + R*Math.sin(A)));
    this._C = C;
    this._R = R;
    this._A = A;
    this._dA = dA;
  }

  mou() {
    this._A = this._A + this._dA;
    this._p.x = this._C.x + this._R*Math.cos(this._A);
    this._p.y = this._C.y + this._R*Math.sin(this._A);
  }

}
