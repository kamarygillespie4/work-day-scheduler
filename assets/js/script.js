var saveEvent = $(".save-button");

function storeEvent(event) {
    event.preventDefault();
    console.log("hello");
}


saveEvent.on("click", storeEvent);