let API = "https://jsonplaceholder.typicode.com/posts";

let resultado;

document.getElementById("btn").addEventListener('click', (e) => {
    
        let ajax = null;
        
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject('Msxml2.XMLHTTP');
        }
        
        ajax.open('GET', API, true);
        
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
            }
        
    }
});