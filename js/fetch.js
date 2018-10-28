const url = "../data/data.json";
/* 
fetch(url)
    .then(function (response) { //berisi Obyek Response
        if (reponse.ok) {
            return result.text(); // proses normal
        }
        else { // ada masalah dengan fetch
            throw response.statusText;
        }
    })
    .then( res => {
        console.log(res);
    })
    .catch(function (err) { // program lanjut di catch
        console.log("Error: " + err);
    });
*/

// (async () => {
//     try {
//         var res = await fetch(url);
//         var data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: " + error);
//     }
// })();

function findLocation(x, y) {
    // console.log(x,y);
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x &&
            places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    //console.log("you clicked " + e.latlng.lat + " dan "+e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        img.src = places[ix].gambar;
        par.textContent = places[ix].review;
    }
}

let gmb = document.getElementById("picture");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

let r0 = "restoran spanyol di jakarta yang dekat dengan kantor saya";
let r1 = "warung kopi cita rasa yang sangat tinggi dengan harga yang murah";
let r2 = "Ikan bakar kualitas tinggi, hampir gosong tapi belum";
let r3 = "Steak lokal harga impor, 200gr dan 300gr mentah";
let r4 = "seafood international lobster, king crabs, cumi, kerang, semua ada";

let places = [
    {
        "lokasi" : [-6.221028, 106.791434], 
        "sponsor": "Resto Spanyol",
        "gambar" : "img/planB.jpg", 
        "review" : r0
    },
    {
        "lokasi" : [-6.219912, 106.791239], 
        "sponsor": "Warung Kopi",
        "gambar" : "img/warkop.jpg", 
        "review" : r1
    },
    {
        "lokasi" : [-6.220529, 106.789848], 
        "sponsor": "Pondok Ikan  Bakar", 
        "gambar" : "img/ikan_bakar.jpg",
        "review" : r2
    },
    {
        "lokasi" : [-6.222977, 106.789152], 
        "sponsor": "STEAK cow",
        "gambar" : "img/steak.jpg", 
        "review" : r3
    },
    {
        "lokasi" : [-6.222043, 106.791070], 
        "sponsor": "Rupa-rupa Seafood!!", 
        "gambar" : "img/seafood.jpg",
        "review" : r4
    }
];

for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap)
        .bindPopup(p.sponsor);
    marker.on('click', showLocation);
}