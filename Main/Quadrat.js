
class Quadrat {

	constructor() {
		this._p = new Punt(0,0);
	}

	dibuix() {
		colorRect(this._p.x, this._p.y, MIDAQUADRAT, MIDAQUADRAT);
	}

	set p(p) {
		this._p.x = p.x;
		this._p.y = p.y;
	}

	get p() {
		return this._p;
	}

}
