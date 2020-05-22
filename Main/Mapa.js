
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

	dibuixa() {
		ctxm.fillStyle = 'green';
		colorRectMapa(this._zonaJoc[0].x, this._zonaJoc[0].y, this._zonaJoc[1].x, this._zonaJoc[1].y);
		ctxm.fillStyle = 'red';
		for (var i = 0; i < this._zonaNoJoc.length - 1; i += 2) {
			colorRectMapa(this._zonaNoJoc[i].x, this._zonaNoJoc[i].y, this._zonaNoJoc[i+1].x, this._zonaNoJoc[i+1].y);
		}
	}

}