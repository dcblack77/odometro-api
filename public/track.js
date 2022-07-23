'use strict'

import 'https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js';


async function getData() {
  let data = await fetch('http://localhost:3000/track');
  return await data.json();
}
const dataFetch = await getData()

console.log(dataFetch);


const midPositionArray = Number.parseInt(dataFetch.coords.length / 2);
console.log(midPositionArray)

mapboxgl.accessToken = 'pk.eyJ1IjoiZGNibGFjazc3IiwiYSI6ImNsNXI4Yzl3MzI0aDIzYm1ndzZ3c3E5dW8ifQ.p9PznDjnkh5yKO0zRLZEIw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: dataFetch.coords[midPositionArray],
    zoom: 15
});

map.on('load', () => {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': dataFetch.coords
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    });
});