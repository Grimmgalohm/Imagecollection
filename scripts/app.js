window.onload=(function(){
    initializate();
})();
function initializate (){
    var toshow = document.querySelectorAll(".link");
    var mostrar = document.querySelector(".view");
    toshow.forEach(HTMLLinkElement=>HTMLLinkElement.addEventListener("click", function(e){
        e.preventDefault();
        mostrar.style.display="flex";
    }));
    var cerrar = document.querySelector(".close");
    var ocultar = document.querySelector(".view");
    cerrar.addEventListener("click", function(e){
        e.preventDefault();
        ocultar.style.display="none";
    });
};