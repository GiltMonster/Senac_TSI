
let API_KEY = 'da39bcf8e3d3596e2cb849d55eb0b24a';
let api = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API key}`;

let resultado;
let cidade;

let cidades = document.querySelector('#cidades');

cidades.onchange = () => {
    let ajax = null;

    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject('Msxml2.XMLHTTP');
    }

    ajax.open('GET', api, true);

    ajax.send(null);

    ajax.onreadystatechange = () => {

        if (ajax.readyState === 2) {
            console.log('Headers received');
        }

        if (ajax.readyState === 3) {
            console.log('Loading response');
        }

        if (ajax.readyState === 4 && ajax.status === 200) {
            let data = JSON.parse(ajax.responseText);
            console.log(data);
        }
    }
}


