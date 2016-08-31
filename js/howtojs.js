    function showElement(){
       // get a reference to your element, or it's container
       var myElement = document.getElementById('shelter_form');
       myElement.style.display = '';
    }
          function hideElement(){
               var myElement = document.getElementById('shelter_form');
       myElement.style.display = 'none';
    }
            function toDirectory(){
               var city_input = document.getElementById('city').value;
            var state_input = document.getElementById('state').value;
            
              window.open = 'http://www.homelessshelterdirectory.org/cgi-bin/id/city.cgi?city='+city_input+'&state='+state_input }
                
          function newTab(){
             var city_input = document.getElementById('city').value;
             var state_input = document.getElementById('state').value;
             document.getElementById("hidden").href = "http://www.homelessshelterdirectory.org/cgi-bin/id/city.cgi?city="+city_input+"&state="+state_input;    
             document.getElementById('hidden').click();
              hideElement()
                }
        
                
          
    
      