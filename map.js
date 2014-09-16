$( document ).ready(function() {
	var map = L.map('map').setView([51.505, -0.09], 3);
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/tuckerbuchy.jh233fp8/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18
		}).addTo(map);

	$.getJSON('data/countries-hires.json', function(data) {
	   console.log(data);
	   L.geoJson(data).addTo(map);
	});
});
