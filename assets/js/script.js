// Initialisation des variables
let switch1 = document.querySelector(".form-check input");
let div = document.querySelector(".redsquare-app");
let rocket = document.querySelector(".square");
let buttons = document.querySelectorAll(".redsquare-controls button");
let scaleUpButton = document.querySelector("#scaleUp");
let scaleDownButton = document.querySelector("#scaleDown");
let shapeCircle = document.querySelector("#shapeCircle");
let shapeSquare = document.querySelector("#shapeSquare");

// Bouton switch
switch1.addEventListener('click', function() {
    // Pour tous les boutons
    for (const button of buttons) {
        // Si ils possèdent l'attribut "disabled"
        if (button.hasAttribute("disabled") == true) {
            div.classList.add("is-active");
            button.removeAttribute("disabled");
            button.classList.remove("btn-light");
            button.classList.add("btn-primary");
        }
        // Si ils possèdent la classe "is-active"
        else {
            div.classList.remove("is-active");
            button.setAttribute("disabled", '');
            button.classList.remove("btn-primary");
            button.classList.add("btn-light");
        }
    }
})

// Agrandir l'icône
scaleUpButton.addEventListener('click', function () {
    var width = rocket.clientWidth;
    var height = rocket.clientHeight;
    rocket.style.width = (width + 20) + "px";
    rocket.style.height = (height + 20) + "px";
})

// Rétrécir l'icône (si sa taille est supérieure à 50px)
scaleDownButton.addEventListener('click', function () {
    var width = rocket.clientWidth;
    var height = rocket.clientHeight;
    if (rocket.style.width < 50 + "px") {
        rocket.style.width = (width - 20) + "px";
        rocket.style.height = (height - 20) + "px";
    }
});

// Donne un aspect de cercle à l'icône
shapeCircle.addEventListener('click', function () {
    rocket.style.borderRadius = 10000 + "px";
});

// Donne un aspect de carré à l'icône
shapeSquare.addEventListener('click', function () {
    rocket.style.borderRadius = 0 + "px";
});

window.addEventListener('keydown', (e) => {
    var marginTop = rocket.style.marginTop;
    marginTop = Number(marginTop.replace('px', ''));
    var marginBottom = rocket.style.marginBottom;
    marginBottom = Number(marginBottom.replace('px', ''));
    var marginRight = rocket.style.marginRight;
    marginRight = Number(marginRight.replace('px', ''));
    var marginLeft = rocket.style.marginLeft;
    marginLeft = Number(marginLeft.replace('px', ''));

    // A l'appui d'une des flèches directionnelles
    if(e.key === "ArrowUp") {
        rocket.style.marginTop = (marginTop - 20) + "px";
        rocket.style.marginBottom = (marginBottom + 20) + "px";
    };
    if(e.key === "ArrowDown") {
        rocket.style.marginBottom = (marginBottom - 10) + "px";
        rocket.style.marginTop = (marginTop + 20) + "px";
    }
    if(e.key === "ArrowRight") {
        rocket.style.marginRight = (marginRight - 20) + "px";
        rocket.style.marginLeft = (marginLeft + 20) + "px";
    };
    if(e.key === "ArrowLeft") {
        rocket.style.marginLeft = (marginLeft - 20) + "px";
        rocket.style.marginRight = (marginRight + 20) + "px";  
    };
});