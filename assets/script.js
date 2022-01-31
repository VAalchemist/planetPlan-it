
// get times from moment
const now = moment().format('MMMM Do YYYY');
let hour12 = moment().format('h');
let hour24 = moment().format('H');

// testing after hours
if (test) {
    hour12 = 1;
    hour24 = 13;
}

let $dateDisplay = $('#currentDay');
$dateDisplay.text(now);
  
const saveBtn = "assets\images\journal-plus.svg"; 

// parsing JSON string to an object
  let storedTask = JSON.parse(localStorage.getItem("storedTask"));

  if (test) { console.log(storedTask); }

  // retrieved task from localStorage updates the task array
  if (storedTask !== null) {
    taskTextArr = storedTask;
  } else {
    // should occur once the program is loaded into the browser
    taskTextArr = new Array(9);
    taskTextArr[0] = "Coffee time";
  }

  if (test) { console.log("array filled with text",taskTextArr); }

  // task element
  let $taskDiv = $('#taskContainer');
  $taskDiv.empty();

  if (test) { console.log("current time",hour12); }


  // loop through for fixed hours
for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;
}