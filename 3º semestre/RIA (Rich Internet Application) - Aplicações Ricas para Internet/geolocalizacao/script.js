let lat;
let lon;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos.coords.latitude, pos.coords.longitude);
            console.log(pos.toJSON());

            lat = document.getElementById("lat").innerText = pos.coords.latitude;
            lot = document.getElementById("lon").innerText = pos.coords.longitude;

            initMap();
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos.coords.latitude, pos.coords.longitude);
    });

}

function initMap() {
    const myLatLng = { lat: lat, lng: lon };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 8,
    });

    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });


}

getLocation();