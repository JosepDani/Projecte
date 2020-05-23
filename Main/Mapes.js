
class Mapes {
	constructor() {
		{//mapa1
		this._mapa1 = new Mapa();
		this._mapa1.zonaJoc = [new Punt(50, 100), new Punt(500, 400)];
		this._mapa1.zonaNoJoc = [new Punt(50, 160), new Punt(400, 50),
								 new Punt(150, 250), new Punt(350, 200),
								 new Punt(500, 250), new Punt(50, 20)];
		this._mapa1.infin = [new Punt(50, 100), new Punt(50, 60),
					  		 new Punt(500, 270), new Punt(50, 60)];
		this._mapa1.pilotes = [new Pilota(new Punt(300, 300)),
						new Pilota(new Punt(400, 400))]
		}
		{//mapa2
		this._mapa2 = new Mapa();
		this._mapa2.zonaJoc = [new Punt(50, 200), new Punt(500, 200)];
		//Aqui dibuixo les parts negres dins de la zonaJoc
		this._mapa2.zonaNoJoc = [new Punt(50, 200), new Punt(50, 70),
						  new Punt(50, 330), new Punt(50, 70),
						  new Punt(200, 200), new Punt(50, 150),
						  new Punt(400, 250), new Punt(50, 150),
						  new Punt(500, 200), new Punt(50, 70),
						  new Punt(500, 330), new Punt(50, 70),
						  new Punt(130, 240), new Punt(20, 20)];
		this._mapa2.infin = [new Punt(50, 270), new Punt(50, 60),
					  		 new Punt(500, 270), new Punt(50, 60)];
		}

		this._mapes = [this._mapa1, this._mapa2];

	}

	mapa(num){
		return this._mapes[num - 1];
	}

}
