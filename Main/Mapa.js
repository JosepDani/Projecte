
class Mapa {
	
	constructor() {
		this._zonaJoc = [new Punt(0,0), new Punt(0,0)];
	}

	set zonaJoc(zonaJoc) {
		this._zonaJoc = zonaJoc;
	}

	set zonaNoJoc(zonaNoJoc) {
		this._zonaNoJoc = zonaNoJoc;
	}

	set infin(infin) {
		this._infin = infin;
	}

	get zonaNoJoc() {
		return this._zonaNoJoc;
	}

	get zonaJoc() {
		return this._zonaJoc;
	}

	get infin() {
		return this._infin;
	}

	dibuixa() {
		ctxm.fillStyle = 'green';
		colorRectMapa(this._zonaJoc[0].x, this._zonaJoc[0].y, this._zonaJoc[1].x, this._zonaJoc[1].y);
		ctxm.fillStyle = 'black';
		for (var i = 0; i < this._zonaNoJoc.length - 1; i += 2) {
			colorRectMapa(this._zonaNoJoc[i].x, this._zonaNoJoc[i].y, this._zonaNoJoc[i+1].x, this._zonaNoJoc[i+1].y);
		}
		ctxm.fillStyle = '#22F515';
		for (var i = 0; i < 4; i += 2) {
			colorRectMapa(this._infin[i].x, this._infin[i].y, this._infin[i+1].x, this._infin[i+1].y);
		}
	}

}