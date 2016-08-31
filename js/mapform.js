/** GEOCODING
This script converts the location the user inputs into latitude (geocodelat) and longitude (geocodelong). **/

var geocoder = new google.maps.Geocoder();
var geocodelat
var geocodelong

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
           /**Removed #1**/
             geocodelat = results[0].geometry.location.lat();
             geocodelong = results[0].geometry.location.lng();
            
            });
             document.getElementById(test).innerHTML = "Coordinates:" + geocodelat +"   " + geocodelong ;
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
      
      
      /** Removed #1:  resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,**/