var directionDisplay;
var directionsService = new google.maps.DirectionsService();
function initialize() {
  //1828 L St. NW, Washington, DC 20036
  var latlng = new google.maps.LatLng(38.903466,-77.042898);

  // set direction render options
  var rendererOptions = { draggable: true };
  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  var myOptions = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false
  };
  // add the map to the map placeholder
  var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  // Add a marker to the map for the end-point of the directions.
  var marker = new google.maps.Marker({
    position: latlng, 
    map: map, 
    title:"1828 L St. NW, Washington, DC 20036"
  }); 
}
function calcRoute() {
  // get the travelmode, startpoint and via point from the form   
  var travelMode = $('input[name="travelMode"]:checked').val();
  var start = $("#routeStart").val();
  var end = $("#routeEnd").val();
  var via = '';
  
  if (travelMode == 'TRANSIT') {
    via = ''; // if the travel mode is transit, don't use the via waypoint because that will not work
  }
  var waypoints = []; // init an empty waypoints array
  if (via != '') {
    // if waypoints (via) are set, add them to the waypoints array
    waypoints.push({
      location: via,
      stopover: true
    });
  }
  var request = {
    origin: start,
    destination: end,
    waypoints: waypoints,
    unitSystem: google.maps.UnitSystem.IMPERIAL,
    travelMode: google.maps.DirectionsTravelMode[travelMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      $('#directionsPanel').empty(); // clear the directions panel before adding new directions
      directionsDisplay.setDirections(response);
	  $('#directionsPanel').css({'height':'410px', 'overflow': 'auto', 'padding-right': '5px'});
	  //$('#venue .directions-input').css({'height':'800px', 'overflow': 'auto'});
    } else {
      // alert an error message when the route could nog be calculated.
      if (status == 'ZERO_RESULTS') {
        alert('No route could be found between the origin and destination.');
      } else if (status == 'UNKNOWN_ERROR') {
        alert('A directions request could not be processed due to a server error. The request may succeed if you try again.');
      } else if (status == 'REQUEST_DENIED') {
        alert('This webpage is not allowed to use the directions service.');
      } else if (status == 'OVER_QUERY_LIMIT') {
        alert('The webpage has gone over the requests limit in too short a period of time.');
      } else if (status == 'NOT_FOUND') {
        alert('At least one of the origin, destination, or waypoints could not be geocoded.');
      } else if (status == 'INVALID_REQUEST') {
        alert('The DirectionsRequest provided was invalid.');         
      } else {
        alert("There was an unknown error in your request. Requeststatus: nn"+status);
      }
    }
  });
}