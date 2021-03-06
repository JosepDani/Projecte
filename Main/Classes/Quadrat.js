
class Quadrat {

	constructor(posX, posY) {
		this._p = new Punt(posX, posY);
	}

	dibuix() {
		ctxh.clearRect(this._p.x - MIDAQUADRAT/2, this._p.y - MIDAQUADRAT/2, 30, 30);
		ctxh.fillRect(this._p.x, this._p.y, MIDAQUADRAT + 2, MIDAQUADRAT + 2);
		ctxh.fillStyle = 'yellow';
		ctxh.fillRect(this._p.x + 1, this._p.y + 1, MIDAQUADRAT, MIDAQUADRAT);
		ctxh.fillStyle = 'red';
	}

	set p(p) {
		this._p.x = p.x;
		this._p.y = p.y;
	}

	get p() {
		return this._p;
	}

	//DE = dalt esquerra and so on
	//Vaig mirant cada cantonada si toca i a partir d'aixo decideixo si el quadrat es mou o no
	//No et recomano que intentis entendre el codi, es un pal, nomes si vols fer algun canvi
	estaTocantDE(mapa, DELTAPOS, MIDAQUADRAT) {
		if (this._p.y - DELTAPOS < mapa.zonaJoc[0].y
			|| this._p.x - DELTAPOS < mapa.zonaJoc[0].x) return true;
		for (let i = 0; i < mapa.zonaNoJoc.length - 1; i += 2) {
			if (this._p.x - DELTAPOS < mapa.zonaNoJoc[i].x + mapa.zonaNoJoc[i + 1].x
				&& this._p.y - DELTAPOS < mapa.zonaNoJoc[i].y + mapa.zonaNoJoc[i + 1].y
				&& this._p.x + MIDAQUADRAT > mapa.zonaNoJoc[i].x
				&& this._p.y + MIDAQUADRAT > mapa.zonaNoJoc[i].y) return true;
		}
		return false;
	}

	estaTocantDD(mapa, DELTAPOS, MIDAQUADRAT) {
		if(this._p.x + MIDAQUADRAT + DELTAPOS > mapa.zonaJoc[0].x + mapa.zonaJoc[1].x
			|| this._p.y - DELTAPOS < mapa.zonaJoc[0].y) return true;
		for (let i = 0; i < mapa.zonaNoJoc.length - 1; i += 2) {
			if (this._p.x + DELTAPOS + MIDAQUADRAT > mapa.zonaNoJoc[i].x
				&& this._p.y - DELTAPOS < mapa.zonaNoJoc[i].y + mapa.zonaNoJoc[i + 1].y
				&& this._p.y + MIDAQUADRAT > mapa.zonaNoJoc[i].y
				&& this._p.x < mapa.zonaNoJoc[i].x + mapa.zonaNoJoc[i + 1].x) return true;
		}
		return false;
	}

	estaTocantBE(mapa, DELTAPOS, MIDAQUADRAT) {
		if (this._p.x - DELTAPOS < mapa.zonaJoc[0].x
			|| this._p.y + MIDAQUADRAT + DELTAPOS > mapa.zonaJoc[0].y + mapa.zonaJoc[1].y) return true;
		for (let i = 0; i < mapa.zonaNoJoc.length - 1; i += 2) {
			if (this._p.x - DELTAPOS < mapa.zonaNoJoc[i].x + mapa.zonaNoJoc[i + 1].x
				&& this._p.y + DELTAPOS + MIDAQUADRAT > mapa.zonaNoJoc[i].y
				&& this._p.x + MIDAQUADRAT > mapa.zonaNoJoc[i].x
				&& this._p.y < mapa.zonaNoJoc[i].y + mapa.zonaNoJoc[i + 1].y
				) return true;
		}
		return false;
	}

	estaTocantBD(mapa, DELTAPOS, MIDAQUADRAT) {
		if (this._p.x + MIDAQUADRAT + DELTAPOS > mapa.zonaJoc[0].x + mapa.zonaJoc[1].x
			|| this._p.y + MIDAQUADRAT + DELTAPOS > mapa.zonaJoc[0].y + mapa.zonaJoc[1].y) return true;
		for (let i = 0; i < mapa.zonaNoJoc.length - 1; i += 2) {
			if (this._p.x + DELTAPOS + MIDAQUADRAT > mapa.zonaNoJoc[i].x
				&& this._p.y + DELTAPOS + MIDAQUADRAT > mapa.zonaNoJoc[i].y
				&& this._p.x < mapa.zonaNoJoc[i].x + mapa.zonaNoJoc[i + 1].x
				&& this._p.y < mapa.zonaNoJoc[i].y + mapa.zonaNoJoc[i + 1].y) return true;
		}
		return false;
	}

}
