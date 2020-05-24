
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

	mata(p) { //p es el !CENTRE! del quadrat
		if ((p.x-this._p.x)**2 + (p.y-this._p.y)**2 < RMATAR) {
			return true;
		}
		return false;
	}

}
