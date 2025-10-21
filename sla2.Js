var map = L.map('map').setView([-30.0346, -51.2177], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([ -30.031,-51.224]).addTo(map)
    .bindPopup('Bem-vindo(a) ao irmão!')
    .openPopup();
var marker = L.marker([-30.1346, -51.2177]).addTo(map)
    .bindPopup('Aqui é Porto Alegre!')
    .openPopup();
    var marker = L.marker([-30.1346, -51.3177]).addTo(map)
    .bindPopup('Aqui é Porto Alegre!')
    .openPopup();
    var marker = L.marker([-30.1346, -51.4177]).addTo(map)
    .bindPopup('Aqui é Porto Alegre!')
    .openPopup();
    var marker = L.marker([-30.2346, -51.2177]).addTo(map)
    .bindPopup('Aqui é Porto Alegre!')
    .openPopup();
    var marker = L.marker([-30.1356, -51.2177]).addTo(map)
    .bindPopup('Aqui é Porto Alegre!')
    .openPopup();