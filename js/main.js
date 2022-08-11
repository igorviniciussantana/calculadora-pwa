window.onload = () => {
"use strict";
if("serviceWorker" in navigator){
navigator.serviceWorker.register("./sw.js")


}



}



function calc() {



var alt = altura.value;
var lar = largura.value;

var area = alt * lar;

resultado.textContent = area;
    
}