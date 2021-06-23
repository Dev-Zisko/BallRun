//-----------------------------------------
//Variables
//-----------------------------------------

var imgFondo, imgOrbeRep, imgOrbeMov, imgEnemigo, imgTitulo, imgBoton, imgAgujero;
var ctx, canvas;
var titulo = {centrox: 130, centroy: 60, anchoimg: 350, altoimg: 150};
var boton = {centrox: 230, centroy: 500, anchoimg: 128, altoimg: 30};
var orbe = {centrox: 200, centroy: 140, anchoimg: 64, altoimg: 64};
var enemigo1 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: -3};
var enemigo2 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: -3};
var enemigo3 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: 3};
var enemigo4 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: 3};
var enemigo5 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 0, movy: 3};
var enemigo6 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 0, movy: -3};
var enemigo7 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: 0};
var enemigo8 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: 0};
var enemigo9 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 1, movy: 3};
var enemigo10 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -1, movy: 3};
var enemigo11 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 1, movy: -3};
var enemigo12 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -1, movy: -3};
var enemigo13 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: 1};
var enemigo14 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: 1};
var enemigo15 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: -1};
var enemigo16 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: -1};
var agujero = {centrox: 270, centroy: 250, anchoimg: 48, altoimg: 48};
var nivel = {puntuacion: 0, estado: false};
var radioenemigo = 12, orbeIni = 0, musica;
var idle = true, rightPressed = false, leftPressed = false, upPressed = false, downPressed = false;
var empezar = false, timerEmpezar = 120, posorbex1, posorbex2, posorbey1, posorbey2, spacebar = false;

//-----------------------------------------
//Funciones
//-----------------------------------------

function inicializar(){
	canvas = document.getElementById("canvas");
	musica = document.getElementById('music');
	ctx = canvas.getContext("2d");
	cargarImagenes();
}

function posInicial(){
	nivel.puntuacion = 0;
	if(orbeIni == 0){
		orbe = {centrox: 200, centroy: 140, anchoimg: 64, altoimg: 64};
		orbeIni = 1;
	}
	enemigo1 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: -3};
	enemigo2 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: -3};
	enemigo3 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: 3};
	enemigo4 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: 3};
	enemigo5 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 0, movy: 3};
	enemigo6 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 0, movy: -3};
	enemigo7 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: 0};
	enemigo8 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: 0};
	enemigo9 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 1, movy: 3};
	enemigo10 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -1, movy: 3};
	enemigo11 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 1, movy: -3};
	enemigo12 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -1, movy: -3};
	enemigo13 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: 1};
	enemigo14 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: 1};
	enemigo15 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: 3, movy: -1};
	enemigo16 = {centrox: 280, centroy: 250, anchoimg: 24, altoimg: 24, movx: -3, movy: -1};
}

function cargarImagenes(){
	imgOrbeRep = new Image();
	imgOrbeRep.src = 'resources/orberep.png';
	imgOrbeMov = new Image();
	imgOrbeMov.src = 'resources/orbemov.png';
	imgEnemigo = new Image();
	imgEnemigo.src = 'resources/enemigo.png';
	imgFondo = new Image();
	imgFondo.src = 'resources/fondo.png';
	imgTitulo = new Image();
	imgTitulo.src = 'resources/titulo.png';
	imgBoton = new Image();
	imgBoton.src = 'resources/boton.png';
	imgAgujero = new Image();
	imgAgujero.src = 'resources/agujero.png';
}

function borrarCanvas(){
	canvas.width = 600;
	canvas.height = 600;
}

function dibujarFondo(){
	ctx.drawImage(imgFondo, 0, 0, 600, 600, 0, 0, 600, 600);
}

function dibujarTitulo(){
	ctx.drawImage(imgTitulo, 0, 0, titulo.anchoimg, titulo.altoimg, titulo.centrox, 
		titulo.centroy, titulo.anchoimg, titulo.altoimg);
}

function dibujarBoton(){
	ctx.drawImage(imgBoton, 0, 0, boton.anchoimg, boton.altoimg, boton.centrox, 
		boton.centroy, boton.anchoimg, boton.altoimg);
}

function dibujarAgujero(){
	ctx.drawImage(imgAgujero, 0, 0, agujero.anchoimg, agujero.altoimg, agujero.centrox, 
		agujero.centroy, agujero.anchoimg, agujero.altoimg);
}

