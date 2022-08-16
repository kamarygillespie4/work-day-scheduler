var date = moment(); // grabs date from moment.js
var time = moment().hours(); // grabs time from moment js


var dateandTime = date.format("dddd, MMMM Do YYYY, h:mm a"); // formats date on page and time
$("#currentDay").text(dateandTime); //sets text value of currentDay paragraph to value of Date and Time

console.log(time);


function pastPresentFuture() {
    $(".event-text").each(function() {
        var blockTime = $(this).parent().attr("id");
        console.log(blockTime);
        if (blockTime < time) {
            $(this).addClass("past");
        }
        if (blockTime === time) {
            $(this).addClass("present");
        } else(blockTime > time); {
            $(this).addClass("future");
        }
    })
}
pastPresentFuture(); // past present future function should immediately run on page load.

$(".save-button").on("click", function() {

    var eventTime = $(this).parent().attr("id");
    console.log(eventTime); //grabs id(time for event) and saves it in a variable called eventTime

    var eventText = $(this).siblings("textarea").val();
    console.log(eventText); //grabs text area input and saves it in a variable called eventText

    localStorage.setItem(eventTime, eventText); // stores these items as a pair in local storage

})

// sets the textarea inside the div with the given id to the value in localstorage associated with that event time;
$("#7 textarea").val(localStorage.getItem("7"));
$("#8 textarea").val(localStorage.getItem("8"));
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));
$("#18 textarea").val(localStorage.getItem("18"));
$("#19 textarea").val(localStorage.getItem("19"));
$("#20 textarea").val(localStorage.getItem("20"));
$("#21 textarea").val(localStorage.getItem("21"));
$("#22 textarea").val(localStorage.getItem("22"));