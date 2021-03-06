
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

	set pilotes(pilotes) {
		this._pilotes = pilotes;
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

	get pilotes() {
		this._pilotes = pilotes;
	}


	mouPilotes() {
		for (let i = 0; i < this._pilotes.length; i++) {
			this._pilotes[i].mou();
		}
	}

	mataQuadrat(p) { //p es el !CENTRE! del quadrat
		for (let i = 0; i < this._pilotes.length; i++) {
			if (this._pilotes[i].mata(p)) return true;
		}
		return false;
	}

	dibuixaPilotes() {
		for (let i = 0; i < this._pilotes.length; i++) {
			this._pilotes[i].dibuix();
		}
	}

	dibuixa() {
		ctxm.fillStyle = 'black';
		ctxm.fillRect(0,0,600,600);
		ctxm.fillStyle = 'green';
		ctxm.fillRect(this._zonaJoc[0].x, this._zonaJoc[0].y, this._zonaJoc[1].x, this._zonaJoc[1].y);
		ctxm.fillStyle = 'black';
		for (let i = 0; i < this._zonaNoJoc.length - 1; i += 2) {
			ctxm.fillRect(this._zonaNoJoc[i].x, this._zonaNoJoc[i].y, this._zonaNoJoc[i+1].x, this._zonaNoJoc[i+1].y);
		}
		ctxm.fillStyle = '#22F515';
		for (let i = 0; i < 4; i += 2) {
			ctxm.fillRect(this._infin[i].x, this._infin[i].y, this._infin[i+1].x, this._infin[i+1].y);
		}
	}

}
