window.onload=(function(){
    initializate();
})();
function initializate(){
    var toshow = document.querySelectorAll(".link");
    var mostrar = document.querySelector(".view");
    toshow.foreach(link => link.addEventListener("click", function(e){
        e.preventDefault();
        mostrar.style.display="flex";
    }));
    var cerrar = document.querySelector(".close");
    cerrar.addEventListener("click", function(e){
        e.preventDefault();
        ocultar.style.display="none";
    });
}