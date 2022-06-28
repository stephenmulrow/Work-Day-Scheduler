$(document).ready(function () {

  var currentMoment = moment().format("MMMM Do YYYY");
  var displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = currentMoment;
  var currentHour = moment().format("HH");


  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });


  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".to-do").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

 
  $("#hour-09 .to-do").val(localStorage.getItem("09"));
  $("#hour-10 .to-do").val(localStorage.getItem("10"));
  $("#hour-11 .to-do").val(localStorage.getItem("11"));
  $("#hour-12 .to-do").val(localStorage.getItem("12"));
  $("#hour-13 .to-do").val(localStorage.getItem("13"));
  $("#hour-14 .to-do").val(localStorage.getItem("14"));
  $("#hour-15 .to-do").val(localStorage.getItem("15"));
  $("#hour-16 .to-do").val(localStorage.getItem("16"));
  $("#hour-17 .to-do").val(localStorage.getItem("17"));
});