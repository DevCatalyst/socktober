/** GEOCODING
This script converts the location the user inputs into latitude (geocodelat) and longitude (geocodelong). **/

var geocodelat
var geocodelong

function geocodeAddress(geocoder, address) {
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
     /**Removed #1**/
     geocodelat = results[0].geometry.location.lat();
     geocodelong = results[0].geometry.location.lng();
  });

  return [geocodelat, geocodelong];

  } else {
    alert('Geocode was not successful for the following reason: ' + status);
    return false;
  }
});
}


/** Removed #1:  resultsMap.setCenter(results[0].geometry.location);
var marker = new google.maps.Marker({
map: resultsMap,**/