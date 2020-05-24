
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

class Poligon extends Pilota {

  constructor(p, Q, V) {
    //p=punt inicial !HA D'ESTAR SOBRE LA PRIMERA ARESTA! (ENTRE Q[0] I Q[1])
    //Q=vector de cantonades (els vertexs), V=vector de velocitats. Els dos vectors de punts.
    //Es recomanable declarar V[i] algo com (Q[i+1]-Q[i])/iteracions que vols que trigui per anar entre els punts
    super(p);
    this._Q = Q;
    this._V = V;
    this._vel = V[0];
    this._t = 1; //target: cap a quin punt va la pilota. Ara va cap a Q[1].
  }

  mou() {
    console.log('hola');
    this._p.x += this._vel.x;
    this._p.y += this._vel.y;
    if (Math.abs(this._p.x - this._Q[this._t].x) < 4 && Math.abs(this._p.y - this._Q[this._t].y) < 4) { //miro bastament primer
      if ((this._p.x - this._Q[this._t].x)**2 + (this._p.y - this._Q[this._t].y)**2 < 4) { //faig operacions mes precises
        this._vel = this._V[this._t]; //la velocitat sempre va 1 t atrasada
        if (++this._t == this._Q.length) this._t = 0;
      }
    }
  }

}
