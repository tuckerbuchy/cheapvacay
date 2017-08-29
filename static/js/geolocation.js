function findLocation(){
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          $.getJSON('http://ws.geonames.org/countryCode', {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              type: 'JSON',
              username: 'ibrahimm'
          }, function(result) {
              $('#country_select')[0].selectize.setValue(result.countryCode);
          });
      });
  }
}