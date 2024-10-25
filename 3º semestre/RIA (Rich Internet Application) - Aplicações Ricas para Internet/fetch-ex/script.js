let API = "https://jsonplaceholder.typicode.com/posts";

let resultado;

document.getElementById("btn").addEventListener('click', (e) => {


    fetch(API)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resultado = data;

            data.forEach(element => {
                let div = document.createElement('div');
                div.style.border = '1px solid #000';
                div.style.margin = '10px';
                div.style.padding = '10px';
                div.style.borderRadius = '20px';
                let h2 = document.createElement('h2');
                h2.innerHTML = element.title;
                let p = document.createElement('p');
                p.innerHTML = element.body;

                div.appendChild(h2);
                div.appendChild(p);

                document.getElementById('resultado').appendChild(div);
            });
        });
});



// let API = "https://swapi.dev/api/planets/";

// document.getElementById("btn").addEventListener('click', (e) => {

//     planetaSelecionado = document.getElementById('planetas').value;
//     console.log(planetaSelecionado);


//     fetch(API + planetaSelecionado)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw 'Error en la llamada a la API';
//             }
//         })
//         .then(data => {
//             console.log("data final", data);

//             let div = document.createElement('div');
//             div.className = 'planeta';
//             div.style.border = '1px solid #000';
//             div.style.margin = '10px';
//             div.style.padding = '10px';
//             div.style.borderRadius = '20px';
//             let h2 = document.createElement('h2');
//             h2.innerHTML = data.name;
//             let p = document.createElement('p');
//             p.innerHTML = data.climate;
//             let p1 = document.createElement('p');
//             p1.innerHTML = data.population;

//             div.appendChild(h2);
//             div.appendChild(p);
//             div.appendChild(p1);

//             document.getElementById('resultado').appendChild(div);
//         }).catch(error => {
//             console.log(error);
//         });
// });