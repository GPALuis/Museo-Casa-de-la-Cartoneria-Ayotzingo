// Centra el mapa en una ubicación específica
google.maps.event.addListener(map, "load", function() {
  map.setCenter({lat: 19.211377319036583, lng:-98.93193872348441});
});

// Muestra o oculta una capa
function showLayer(layer) {
  layer.setMap(map);
}

function hideLayer(layer) {
  layer.setMap(null);
}

// Agrega un marcador al mapa
function addMarker(location) {
  var marker = new google.maps.Marker({
    map: map,
    position: location
  });
}