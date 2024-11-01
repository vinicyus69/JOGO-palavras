let palavra;

function setup() {
    createCanvas(400, 400);
   palavra=palavraAleatoria();
}

function palavraAleatoria(){
  palavras=["GJHFHGFGF", "GGIB", "não lembro", "essa foi goti"];
  return random(palavras);
}

function inicializaCores(){
  background("white");
    fill("purple");
      textSize(60);
      textAlign(CENTER,CENTER);
}

function palavraParcial(minimo,maximo){
  let quantidade= map(mouseX,minimo,maximo,1,palavra.length);
    let parcial=palavra.substring(0,quantidade);
  return parcial;
}

  function draw() {
  inicializaCores();  
   let texto = palavraParcial(0,width);

  text(texto,200, 200);
    
   /* if(mouseX<50){
      let palavra="E"
      text(palavra,200,200);
 } else if (mouseX < 100){
   let palavra="E o"
   text(palavra,200,200);
 } else if (mouseX < 150){
   let palavra="E o f"
   text(palavra,200,200);
 } else if (mouseX < 200){
   let palavra="E o fo"
   text(palavra,200,200);
 } else if (mouseX < 250){
   let palavra="E o fod"
   text(palavra,200,200);
 } else if (mouseX < 300){
   let palavra="E o foda"
   text(palavra,200,200);
 } else if (mouseX < 350){
   let palavra="E o fodas"
   text(palavra,200,200);
 } else if (mouseX < 400){
   let palavra="E o fodass"
   text(palavra,200,200);
 } else if (mouseX < 450){
   let palavra="E o fodasse"
   text(palavra,200,200);
 } else if (mouseX < 500){
   let palavra="E o fodasse?"
   text(palavra,200,200);
 } */
    
    
  }