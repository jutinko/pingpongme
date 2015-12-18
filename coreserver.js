// caveat: default location of London might cause problems

var locations = {}

var interval

var threshold = 30 * 1000

function cleanupLocations(){
  for (elem in locations) {
    if (( Date.now() - locations[elem].timestamp ) > threshold){
      locations[elem].lastResponse.send("Your ping pong request has timed out.. ");
      console.log("timeout");
      locations[elem] = {}
    }
  }
}

exports.requestpair = function(req, res) {
    var location_to_check = (req.query.location || "London");

    var location_state = update_location_map(location_to_check);

    if (!Boolean(location_state.lastResponse)) {
      location_state.lastResponse = res;
      location_state.lastRequest = req;
      location_state.timestamp = Date.now();
      return
    } else {
      var common_response = (location_state.lastRequest.query.name || "Unknown coward") + " vs. " + (req.query.name || "Unknown coward at ") + location_to_check;

      location_state.lastResponse.send("You got matched with " + (req.query.name || "Unknown coward") + " in " + location_to_check + "!");
      res.send("You got matched with " + (location_state.lastRequest.query.name || "Unknown coward") + " in " + location_to_check + "!");

      locations[location_to_check] = {}

      return
    }

    function update_location_map (location) {
      if (!Boolean(locations[location])) {
        locations[location] = {}
      }
      return locations[location];
    }
}


interval = setInterval(cleanupLocations, 1000);

cleanupLocations();
