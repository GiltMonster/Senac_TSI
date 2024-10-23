
//exemplo 01
function desenhar() {
    //pode-se obter o canvas de duas formas
    let figura = document.querySelector("#minhaTela");
    //let figura = document.getElementById("minhaTela");
    if (figura.getContext) {
        let retangulo = figura.getContext("2d");
        retangulo.fillStyle = "rgb(200, 0, 0) ";
        retangulo.fillRect(50, 50, 300, 400);
        retangulo.strokeRect(50, 50, 300, 400);
        retangulo.strokeStyle = "rgb(0, 0, 200)";
    }
}

//exemplo 02
function desenharLinha() {
    let figura = document.querySelector("#minhaTela");
    if (figura.getContext) {
        let linha = figura.getContext("2d");
        linha.beginPath();
        linha.lineWidth = 5;
        linha.strokeStyle = "rgb(0, 0, 200)";
        linha.moveTo(100, 200);
        linha.lineTo(170, 100);
        linha.lineTo(240, 300);
        linha.stroke();
    }
}

//exemplo 03
function desenharCirculo() {
    let figura = document.querySelector("#minhaTela");
    if (figura.getContext) {
        let circulo = figura.getContext("2d");
        circulo.beginPath();
        circulo.fillStyle = "rgb(0, 200, 0)";
        circulo.arc(200, 200, 50, 0, 2 * Math.PI);;
        circulo.fill();
    }
}

function desenhar3d() {
    let figura = document.querySelector("#minhaTela");
    if (figura.getContext) {
        let retangulo = figura.getContext("2d");
        let linha = figura.getContext("2d");
        let circulo = figura.getContext("2d");

        function animarCirculo(tempo) {
            circulo.clearRect(0, 0, figura.height, figura.width);

            retangulo.fillStyle = "blue";
            retangulo.fillRect(50, 50, 400, 200);

            linha.lineWidth = 5;
            linha.strokeStyle = "red";
            linha.moveTo(100, 200);
            linha.lineTo(170, 100);
            linha.lineTo(240, 400);
            linha.stroke();

            circulo.fillStyle = "green";
            circulo.beginPath();
            circulo.arc(200, 200, 50 + 25 * Math.sin(tempo / 500), 0, 2 * Math.PI);
            circulo.fill();
            circulo.lineWidth = 2;
            circulo.strokeStyle = "aqua";
            circulo.stroke();

            requestAnimationFrame(animarCirculo);

        }
        requestAnimationFrame(animarCirculo);
    }

}

// window.onload = desenhar;
// window.onload = desenharLinha;
// window.onload = desenharCirculo;
window.onload = desenhar3d;