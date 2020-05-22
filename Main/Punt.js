
class Punt {
	
	constructor(x, y) {
		this._x = x;
		this._y = y;
	}

<<<<<<< HEAD:Quadrat.js
	dibuix() {
		colorRect(this._x, this._y, MIDAQUADRAT, MIDAQUADRAT);
	}

=======
>>>>>>> 2ca8a13e168c9d9f7aa9fe34eae4e5cc9355a612:Main/Punt.js
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