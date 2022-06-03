/***********************************************
   REMOVE COMMENTS BEFORE SUBMITTING YOUR CODE
************************************************/

// 1. Global variables - (a). from HTML elements. (b). global application state (data)
// 2. Initial actions need to be taken for my app - loading existing persisted data and populating the webpage
// 3. Waiting for user actions via event listerners
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5]; 
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);
var currentTime = moment().format("H");




// listen for save button clicks
function doSomethingAboutClickOrSaveButton(event) {
  // get nearby values
  // Store the parent id of the save button clicked to a variable and use it as key to localStorage
  // Hint: parent id is stored in the id attribute of the parent
  // console.log("this: ", this) // jQuery
  // console.log("event.target: ", event.target);
  // console.log("event.currentTarget: ", event.currentTarget);

  // store user input in textarea to a variable
  // Hint: textarea is one of siblings of the clicked button or could be traversed as one of children of the parent of save button

  // Save key and value in variables in localStorage

  // Optional: Show notification that item was saved to localStorage by adding class 'show'
  // Hint: grab the notification element and add class

  // Optional: Timeout to remove 'show' class after 5 seconds
  // Hint: global timeout function that only get invoke once

};

$('.saveBtn').on('click', doSomethingAboutClickOrSaveButton);
// Alternative way to set up jquery event listener
// $('.saveBtn').click(doSomethingAboutClickOrSaveButton);

function doSomethingAboutTimeBlockColors() {
  // get current number of hours and store it to a variable
  // Hint: get current hour from moment js

  // Loop over time blocks
  // get each time block element and retrieve id attribute
  // retrieve the number from id and convert it into integer
  // store the integer to a variable
  // compare the value of this variable with the current hour
  // add class accordingly based on whether this time block element is in the past, or present
  // Hint: remove previous class values before adding class

}

doSomethingAboutTimeBlockColors();

// Initial action: set up interval to check if current time needs to be updated
var interval = setInterval(doSomethingAboutTimeBlockColors, whateverNumberOfSeconds);

// Initial action: load any saved data from localStorage
// Hint: identify each textarea elements using parent id and its class

// Initial action: display current day on page using moment js

// Optional: what does $(document).ready(function() {}) do and how can you add it to your code

