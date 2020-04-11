"use strict";

// Wait until document is loaded
$(document).ready(function() {

    // Retrieve last page state from storage unless it's from a previous day
    const timestamp = moment(localStorage.getItem("timestamp"));
    const saveDay = parseInt(timestamp.format("DD"));
    const currDay = parseInt(moment().format("DD"));
    if (timestamp != null && saveDay === currDay)
        $("textarea").each(function(index) {
            $(this).text(localStorage.getItem(index.toString()));
        });

    // Display today's date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // Color-code time blocks
    function colorCode() {
        $(".hour").each(function() {
            // get value of time block
            const a = parseInt((moment($(this).text(), ["hh A"]).format("HH")));
            // get value of current hour
            const b = parseInt(moment().format("HH"));
            // assign color-code
            $(this).next().removeClass("past present future");
            if (a < b) $(this).next().addClass("past");
            else if (a > b) $(this).next().addClass("future");
            else $(this).next().addClass("present");
        });
    }
    colorCode();
    // Update color-codes every minute
    setInterval(function() { colorCode(); }, 60000);

    // Whenever user clicks the save button
    $(".saveBtn").on("click", function() {
        // save page state to local storage
        $("textarea").each(function(index) {
            localStorage.setItem(index.toString(), $(this).val());
        });
        // save timestamp to local storage
        localStorage.setItem("timestamp", moment().toISOString());
    });
});