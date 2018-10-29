const web = "https://chandra-mws.firebaseapp.com/";
const url = web + "data/data.json";

fetch(url)
    .then(function (response) {
        if (!response.ok) {
            throw response.statusText;
        }
        return response.json();
    })
    .then( res => {
        localStorage.setItem('places', JSON.stringify(res.places));
        showMarker();
    })
    .catch(function (err) {
        console.log("Error Fetching Data: " + err);
    });


/*
// Async
(async () => {
    try {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})();
*/

function findLocation(x, y) {
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x &&
            places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        img.src = web + places[ix].gambar;
        img.alt = places[ix].nama;
        par.innerHTML = places[ix].review;
        tit.textContent = places[ix].nama;
    }
}

function showMarker(){
    places = JSON.parse(localStorage.getItem('places'));

    for (var p of places) {
        var marker = L.marker(p.lokasi).addTo(mymap)
            .bindPopup(p.sponsor);
        marker.on('click', showLocation);
    }
}

let places;
let gmb = document.getElementById("picture");
let rev = document.getElementById("review");

let img = document.createElement('img');
let par = document.createElement('p');
let tit = document.createElement('h3');
gmb.appendChild(img);
rev.appendChild(tit);
rev.appendChild(par);

// showMarker();