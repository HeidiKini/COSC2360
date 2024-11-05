"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Heidi Kinikini 
      Date: 11/4/2024   

      Filename: project09-02a.js
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

document.getElementById("submitButton").onclick = showData;

function showData () {
  sessionStorage.setItem(riderName.id, riderName.value);
  sessionStorage.setItem(ageGroup.id, ageGroup.value);
  sessionStorage.setItem(bikeOption.id, bikeOption.value);
  sessionStorage.setItem(routeOption.id, routeOption.value);
  sessionStorage.setItem(accOption.id, accOption.value);
  sessionStorage.setItem(region.id, region.value);
  sessionStorage.setItem(miles.id, miles.value);
  sessionStorage.setItem(comments.id, comments.value);

  location.href = "project09-02b.html";
}