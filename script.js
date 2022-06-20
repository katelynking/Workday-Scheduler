$(document).ready(function() {

var times = {
  before: ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am"],
  during: ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  after: ["6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]
}; 
var currentDay = moment().format("ddd, MMMM Do YYYY");
$("#date").text(currentDay);
var currentTime = moment().format("hh:mma");
$("#time").text(currentTime);
var currentHour;
  

function runTimer() {
  $("#date").text(currentDay);
  $("#time").text(currentTime);
  colorChange();
  
  let displayTime = setInterval(function() {
    // currentTime = moment().format("hh:mma");
    $("#time").text(currentTime);
    colorChange();
  }, 1000);
}


function colorChange() {
  currentHour = moment().format("hha");

  if (times.before = currentHour) {
      $(".notes").css("background-color", "#d3d3d3");
  }

  if (times.after = currentHour) {
    $(".notes").css("background-color", "#d3d3d3")
  }
  
  if (times.during = currentHour) {
    $("#" + currentHour).css("background-color", "#f378ce");
    
    for (let i = 0; i < times.during.indexOf(currentHour); i++) {
      $("#" + times.during[i]).css("background-color", "#d3d3d3");
    }
    
    for (let i = times.during.length - 1; i > times.during.indexOf(currentHour); i--) {
      $("#" + times.during[i]).css("background-color", "81ca81");
      }
    }
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
    case "01pm-save":
      notesInfo = $("#01pm").val();
      localStorage.setItem("01pm-text", notesInfo);
      break;
    case "02pm-save":
      notesInfo = $("#02pm").val();
      localStorage.setItem("02pm-text", notesInfo);
      break;
    case "03pm-save":
      notesInfo = $("#03pm").val();
      localStorage.setItem("03pm-text", notesInfo);
      break;
    case "04pm-save":
      notesInfo = $("#04pm").val();
      localStorage.setItem("04pm-text", notesInfo);
      break;
    case "05pm-save":
      notesInfo = $("#05pm").val();
      localStorage.setItem("05pm-text", notesInfo);
  }
});

  function renderNotes() {
    $("#09am").text(localStorage.getItem("09am-text"));
    $("#10am").text(localStorage.getItem("10am-text"));
    $("#11am").text(localStorage.getItem("11am-text"));
    $("#12pm").text(localStorage.getItem("12pm-text"));
    $("#01pm").text(localStorage.getItem("01pm-text"));
    $("#02pm").text(localStorage.getItem("02pm-text"));
    $("#03pm").text(localStorage.getItem("03pm-text"));
    $("#04pm").text(localStorage.getItem("04pm-text"));
    $("#05pm").text(localStorage.getItem("05pm-text"));
  }

  renderNotes();

