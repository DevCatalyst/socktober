// get organizations
var organizations = $.getJSON( "./js/organizations.json", function(data) {
  console.log( "success" );
  console.log( data );
  return data;
})
  .fail(function() {
    console.log( "error getting JSON" );
  });

function checkProfanity( data ) {
	//https://github.com/ChaseFlorell/jQuery.ProfanityFilter
	// send user a message if filter finds naughty words
}

function checkLocation( address ) {
	// var geocoder = new google.maps.Geocoder();
	// return geocodeAddress(geocoder, address);
}

function storeData( data ) {
	// send data to PHP to add to file
	// map-form-processor.php
	JSON.stringify(data);
	console.log(data);
  $.ajax({  
    type: 'POST',  
    url: './_inc/map-form-processor.php',
    data: data,
    success: function(response) {
        console.log(response);
        return true;
    }
	});
}

function addDataPointsToMap(data) {
	// get to it
}

function updateLocalOrganizations( data ) {
	// update local array
	console.log("BEFORE Organizations extended line 40 map-form-logic.js: " + organizations);
	$.extend(organizations,data);
	// STILL NEEDS TO BE CONFIRMED...so console.log()
	console.log("Organizations was just extended line 43 map-form-logic.js: " + organizations);
	throw new error("Was not able to add submission: Error 1214 :(");
	exit;
	if (organizations) return false;

	return false;
}

addDataPointsToMap(organizations);
// When form is submitted
$('#map-form').submit(function(event) {
	

	//collection data from form >> https://api.jquery.com/serializeArray/
	var data = {};

	var address = {address: document.getElementById('address').value};
	var orgName = {organization: document.getElementById('organization').value};
	var charityName = {charity: document.getElementById('charity').value};
	var numSocks = {numSocks: document.getElementById('num_socks').value};
	$.extend(data,address, orgName, charityName, numSocks);

	// validate submission
	// -- checkProfanity()
	
	var longLad = checkLocation( document.getElementById('address').value );
	// *********** --- dummy data --- ***********
	longLad = "35.7052481,-88.8581993";
	if ( !longLad ) {
		throw new error("Location not found. :(");
	}
	
	// checkLocation success, add long and lad to data object
	$.extend(data,longLad);

	// add to organizations
	if ( !updateLocalOrganizations(data) ) {
		throw new error("Was not able to add submission: Error 1214 :(");
	}

	if ( !storeData(organizations) ) {
		throw new error("Submission wasn't successful: Error 1215 :(");
	}
	
	// update the map data
	addDataPointsToMap(organizations);

	// notify user of a successful addition to the map
	organization = document.getElementById('organization').value;
	$("#map-form").notify("Hi, "+ organization +"! Thanks for the submission!", "success");
});