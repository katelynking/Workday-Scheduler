$(document).ready(function() {
var currentDay = moment().format("ddd, MMMM Do YYYY");
$("#date").text(currentDay);
var currentTime = moment().format("hh:mm:ss a");
$("#time").text(currentTime);


  

function runTimer() {
  $("#date").text(currentDay);
  $('#time').text(currentTime);
  colorChange();
  
  
  setInterval(function() {
    currentDay = moment().format("ddd, MMMM Do YYYY");
    $("#date").text(currentDay);
    currentTime = moment().format("hh:mm:ss a");
    $('#time').text(currentTime);
    colorChange();
  }, 1000);
}



function colorChange() {
  var currentHour = moment().hours();
  
  $(".notes").each(function() {
    var hour = parseInt($(this).attr("id"));

    if (hour > currentHour) {
        $(this).addClass("future");
    } else if (hour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }  
})
}
runTimer();  

});



$(".save-btn").click(function(){
  var saveBtn = $(this).attr("id");
  var notesInfo;
  switch (saveBtn) {
    case "09am-save":
      notesInfo = $("#09am").val();
      localStorage.setItem("09am-text", notesInfo);
      break;
    case "10am-save":
      notesInfo = $("#10am").val();
      localStorage.setItem("10am-text", notesInfo);
      break;
    case "11am-save":
      notesInfo = $("#11am").val();
      localStorage.setItem("11am-text", notesInfo);
      break;
    case "12pm-save":
      notesInfo = $("#12pm").val();
      localStorage.setItem("12pm-text", notesInfo);
      break;
    case "13pm-save":
      notesInfo = $("#13pm").val();
      localStorage.setItem("13pm-text", notesInfo);
      break;
    case "14pm-save":
      notesInfo = $("#14pm").val();
      localStorage.setItem("14pm-text", notesInfo);
      break;
    case "15pm-save":
      notesInfo = $("#15pm").val();
      localStorage.setItem("15pm-text", notesInfo);
      break;
    case "16pm-save":
      notesInfo = $("#16pm").val();
      localStorage.setItem("16pm-text", notesInfo);
      break;
    case "17pm-save":
      notesInfo = $("#17pm").val();
      localStorage.setItem("17pm-text", notesInfo);
  }
});

  function renderNotes() {
    $("#09am").text(localStorage.getItem("09am-text"));
    $("#10am").text(localStorage.getItem("10am-text"));
    $("#11am").text(localStorage.getItem("11am-text"));
    $("#12pm").text(localStorage.getItem("12pm-text"));
    $("#13pm").text(localStorage.getItem("13pm-text"));
    $("#14pm").text(localStorage.getItem("14pm-text"));
    $("#15pm").text(localStorage.getItem("15pm-text"));
    $("#16pm").text(localStorage.getItem("16pm-text"));
    $("#17pm").text(localStorage.getItem("17pm-text"));
  }

  renderNotes();