function dibujarOrbe(){
	if(idle){
		ctx.drawImage(imgOrbeRep, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
		orbe.centroy, orbe.anchoimg, orbe.altoimg);
	}
	if(rightPressed) {
		if(orbe.centrox >= 540){
			orbe.centrox += 0;
			ctx.drawImage(imgOrbeRep, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
			orbe.centroy, orbe.anchoimg, orbe.altoimg);
		}
		else{
			orbe.centrox += 15;
			ctx.drawImage(imgOrbeMov, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
			orbe.centroy, orbe.anchoimg, orbe.altoimg);
		}
    	
	}
	else if(leftPressed) {
    	if(orbe.centrox <= 0){
			orbe.centrox -= 0;
			ctx.drawImage(imgOrbeRep, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
			orbe.centroy, orbe.anchoimg, orbe.altoimg);
		}
		else{
			orbe.centrox -= 15;
			ctx.drawImage(imgOrbeMov, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
			orbe.centroy, orbe.anchoimg, orbe.altoimg);
		}
	}
	else if(upPressed) {
    	if(orbe.centroy <= 0){
			orbe.centroy -= 0;
			ctx.drawImage(imgOrbeRep, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
			orbe.centroy, orbe.anchoimg, orbe.altoimg);
		}
		else{
			orbe.centroy -= 15;
			ctx.drawImage(imgOrbeMov, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
			orbe.centroy, orbe.anchoimg, orbe.altoimg);
		}
	}
	else if(downPressed) {
    	if(orbe.centroy >= 540){
			orbe.centroy -= 0;
			ctx.drawImage(imgOrbeRep, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
			orbe.centroy, orbe.anchoimg, orbe.altoimg);
		}
		else{
			orbe.centroy += 15;
			ctx.drawImage(imgOrbeMov, 0, 0, orbe.anchoimg, orbe.altoimg, orbe.centrox, 
			orbe.centroy, orbe.anchoimg, orbe.altoimg);
		}
	}
}

function dibujarEnemigo(enemigo){
	ctx.drawImage(imgEnemigo, 0, 0, enemigo.anchoimg, enemigo.altoimg, enemigo.centrox, 
		enemigo.centroy, enemigo.anchoimg, enemigo.altoimg);
	if(enemigo.centrox + enemigo.movx > canvas.width-radioenemigo || 
		enemigo.centrox + enemigo.movx < radioenemigo) {
        enemigo.movx = -enemigo.movx;
    	if(enemigo.movx < 0){
    		enemigo.movx = enemigo.movx - 1;
    	}
    	else{
    		enemigo.movx = enemigo.movx + 1;
    	}
    	if(enemigo.movx >= 10){
    		enemigo.movx = 10;
    	}
    	else if(enemigo.movx <= -10){
    		enemigo.movx = -10;
    	}
    }
    if(enemigo.centroy + enemigo.movy > canvas.height-radioenemigo || 
    	enemigo.centroy + enemigo.movy < radioenemigo) {
        enemigo.movy = -enemigo.movy;
    	if(enemigo.movy < 0){
    		enemigo.movy = enemigo.movy - 1;
    	}
    	else{
    		enemigo.movy = enemigo.movy + 1;
    	}
    	if(enemigo.movy >= 10){
    		enemigo.movy = 10;
    	}
    	else if(enemigo.movy <= -10){
    		enemigo.movy = -10;
    	}
    }
    enemigo.centrox += enemigo.movx;
    enemigo.centroy += enemigo.movy;
}

function colision(enemigo){
    posorbex1 = orbe.centrox;
    posorbex2 = orbe.centrox + 40;
    posorbey1 = orbe.centroy - 10;
    posorbey2 = orbe.centroy + 52;
    if(enemigo.centrox >= posorbex1 && enemigo.centrox <= posorbex2 
    	&& enemigo.centroy >= posorbey1 && enemigo.centroy <= posorbey2){
    	nivel.estado = true;
    }
}

function score(){
	nivel.puntuacion += 1;
	ctx.font = "30px impact";
	ctx.fillStyle = '#6e31b7';
	ctx.fillText(nivel.puntuacion, 500, 30);
}

function gameOver(){
	ctx.font = "30px calibri";
	ctx.fillStyle = '#6e31b7';
	ctx.fillText("Puntuación", 230, 250);
	ctx.font = "30px impact";
	ctx.fillStyle = '#6e31b7';
	ctx.fillText(nivel.puntuacion, 280, 290);
	ctx.font = "30px cooperblack";
	ctx.fillStyle = 'white';
	ctx.fillText("GAME OVER", 210, 330);
	ctx.font = "30px calibri";
	ctx.fillStyle = 'white';
	ctx.fillText("Presione espacio para volver a jugar", 80, 580);
	orbeIni = 0;
}

