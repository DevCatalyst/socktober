    /**This creates the map when the page loads.**/
    
    function initMap() {
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2, //Selects zoom
          center: {lat: 10, lng: 11} //Selects center of the map
        });
        
        
        /** Here is the template we will fill in to create a marker:  
        
        var marker# = new google.maps.Marker({       Replace # with next unused integer
          position: {lat: 35.4392, lng: -88.6414},   Replace these numbers with lat and long from database
          map: map,   
         
        });
          
              var infowindow# = new google.maps.InfoWindow({  Replace # with next unused integer
          content: '<b>Chester County High School</b><br>'+   Insert school name from db  
                  'Henderson, TN <br><br>'+                   Insert location from db  
                  'We collected 1000 pairs of socks for Charity!'  Insert number and charity from db  
      **/

          //Marker 1
          
        var marker = new google.maps.Marker({ 
          position: {lat: 35.4392, lng: -88.6414}, 
          map: map,   
         
        });
          
              var infowindow = new google.maps.InfoWindow({ 
          content: '<b>Chester County High School</b><br>'+
                  'Henderson, TN <br><br>'+
                  'We collected 1000 pairs of socks for The Dream Center!'
                  
        });        
                    
          marker.addListener('click', function() {
          infowindow.open(map, marker); //This assigns the infowindow to the marker.
        })
          
          /////          
          
          //Marker 2
          var marker2 = new google.maps.Marker({
          position:  {lat: 55.8908, lng: -4.3347},
          map: map,
          title: 'This is what appears when you hover.'
        });
          
          var infowindow2 = new google.maps.InfoWindow({
          content: '<b>Knightswood Secondary School</b><br>'+
              'Glasgow, Scotland<br><br>'+
              'We collected 2 pairs of socks!'
              
        });        
                    
          marker2.addListener('click', function() {
          infowindow2.open(map, marker2);
        })
      
           }
      