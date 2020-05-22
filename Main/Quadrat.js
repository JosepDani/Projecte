
class Quadrat {

	constructor() {
		this._p = new Punt(0,0);
	}

	dibuix() {
		ctxh.fillStyle = 'red';
		ctxh.clearRect(this._p.x - MIDAQUADRAT/2, this._p.y - MIDAQUADRAT/2, 30, 30);
		colorRectHeroi(this._p.x, this._p.y, MIDAQUADRAT, MIDAQUADRAT);
	}

	set p(p) {
		this._p.x = p.x;
		this._p.y = p.y;
	}

	get p() {
		return this._p;
	}

}
