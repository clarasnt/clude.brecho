window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var categorias = document.querySelectorAll(".categorias")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")

setTimeout(() => {
    categorias[0].setAttribute("style", 'opacity: 1')
    menu.setAttribute("style", 'opacity: 1')
    menu_texto.setAttribute("style", 'opacity: 1')
    setTimeout(() => {
        categorias[1].setAttribute("style", 'opacity: 1')
        setTimeout(() => {
            categorias[2].setAttribute("style", 'opacity: 1')
            setTimeout(() => {
                categorias[3].setAttribute("style", 'opacity: 1')
                setTimeout(() => {
                    categorias[4].setAttribute("style", 'opacity: 1')
                    setTimeout(() => {
                        categorias[5].setAttribute("style", 'opacity: 1')
                        setTimeout(() => {
                            categorias[6].setAttribute("style", 'opacity: 1')
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }, 250);
}, 50);

clicado_menu = 0
clicado1 = 0
clicado2 = 0
clicado3 = 0
clicado4 = 0
clicado5 = 0
clicado6 = 0
clicado7 = 0

categorias[0].addEventListener("click", function(){
    if (clicado2 == 1 || clicado3 == 1 || clicado4 == 1 || clicado5 == 1 || clicado6 == 1 || clicado7 == 1 || clicado_menu == 1){
        categorias[1].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[4].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[5].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[6].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado1 = 0
        clicado2 = 0
        clicado3 = 0
        clicado4 = 0
        clicado5 = 0
        clicado6 = 0
        clicado7 = 0
    }
    if (clicado1 == 0){
        categorias[0].setAttribute("style", "font-size:190px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado1 = 1
    }else{
        window.location.href = "mobile.html"
        clicado1 = 0
    }
})

categorias[1].addEventListener("click", function(){
    if (clicado1 == 1 || clicado3 == 1 || clicado4 == 1 || clicado5 == 1 || clicado6 == 1 || clicado7 == 1 || clicado_menu == 1){
        categorias[0].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[4].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[5].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[6].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado1 = 0
        clicado3 = 0
        clicado4 = 0
        clicado5 = 0
        clicado6 = 0
        clicado7 = 0
    }
    if (clicado2 == 0){
        categorias[1].setAttribute("style", "font-size:190px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado2 = 1
    }else{
        window.location.href = "todos/mobile.html"
        clicado2 = 0
    }
})

categorias[2].addEventListener("click", function(){
    if (clicado1 == 1 || clicado2 == 1 || clicado4 == 1 || clicado5 == 1 || clicado6 == 1 || clicado7 == 1 || clicado_menu == 1){
        categorias[0].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[1].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[4].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[5].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[6].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado1 = 0
        clicado2 = 0
        clicado4 = 0
        clicado5 = 0
        clicado6 = 0
        clicado7 = 0
    }
    if (clicado3 == 0){
        categorias[2].setAttribute("style", "font-size:190px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado3 = 1
    }else{
        window.location.href = "mobile.html"
        clicado3 = 0
    }
})

categorias[3].addEventListener("click", function(){
    if (clicado1 == 1 || clicado2 == 1 || clicado3 == 1 || clicado5 == 1 || clicado6 == 1 || clicado7 == 1 || clicado_menu == 1){
        categorias[0].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[1].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[4].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[5].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[6].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado1 = 0
        clicado2 = 0
        clicado3 = 0
        clicado5 = 0
        clicado6 = 0
        clicado7 = 0
        menus[0].setAttribute("style", "opacity: 0")
        menus[1].setAttribute("style", "opacity: 0")
        menu_texto.setAttribute("style", "opacity: 1; z-index:0")
        clicado_menu = 0
    }
    if (clicado4 == 0){
        categorias[3].setAttribute("style", "font-size:190px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado4 = 1
    }else{
        window.location.href = "mobile.html"
        clicado4 = 0
    }
})

categorias[4].addEventListener("click", function(){
    if (clicado1 == 1 || clicado2 == 1 || clicado3 == 1 || clicado4 == 1 || clicado6 == 1 || clicado7 == 1 || clicado_menu == 1){
        categorias[0].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[1].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[5].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[6].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado1 = 0
        clicado2 = 0
        clicado3 = 0
        clicado4 = 0
        clicado6 = 0
        clicado7 = 0
        menus[0].setAttribute("style", "opacity: 0")
        menus[1].setAttribute("style", "opacity: 0")
        menu_texto.setAttribute("style", "opacity: 1; z-index:0")
        clicado_menu = 0
    }
    if (clicado5 == 0){
        categorias[4].setAttribute("style", "font-size:190px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado5 = 1
    }else{
        window.location.href = "mobile.html"
        clicado5 = 0
    }
})

categorias[5].addEventListener("click", function(){
    if (clicado1 == 1 || clicado2 == 1 || clicado3 == 1 || clicado4 == 1 || clicado5 == 1 || clicado7 == 1 || clicado_menu == 1){
        categorias[0].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[1].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[4].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[6].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado1 = 0
        clicado2 = 0
        clicado3 = 0
        clicado4 = 0
        clicado5 = 0
        clicado7 = 0
        menus[0].setAttribute("style", "opacity: 0")
        menus[1].setAttribute("style", "opacity: 0")
        menu_texto.setAttribute("style", "opacity: 1; z-index:0")
        clicado_menu = 0
    }
    if (clicado6 == 0){
        categorias[5].setAttribute("style", "font-size:190px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado6 = 1
    }else{
        window.location.href = "mobile.html"
        clicado6 = 0
    }
})

categorias[6].addEventListener("click", function(){
    if (clicado1 == 1 || clicado2 == 1 || clicado3 == 1 || clicado4 == 1 || clicado5 == 1 || clicado6 == 1 || clicado_menu == 1){
        categorias[0].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[1].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[4].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[5].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado1 = 0
        clicado2 = 0
        clicado3 = 0
        clicado4 = 0
        clicado5 = 0
        clicado6 = 0
        menus[0].setAttribute("style", "opacity: 0")
        menus[1].setAttribute("style", "opacity: 0")
        menu_texto.setAttribute("style", "opacity: 1; z-index:0")
        clicado_menu = 0
    }
    if (clicado7 == 0){
        categorias[6].setAttribute("style", "font-size:190px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado7 = 1
    }else{
        window.location.href = "mobile.html"
        clicado7 = 0
    }
})
        
menu.addEventListener("click", function(){
    if (clicado1 == 1 || clicado2 == 1 || clicado3 == 1 || clicado4 == 1 || clicado5 == 1 || clicado6 == 1 || clicado7 == 1){
        categorias[0].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[1].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[4].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[5].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[6].setAttribute("style", "font-size:170px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado1 = 0
        clicado2 = 0
        clicado3 = 0
        clicado4 = 0
        clicado5 = 0
        clicado6 = 0
        clicado7 = 0
        menus[0].setAttribute("style", "opacity: 0")
        menus[1].setAttribute("style", "opacity: 0")
        menu_texto.setAttribute("style", "opacity: 1; z-index:0")
        clicado_menu = 0
    }
    if (clicado_menu == 0){
        menus[0].setAttribute("style", "opacity: 1")
        menus[1].setAttribute("style", "opacity: 1")
        menu_texto.setAttribute("style", "opacity: 0; z-index:-1")
        clicado_menu = 1
    } else {
        menus[0].setAttribute("style", "opacity: 0")
        menus[1].setAttribute("style", "opacity: 0")
        menu_texto.setAttribute("style", "opacity: 1; z-index:0")
        clicado_menu = 0
    }
})
    }else{
        window.location.href = "roupas.html"
    }}