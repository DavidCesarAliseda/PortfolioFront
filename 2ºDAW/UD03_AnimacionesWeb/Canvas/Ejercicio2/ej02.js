console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
let color = "red";
let n;


function aleatorio(inferior, superior) {
  numPosibilidades = superior - inferior;
  aleat = Math.random() * numPosibilidades;
  aleat = Math.floor(aleat);
  return parseInt(inferior) + aleat;
}

/*funcion generador de color*/
function generadorColor() {
  return "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
}

/* Definir el tamaño del canvas */
canvas.width = 300;
canvas.height = 100;

/* Obtener el contexto del canvas */
const ctx = canvas.getContext("2d");

/* Posición del elemento a animar */
let x = 0;
let y = 10;

/*Velocidad horizontal del objeto*/
let velx = 3;
let vely = 1;

/* Funcion principal de animacion */
function update() {
  console.log("test");
  /* Algoritmo de animacion:
    1) Actualizar posiciones de los elementos
     (física del movimiento rectilineo uniforme)*/

  /*Condicion de rebote en extremos verticales del canvas*/
  if (x < 0 || x >= (canvas.width - 20)) {
    velx = -velx;
    color = generadorColor();
  }

  /*Condición de rebote en extremos horizontales del canvas*/
  if (y <= 0 || y > canvas.height - 20) {
    vely = -vely;
    color = generadorColor();
  }

  /* Actualizar la posición*/
  x = x + velx;
  y = y + vely;

  /*2) Borrar el canvas */
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* 3) Dibujar los elementos visibles */
  ctx.beginPath();
  ctx.rect(x, y, 20, 20);

  /* Dibujar */
  ctx.fillStyle = color;

  /* Rellenar */
  ctx.fill();

  /* Dibujar el trazo */
  ctx.stroke();
  ctx.closePath();

  /* 4) Volver a ejecutar update cuando toque */
  requestAnimationFrame(update);
}

/* ¡Que empiece la función! */
update();