var date = moment(); // grabs date from moment.js
var time = moment().hours(); // grabs time from moment js

var dateandTime = date.format("dddd, MMMM Do YYYY, h:mm a"); // formats date on page and time
$("#currentDay").text(dateandTime); //sets text value of currentDay paragraph to value of Date and Time

console.log(time);

var saveEvent = $(".save-button");


saveEvent.on("click", function(event) {
    event.preventDefault();
    console.log("test");
});