function maps () {

    let userLocation = document.getElementById("main_map");

    navigator.geolocation.getCurrentPosition(getUserLocation, errHandle);

    function getUserLocation(position) {

        let mainMap = new google.maps.Map(userLocation, {
            center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            
            zoom: 13

          
        })
    }

    function errHandle (err) {
        console.log(err.message);
    }

    let newYorkMap = document.getElementById("ny_map");

let newYorkMapLocation = new google.maps.Map(newYorkMap, {
    center: {
        lat: 40.71695,
        lng: -73.99429
    },
    
    zoom: 10,

});
}

