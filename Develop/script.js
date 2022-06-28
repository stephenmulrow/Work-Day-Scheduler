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
    event.preventDefault()
    
    var toDo = document.querySelector(".to-do9")
    var textEntry = toDo.value

    localStorage.setItem("to-do9" , textEntry)

})

});
 var listNineAm = localStorage.getItem("to-do9")

 if(listNineAm) {
  document.getElementById("hour9").value = listNineAm
 }



 $(".saveBtn").click(function (event) {
  event.preventDefault()
  
  var toDo = document.querySelector(".to-do10")
  var textEntry = toDo.value

  localStorage.setItem("to-do10" , textEntry)

})

var listNineAm = localStorage.getItem("to-do10")

if(listNineAm) {
document.getElementById("hour10").value = listNineAm
}

 $(".saveBtn").click(function (event) {
  event.preventDefault()
  
  var toDo = document.querySelector(".to-do11")
  var textEntry = toDo.value

  localStorage.setItem("to-do11" , textEntry)

})

var listNineAm = localStorage.getItem("to-do11")

if(listNineAm) {
document.getElementById("hour11").value = listNineAm
}

 $(".saveBtn").click(function (event) {
  event.preventDefault()
  
  var toDo = document.querySelector(".to-do12")
  var textEntry = toDo.value

  localStorage.setItem("to-do12" , textEntry)

})

var listNineAm = localStorage.getItem("to-do12")

if(listNineAm) {
document.getElementById("hour12").value = listNineAm
}

 $(".saveBtn").click(function (event) {
  event.preventDefault()
  
  var toDo = document.querySelector(".to-do13")
  var textEntry = toDo.value

  localStorage.setItem("to-do13" , textEntry)

})

var listNineAm = localStorage.getItem("to-do13")

if(listNineAm) {
document.getElementById("hour13").value = listNineAm
}

 $(".saveBtn").click(function (event) {
  event.preventDefault()
  
  var toDo = document.querySelector(".to-do14")
  var textEntry = toDo.value

  localStorage.setItem("to-do14" , textEntry)

})

var listNineAm = localStorage.getItem("to-do14")

if(listNineAm) {
document.getElementById("hour14").value = listNineAm
}

 $(".saveBtn").click(function (event) {
  event.preventDefault()
  
  var toDo = document.querySelector(".to-do15")
  var textEntry = toDo.value

  localStorage.setItem("to-do15" , textEntry)

})

var listNineAm = localStorage.getItem("to-do15")

if(listNineAm) {
document.getElementById("hour15").value = listNineAm
}

 $(".saveBtn").click(function (event) {
  event.preventDefault()
  
  var toDo = document.querySelector(".to-do16")
  var textEntry = toDo.value

  localStorage.setItem("to-do16" , textEntry)

})

var listNineAm = localStorage.getItem("to-do16")

if(listNineAm) {
document.getElementById("hour16").value = listNineAm
}

 $(".saveBtn").click(function (event) {
  event.preventDefault()
  
  var toDo = document.querySelector(".to-do17")
  var textEntry = toDo.value

  localStorage.setItem("to-do17" , textEntry)

})

var listNineAm = localStorage.getItem("to-do17")

if(listNineAm) {
document.getElementById("hour17").value = listNineAm
}


