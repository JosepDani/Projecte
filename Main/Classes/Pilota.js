
class Pilota {

	constructor(p) {
		this._p = p;
	}

	set p(p) {
		this._p = p;
	}

	dibuix() {
		drawCircle(this._p.x, this._p.y, RPILOTES, 'white');
	}

	mata(p) { //p es el !CENTRE! del quadrat
		if (Math.abs(p.x - this._p.x) < RMATAR && Math.abs(p.y - this._p.y) < RMATAR) { //miro bastament primer
			if ((p.x-this._p.x)**2 + (p.y-this._p.y)**2 < RMATAR) { //faig calcul mes precis
				return true;
			}
		}
		return false;
	}

}
