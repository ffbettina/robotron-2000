const controle = document.querySelectorAll("[data-controle]")

const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]"); //contador que mostra os números entre o - e o +, contador de peças

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca, operacao) {
    estatistica.forEach((elemento) => {
        if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}

const cor = document.querySelectorAll(".cor_robo");

cor.forEach((elemento) => {
    elemento.addEventListener("click", (evento)=>{
        escolheCor(evento.target.id)
        escolheCorFavicon(evento.target.id)
    })
})

function escolheCor(escolha){
    const mudacor = document.getElementById("robotron");
    mudacor.src = "img/robotron/rob-"+escolha+".png";
}

function escolheCorFavicon(escolha){
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'shortcut icon'
    newFavicon.type = 'image/x-icon'
    newFavicon.href = "img/favicon/fav-"+escolha+".ico";

    document.head.appendChild(newFavicon);
    document.head.removeChild(favicon);
}



