
var produtos = document.querySelectorAll(".produtos")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")

setTimeout(() => {
    produtos[0].setAttribute("style", 'opacity: 1')
    menu.setAttribute("style", 'opacity: 1')
    menu_texto.setAttribute("style", 'opacity: 1')
    setTimeout(() => {
        produtos[1].setAttribute("style", 'opacity: 1')
        setTimeout(() => {
            produtos[3].setAttribute("style", 'opacity: 1')
        }, 250);
    }, 250);
}, 50);

produtos[0].addEventListener("mouseover", function(){
    produtos[0].setAttribute("style", "font-size:150px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[0].addEventListener("mouseout", function(){
    produtos[0].setAttribute("style", "font-size:130px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[2].addEventListener("mouseover", function(){
    produtos[1].setAttribute("style", "height: 460px; width: 370px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[2].setAttribute("style", "font-size:60px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[2].addEventListener("mouseout", function(){
    produtos[1].setAttribute("style", "height: 400px; width: 320px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[2].setAttribute("style", "font-size:50px ; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[4].addEventListener("mouseover", function(){
    produtos[3].setAttribute("style", "height: 460px; width: 370px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[4].setAttribute("style", "font-size:60px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[4].addEventListener("mouseout", function(){
    produtos[3].setAttribute("style", "height: 400px; width: 320px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[4].setAttribute("style", "font-size:50px ; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
})

       
menu.addEventListener("mouseover", function(){
    menus[0].setAttribute("style", "opacity: 1")
    menus[1].setAttribute("style", "opacity: 1")
    menu_texto.setAttribute("style", "opacity: 0; z-index:-1")
})

menu.addEventListener("mouseout", function(){
    menus[0].setAttribute("style", "opacity: 0")
    menus[1].setAttribute("style", "opacity: 0")
    menu_texto.setAttribute("style", "opacity: 1; z-index:1")
})