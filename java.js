let texto= decodeURIComponent.getElemenByTd("texto");
let posicion = 0;
function MutationObserver(){
posicion + = 10;
texto.marginleft=posicion + "px";
if (posicion > 600){
posicion=0;
}
setInterval (mover, 30);