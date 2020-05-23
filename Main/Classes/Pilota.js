
class Pilota {

	constructor(p) {
		this._p = p;
	}

	set p(p) {
		this._p = p;
	}

	mou() {
		//creare una subclasse per cada tipus de moviment i el mou sera un metode de la subclasse
	}

	dibuix() {
		ctxp.clearRect(this._p.x - RPILOTES/2, this._p.y - RPILOTES/2, 30, 30);
		drawCircle(this._p.x, this._p.y, RPILOTES, 'white');
	}

}
