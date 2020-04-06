"use strict";
(() => {
    const MOMENT = moment();

    // Retrieve last page state from storage
    var state = localStorage.getItem("state");
    if (state != null) $(".container").html(state);

    //Display today's date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    //Color-code time blocks
    $(".hour").each(function() {
        //get value of time block
        var a = parseInt((moment($(this).text(), ["hh A"]).format("HH")));
        //get value of current hour
        var b = parseInt(moment().format("HH"));
        //assign color code
        if (a < b) $(this).next().addClass("past");
        else if (a > b) $(this).next().addClass("future");
        else $(this).next().addClass("present");
    });

    //Whenever user clicks the save button
    $(".saveBtn").on("click", function() {
        //store the corresponding text in the page
        $(this).prev().text($(this).prev().val());
        //save page state to local storage
        localStorage.setItem("state", $(".container").html());
    });
})();