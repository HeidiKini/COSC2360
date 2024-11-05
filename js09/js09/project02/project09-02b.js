"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Heidi Kinikini 
      Date: 11/4/2024   

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");


riderName.textContent = sessionStorage.getItem(riderName.id);
ageGroup.textContent = sessionStorage.getItem(ageGroup.id);
bikeOption.textContent = sessionStorage.getItem(bikeOption.id);
routeOption.textContent = sessionStorage.getItem(routeOption.id);
accOption.textContent = sessionStorage.getItem(accOption.id);
region.textContent = sessionStorage.getItem(region.id);
miles.textContent = sessionStorage.getItem(miles.id);
comments.textContent = sessionStorage.getItem(comments.id);