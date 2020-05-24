
var WIDTH = 600;
var HEIGHT = 600;
var MIDAQUADRAT = 15;
var RQUADRAT = 9; //Mes o menys la mitjana entre el centre i una cantonada i el centre i un costat
var RPILOTES = 5;
var RMATAR = (RQUADRAT + RPILOTES)**2; //potser es innecessari pero facilita els calculs
var DELTAPOS = 2; //Augment de la posicio cada interval si esta clicant
var backgroundCanvas;
var mapaCanvas;
var heroiCanvas;
var pilotesCanvas;
var ctxb; //context del background
var ctxm; //context del mapa
var ctxh; //context de l'heroi
var ctxp; //context pilotes
var heroi;
var mapes;
var keyState = {};
var mapa = 1;
var i = 0;
var fin;

window.addEventListener('keydown',function(e){
	keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
 		keyState[e.keyCode || e.which] = false;
},true);

class Controlador {

	constructor() {
	}

	mouTot() {
		this.mouQuadrat();
		mapes.mapa(mapa).mouPilotes();
		this.final();
	}

  	//MOU QUADRAT

	//Sembla molt farragos pero lunic que mira es si toquen les cantonades
	mouQuadrat() {
		if (keyState[37] //esquerra
			&& (!heroi.estaTocantDE(mapes.mapa(mapa), DELTAPOS, MIDAQUADRAT)
			|| !heroi.estaTocantBE(mapes.mapa(mapa), DELTAPOS, MIDAQUADRAT)))
			heroi.p.x = heroi.p.x - DELTAPOS;
		if (keyState[38] //dalt
			&& (!heroi.estaTocantDD(mapes.mapa(mapa), DELTAPOS, MIDAQUADRAT)
			|| !heroi.estaTocantDE(mapes.mapa(mapa), DELTAPOS, MIDAQUADRAT)))
			heroi.p.y = heroi.p.y - DELTAPOS;
		if (keyState[39] //dreta
			&& (!heroi.estaTocantDD(mapes.mapa(mapa), DELTAPOS, MIDAQUADRAT)
			|| !heroi.estaTocantBD(mapes.mapa(mapa), DELTAPOS, MIDAQUADRAT)))
			heroi.p.x = heroi.p.x + DELTAPOS;
		if (keyState[40] //baix
			&& (!heroi.estaTocantBD(mapes.mapa(mapa), DELTAPOS, MIDAQUADRAT)
			|| !heroi.estaTocantBE(mapes.mapa(mapa), DELTAPOS, MIDAQUADRAT)))
			heroi.p.y = heroi.p.y + DELTAPOS;
		//console.log(heroi.estaTocantDE(mapa,DELTAPOS,MIDAQUADRAT));
	}

	//DIBUIX DEL CANVAS
	drawEverything() {
		heroi.dibuix();
		ctxp.clearRect(0, 0, 600, 600);
		mapes.mapa(mapa).dibuixaPilotes();
	}

	mata() {
		let p = new Punt(heroi.p.x + MIDAQUADRAT/2, heroi.p.y + MIDAQUADRAT/2);
		if (mapes.mapa(mapa).mataQuadrat(p)) this.mapaInicialitza();
	}

	drawCircle(centerX, centerY, radius, color) {
	    ctxp.fillStyle = color;
	    ctxp.beginPath();
	    ctxp.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	    ctxp.fill();
	}

	//INICIALITZACIO DE COSES
	inicialitza() {
		console.log("hola");
		{//background
			backgroundCanvas = document.getElementById('backgroundCanvas');
			ctxb = backgroundCanvas.getContext('2d');
			const backgroundimg = new Image();
			backgroundimg.src = "https://images.designtrends.com/wp-content/uploads/2016/04/11094936/White-and-Grey-Grid-Pattern.jpg";
			backgroundimg.onload = function() {ctxb.drawImage(backgroundimg,0,0,backgroundCanvas.width,backgroundCanvas.height);}
			//es necessita el onload pq si no a vegades s'executa el drawImage() sense que es carregui
			//la imatge i llavors no surt res pq no es torna a cridar drawImage()
		}
		{//Heroi
			heroiCanvas = document.getElementById('heroiCanvas');
			ctxh = heroiCanvas.getContext('2d');
			ctxh.fillStyle = 'red'; //el fillStyle es defineix un cop i aixi no cal fer-ho a cada iteracio (no canvia)
		}
		{//Pilota
			pilotaCanvas = document.getElementById('pilotaCanvas');
			ctxp = pilotaCanvas.getContext('2d');
		}
		{//mapa
			mapaCanvas = document.getElementById('mapaCanvas');
			ctxm = mapaCanvas.getContext('2d');
			ctxm.fillStyle = 'black'; //aixo es del context del mapa pq vegis com NO es borra
			ctxm.fillRect(0,0,600,600);
			this.mapaInicialitza();
		}

	}

	mapaInicialitza() {
		i = 0;
		mapes = new Mapes();
		ctxp.clearRect(0, 0, 600, 600);
		ctxm.clearRect(0, 0, 600, 600);
		ctxh.clearRect(0, 0, 600, 600);
		let x = mapes.mapa(mapa).infin[0].x + (mapes.mapa(mapa).infin[1].x/2) - MIDAQUADRAT/2;
		let y = mapes.mapa(mapa).infin[0].y + (mapes.mapa(mapa).infin[1].y)/2 - MIDAQUADRAT/2;
		heroi = new Quadrat(x, y);
	 	mapes.mapa(mapa).dibuixa();
		fin = false;
		console.log(mapa);
	}

	final() {
		if (heroi.p.x > mapes.mapa(mapa).infin[2].x && heroi.p.y > mapes.mapa(mapa).infin[2].y
			&& heroi.p.x < mapes.mapa(mapa).infin[2].x + mapes.mapa(mapa).infin[3].x
			&& heroi.p.y < mapes.mapa(mapa).infin[2].y + mapes.mapa(mapa).infin[3].y) fin = true;

		if (fin) {
			i++;
			if (i > 100) {
				mapa++;
				fin = false;
				this.mapaInicialitza();
			}
		}

	}
}