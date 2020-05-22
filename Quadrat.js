
class Quadrat {

	constructor(x, y) {
		this._x = x;
		this._y = y;
	}

	dibuix() {
		colorRect(this._x, this._y, MIDAQUADRAT, MIDAQUADRAT);
	}

	set x (x) {
		this._x = x;
	}

	set y (y) {
		this._y = y;
	}

	get x() {
		return this._x;
	}

	get y() {
		return this._y;
	}

}
