 var today = moment();
 $("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


 var timeOfDay = ["09" , "10", "11", "12" , "1", "2", "3", "4", "5"]


 var displayedTime = $("data-time")

 var currentTime = moment().format('h')
 
 for (var i = 0; i < timeOfDay.length; i++){
   var currentHour = timeOfDay[i]
 }

 if (timeOfDay[i] < currentTime){
   $(".desccription").addClass("present")
 }
 


