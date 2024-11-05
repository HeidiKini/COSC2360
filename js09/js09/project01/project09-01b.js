"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Heidi Kinikini 
      Date: 11-4-2024   

      Filename: project09-01b.js
*/

let query = location.search.slice(1);

query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

let cardFields = query.split(/&/g);

for (let item of cardFields) {
      let nameValue = item.split(/=/);
      let name = nameValue[0];
      let value = nameValue[1];

      document.getElementById(name).textContent = value;
}