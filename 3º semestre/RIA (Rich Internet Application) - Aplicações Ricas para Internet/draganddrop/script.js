function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
    
}

function drop(event) {
    let obj = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(obj));

}
