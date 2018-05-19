window.onload=(function(){
    initializate();
})();
function initializate(){
    var toshow = document.querySelector(".link");
    var mostrar = document.querySelector(".view");
    toshow.addEventListener("click", function(e){
        e.preventDefault();
        mostrar.style.display="flex";
    });
} 
 /*
function initializate(){
    var cerrar = document.querySelector(".close");
    var ocultar = document.querySelector(".view");
    cerrar.addEventListener("click", function(e){
        e.preventDefault();
        ocultar.style.display="none";
    });
}
*/