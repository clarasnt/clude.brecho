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

categorias[0].addEventListener("mouseover", function(){
    categorias[0].setAttribute("style", "font-size:150px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

categorias[0].addEventListener("mouseout", function(){
    categorias[0].setAttribute("style", "font-size:130px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

categorias[1].addEventListener("mouseover", function(){
    categorias[1].setAttribute("style", "font-size:150px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

categorias[1].addEventListener("mouseout", function(){
    categorias[1].setAttribute("style", "font-size:130px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

categorias[2].addEventListener("mouseover", function(){
    categorias[2].setAttribute("style", "font-size:150px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

categorias[2].addEventListener("mouseout", function(){
    categorias[2].setAttribute("style", "font-size:130px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

categorias[3].addEventListener("mouseover", function(){
    categorias[3].setAttribute("style", "font-size:150px ; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

categorias[3].addEventListener("mouseout", function(){
    categorias[3].setAttribute("style", "font-size:130px ; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})
        
menu.addEventListener("mouseover", function(){
    menus[0].setAttribute("style", "opacity: 1")
    menus[1].setAttribute("style", "opacity: 1")
    menu_texto.setAttribute("style", "opacity: 0; z-index:-1")
})

menu.addEventListener("mouseout", function(){
    menus[0].setAttribute("style", "opacity: 0")
    menus[1].setAttribute("style", "opacity: 0")
    menu_texto.setAttribute("style", "opacity: 1; z-index:0")
})