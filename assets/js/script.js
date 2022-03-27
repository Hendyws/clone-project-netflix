function activeAnswer(element){
  var el = element.closest('.answer');
  var index = Array.prototype.indexOf.call(el.parentNode.children, el);
  console.log(index); // mostrar posição da linha como exemplo
  //removo a linha
  el.outerHTML = '';
}
window.onload = escuta;

botoes = document.getElementsByClassName("apagar");
function escuta(){
  for(x=0;x<botoes.length;x++){
    // arranjo os listeners com os index das linhas
    (function(index){
      botoes[x].addEventListener("click", function(){
        removeLinha(index);
      });
    })(x);
  }
}
	
// function removeLinha(element){ // element é o index da linha clicada
//    console.log(element); // mostrar index da linha como exemplo
//   //removo a linha
//   botoes[element].closest('tr').outerHTML = '';
//   // removo os listeners
//   for(x=0;x<botoes.length;x++){
//     objclone = botoes[x].cloneNode(true);
//     botoes[x].parentNode.replaceChild(objclone, botoes[x]);
//   }
//   escuta();
// }
