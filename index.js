window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "mobile.html"
    }else{
        var cinza = document.querySelectorAll(".cinza")
        var dentro = document.querySelectorAll(".dentro")
        var menu = document.querySelector("#menu")
        var menus = document.querySelectorAll(".menu")
        var menu_texto = document.querySelector("#menu_texto")
        var categorias = document.querySelector("#categorias")
        var mouse = document.querySelector("#mouse")

        setTimeout(() => {
            cinza[0].setAttribute("style", 'opacity: 1')
            menu.setAttribute("style", 'opacity: 1')
            menu_texto.setAttribute("style", 'opacity: 1')
            mouse.setAttribute("style", 'opacity: 1')
            setTimeout(() => {
                cinza[1].setAttribute("style", 'opacity: 1')
                setTimeout(() => {
                    cinza[2].setAttribute("style", 'opacity: 1')
                    setTimeout(() => {
                        cinza[3].setAttribute("style", 'opacity: 1')
                        setTimeout(() => {
                            cinza[4].setAttribute("style", 'opacity: 1')
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 50);
        
        dentro[0].addEventListener("mouseover", function(){
            cinza[0].setAttribute("style", "font-size: 550px; opacity: 1")
            dentro[0].setAttribute("style", "font-size: 70px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        })
        
        dentro[0].addEventListener("mouseout", function(){
            dentro[0].setAttribute("style", "font-size: 60px; opacity: 0")
            cinza[0].setAttribute("style", "font-size: 500px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        })
        
        dentro[1].addEventListener("mouseover", function(){
            cinza[1].setAttribute("style", "font-size: 550px; opacity: 1")
            dentro[1].setAttribute("style", "font-size: 70px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        })
        
        dentro[1].addEventListener("mouseout", function(){
            dentro[1].setAttribute("style", "font-size: 60px; opacity: 0")
            cinza[1].setAttribute("style", "font-size: 500px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
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

    }
}
        