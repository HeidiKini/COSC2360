"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Heidi Kinikini 
    Date: 11/11/2024  

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   
   

   let bikeFind = new google.maps.DirectionsService();
   let bikeDraw = new google.maps.DirectionsRenderer();

   let Boulder = {lat: 40.01753, lng: -105.26496};

   let myMap = new google.maps.Map(bikeMap, {
    zoom: 12,
    center: Boulder
   });

   startingPoint.addEventListener("change", drawRoute);
   endingPoint.addEventListener("change", drawRoute);

   function drawRoute(){
    if(startingPoint.selectedIndex != 0 && endingPoint.selectedIndex != 0) {
        let bikeRoute = {
            origin: startingPoint.value,
            destination: endingPoint.value,
            travelMode: "BICYCLING"
        }

        bikeFind.route(bikeRoute, function(result, status) {
            if(status == "OK"){
                bikeDraw.setDirections(result);

                bikeDraw.setMap(myMap);
                bikeDraw.setPanel(bikeDirections);
            }else {
                bikeDirections.textContent = "Directions Unavailable " + status;
            }
        })
    }
   }

} 


