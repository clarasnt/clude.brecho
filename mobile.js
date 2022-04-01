
        window.onload = function() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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

        clicado_menu = 0
        clicado1 = 0
        clicado2 = 0
        
        cinza[0].addEventListener("click", function(){
            if(clicado1 == 0){
                cinza[0].setAttribute("style", "font-size: 1500px; opacity: 1")
                dentro[0].setAttribute("style", "font-size: 200px; opacity: 1; background-image: linear-gradient(to left, transparent, white); z-index: 1")
                clicado1 = 1
            } else {
                clicado1 = 0
                dentro[0].setAttribute("style", "font-size: 150px; opacity: 0; z-index: -1")
                cinza[0].setAttribute("style", "font-size: 1400px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
            }
        })
        
        cinza[1].addEventListener("click", function(){
            if(clicado2 == 0){
                cinza[1].setAttribute("style", "font-size: 1500px; opacity: 1")
                dentro[1].setAttribute("style", "font-size: 200px; opacity: 1; background-image: linear-gradient(to left, transparent, white); z-index: 1")
                clicado2 = 1
            } else {
                clicado2 = 0
                dentro[1].setAttribute("style", "font-size: 150px; opacity: 0; z-index: -1")
                cinza[1].setAttribute("style", "font-size: 1400px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
            }
        })

        menu.addEventListener("click", function(){
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

            } else {
                window.location.href = "index.html"
            }
        }
        