function instrucciones(){
	ctx.font = "30px calibri";
	ctx.fillStyle = 'white';
	ctx.fillText("Mueve el orbe hasta el botón", 125, 580);
}

function comenzar(){
	if(orbe.centrox >= 210 && orbe.centrox <= 310 && orbe.centroy >= 480 && orbe.centroy <= 500){
		empezar = true;
	}
}

function contador(){
	ctx.font = "60px calibri";
	ctx.fillStyle = 'white';
	if(timerEmpezar >= 100){
		ctx.fillText("5", 280, 300);
		timerEmpezar -= 1;
	}
	else if(timerEmpezar >= 80 && timerEmpezar < 100){
		ctx.fillText("4", 280, 300);
		timerEmpezar -= 1;
	}
	else if(timerEmpezar >= 60 && timerEmpezar < 80){
		ctx.fillText("3", 280, 300);
		timerEmpezar -= 1;
	}
	else if(timerEmpezar >= 40 && timerEmpezar < 60){
		ctx.fillText("2", 280, 300);
		timerEmpezar -= 1;
	}
	else if(timerEmpezar >= 20 && timerEmpezar < 40){
		ctx.fillText("1", 280, 300);
		timerEmpezar -= 1;
	}
	else if(timerEmpezar > 0 && timerEmpezar < 20){
		ctx.fillText("LET'S GO", 200, 300);
		timerEmpezar -= 1;
	}
}

//-----------------------------------------
//Listeners de teclas
//-----------------------------------------

document.addEventListener("keydown", teclaPress, false);
document.addEventListener("keyup", teclaNoPress, false);

function teclaPress(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
        idle = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
        idle = false;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
        idle = false;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
        idle = false;
    }
    else if(e.keyCode == 32) {
        spacebar = true;
    }
}

function teclaNoPress(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
        idle = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
        idle = true;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
        idle = true;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
        idle = true;
    }
    else if(e.keyCode == 32) {
        spacebar = false;
    }
}

//-----------------------------------------
//Bucle principal
//-----------------------------------------
var FPS = 60;
setInterval(function(){
	principal();
}, 1200/FPS);

function principal(){

	if(empezar == false){
		musica.play();
		borrarCanvas();
		dibujarFondo();
		comenzar();
		dibujarTitulo();
		dibujarBoton();
		instrucciones();
		dibujarOrbe();
		posInicial();
	}
	else{
		if(timerEmpezar > 0){
			borrarCanvas();
			dibujarFondo();
			contador();
		}
		else{
			if(nivel.estado == false){
				borrarCanvas();
				dibujarFondo();
				dibujarAgujero();
				colision(enemigo1);
				dibujarEnemigo(enemigo1);
				if(nivel.puntuacion > 100){
					colision(enemigo2);
					dibujarEnemigo(enemigo2);
				}
				if(nivel.puntuacion > 300){
					colision(enemigo3);
					dibujarEnemigo(enemigo3);
				}
				if(nivel.puntuacion > 500){
					colision(enemigo4);
					dibujarEnemigo(enemigo4);
				}
				if(nivel.puntuacion > 700){
					colision(enemigo5);
					dibujarEnemigo(enemigo5);
				}
				if(nivel.puntuacion > 1000){
					colision(enemigo6);
					colision(enemigo7);
					dibujarEnemigo(enemigo6);
					dibujarEnemigo(enemigo7);
				}
				if(nivel.puntuacion > 1500){
					colision(enemigo8);
					colision(enemigo9);
					dibujarEnemigo(enemigo8);
					dibujarEnemigo(enemigo9);
				}
				if(nivel.puntuacion > 1800){
					colision(enemigo10);
					dibujarEnemigo(enemigo10);
				}
				if(nivel.puntuacion > 2000){
					colision(enemigo11);
					colision(enemigo12);
					colision(enemigo13);
					dibujarEnemigo(enemigo11);
					dibujarEnemigo(enemigo12);
					dibujarEnemigo(enemigo13);
				}
				if(nivel.puntuacion > 3000){
					colision(enemigo14);
					colision(enemigo15);
					colision(enemigo16);
					dibujarEnemigo(enemigo14);
					dibujarEnemigo(enemigo15);
					dibujarEnemigo(enemigo16);
				}
				dibujarOrbe();
				score();
			}
			else{
				borrarCanvas();
				dibujarFondo();
				gameOver();
				if(spacebar == true){
					empezar = false;
					nivel.estado = false;
					spacebar = false;
				}
			}			
		}		
	}
}