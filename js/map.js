const lngLat = [-7.977124, 112.633946];
const accessToken = 'pk.eyJ1IjoiY2hhbmRyYXRyaXBtcCIsImEiOiJjam1tdjMxcTEwbmFlM3FsYm51ZWY3aGphIn0.rmJBcK4lYq4e9GCkGrVZfQ';

let mymap = L.map('map', {
    scrollWheelZoom: false
}).setView(lngLat, 16);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: accessToken,
    }).addTo(mymap);

let marker = L.marker(lngLat).addTo(mymap);
marker.bindPopup("Salam Satu Jiwa!<center><h1><b>AREMA!</b></h1></center>").openPopup();

let circle = L.circle(lngLat, {
    color: '#3498db',
    fillColor: '#3498db',
    fillOpacity: 0.35,
    radius: 80
}).addTo(mymap);

/*
mapboxgl.accessToken = accessToken;
var map = new mapboxgl.Map({
    container: 'map',
    center: lngLat,
    zoom: 15.5,
    style: 'mapbox://styles/mapbox/streets-v10'
});

var marker = new mapboxgl.Marker()
        .setLngLat(lngLat)
        .addTo(map);

var markerHeight = 50, markerRadius = 10, linearOffset = 25;
var popupOffsets = {
    'top': [0, 0],
    'top-left': [0, 0],
    'top-right': [0, 0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};
var popup = new mapboxgl.Popup({ offset: popupOffsets, className: 'my-class' })
        .setLngLat(lngLat)
        .setHTML("<b>Salam Satu Jiwa!</b><br> <h1>AREMA!</h1>")
        .addTo(map);
*/