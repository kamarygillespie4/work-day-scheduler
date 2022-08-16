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
        if (blockTime == time) {
            $(this).addClass("present");
        } else(blockTime > time); {
            $(this).addClass("future");
        }
    })
}
pastPresentFuture(); // past present future function should immediately run on page load.

$(".save-button").on("click", function() {

    var eventTime = $(this).parent().attr("id");
    console.log(eventTime);

    var eventText = $(this).siblings("textarea").val();
    console.log(eventText);

    localStorage.setItem(eventTime, eventText);

})