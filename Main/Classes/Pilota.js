
class Pilota {

	constructor(p) {
		this._p = p;
	}

	set p(p) {
		this._p = p;
	}

	dibuix() {
		ctxp.clearRect(this._p.x - 2*RPILOTES, this._p.y - 2*RPILOTES, 30, 30);
		drawCircle(this._p.x, this._p.y, RPILOTES, 'white');
	}

	detecta() {
		//aixo sera un metode per veure si toca el quadrat, que funciona per totes les subclasses
	}

	mou() {
		//aixo en realitat hauria de ser un metode de la subclasse, per cada subclasse sera diferent
	}

}
