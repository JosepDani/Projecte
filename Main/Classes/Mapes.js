
class Mapes {
	constructor() {
		{//mapa1
		this._mapa1 = new Mapa();
		this._mapa1.zonaJoc = [new Punt(50, 100), new Punt(500, 400)];
		this._mapa1.zonaNoJoc = [new Punt(50, 160), new Punt(400, 50),
								 new Punt(150, 250), new Punt(350, 200),
								 new Punt(500, 250), new Punt(50, 20)
								 ];
		this._mapa1.infin = [new Punt(50, 100), new Punt(50, 60),
					  		 new Punt(500, 270), new Punt(50, 60)];
		this._mapa1.pilotes = [new Poligon(new Punt(300, 200), [new Punt(300,200),
							new Punt(400,200), new Punt(400, 400), new Punt(300,400)], [new Punt(5,0),
							new Punt(0,5), new Punt(-5,0), new Punt(0,-5)]),
							new Poligon(new Punt(200, 200), [new Punt(200,200),
							new Punt(400,300), new Punt(10, 10), new Punt(500,500), new Punt(500, 10)],
							[new Punt((400-200)/100,(300-200)/100),
							new Punt((10-400)/300,(10-300)/300), new Punt((500-10)/100,(500-10)/100),
							new Punt(0,(10-500)/50), new Punt((200-500)/50,(200-10)/50)])]
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
		this._mapa2.pilotes = [new Circular(new Punt(325, 300), 60, 0, 0.02),
							   new Circular(new Punt(325, 300), 60, 0.785, 0.02),
							   new Circular(new Punt(325, 300), 60, 1.57, 0.02),
							   new Circular(new Punt(325, 300), 60, 2.355, 0.02),
							   new Circular(new Punt(325, 300), 60, 3.14, 0.02),
							   new Circular(new Punt(325, 300), 60, 3.925, 0.02),
							   new Circular(new Punt(325, 300), 60, 4.712, 0.02),
							   new Circular(new Punt(325, 300), 60, 5.495, 0.02),]
		}
		{
		this._mapa3 = new Mapa();
		this._mapa3.zonaJoc = [new Punt(125, 125), new Punt(350, 350)];
		this._mapa3.zonaNoJoc = [new Punt(125, 125), new Punt(70, 175),
								 new Punt(125, 370), new Punt(70, 105),
								 new Punt(195, 125), new Punt(105, 70),
								 new Punt(370, 125), new Punt(105, 70),
								 new Punt(195, 195), new Punt(35, 70),
								 new Punt(230, 195), new Punt(35, 35),
								 new Punt(195, 405), new Punt(35, 70),
								 new Punt(230, 440), new Punt(35, 35),
								 new Punt(440, 195), new Punt(35, 70),
								 new Punt(405, 195), new Punt(35, 35),
								 new Punt(440, 405), new Punt(35, 70),
								 new Punt(405, 440), new Punt(35, 35)
								 ];
		this._mapa3.infin = [new Punt(125, 300), new Punt(70, 70),
					  		 new Punt(300, 125), new Punt(70, 70)];
		let pilotes = [];
		for(let i = 0; i < 10; i++) {
			if (i != 5 && i != 4) pilotes.push(new Circular(new Punt(335, 335), 121.5 - i*135/5, 0, -0.02));
		}
		for(let i = 0; i < 10; i++) {
			if (i != 5 && i != 4) pilotes.push(new Circular(new Punt(335, 335), 121.5 - i*135/5, 0.7853, -0.02));
		}
		for(let i = 0; i < 10; i++) {
			if (i != 5 && i != 4) pilotes.push(new Circular(new Punt(335, 335), 121.5 - i*135/5, 1.5707, -0.02));
		}
		for(let i = 0; i < 10; i++) {
			if (i != 5 && i != 4) pilotes.push(new Circular(new Punt(335, 335), 121.5 - i*135/5, 2.3561, -0.02));
		}
		this._mapa3.pilotes = pilotes;
		}

		this._mapes = [this._mapa1, this._mapa2, this._mapa3];

	}

	mapa(num){
		return this._mapes[num - 1];
	}

}
