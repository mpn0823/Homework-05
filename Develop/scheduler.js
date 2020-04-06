"use strict";
(() => {
    const MOMENT = moment();

    //Retrieve last page state from storage
    var state = localStorage.getItem("state");
    if (state != null) $(".container").html(state);

    //Display today's date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    //Whenever user clicks the save button
    $(".saveBtn").on("click", function() {
        //store the corresponding text in the page
        $(this).prev().text($(this).prev().val());
        //save page state to local storage
        localStorage.setItem("state", $(".container").html());
    });







})();