// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentDate = $("#currentdate");

const dayjsDate = dayjs().format("dddd, MMMM D, YYYY");
currentDate.text(dayjsDate);

const displayHour = $("#hour");
const displayMinute = $("#minutes");

const headerTime = dayjs();
const headerDate = displayHour.html(headerTime.$H);
displayMinute.html(headerTime.$m);

// if(localStorage is not empty){
// add html from localstorage
// }
const time = dayjs().format("HH");
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
function setBlockColour() {
  const timeblocks = $(".time-block");
  //create for loop to assign colour
  for (let index = 0; index < timeblocks.length; index++) {
    const currentTimeblock = $("#" + timeblocks[index].id);

    if (currentTimeblock.data("hour") == time) {
      currentTimeblock.addClass("present");
    } else if (currentTimeblock.data("hour") < time) {
      currentTimeblock.addClass("past");
    } else if (currentTimeblock.data("hour") > time) {
      currentTimeblock.addClass("future");
    }
  }
}

function displayTime() {
  setBlockColour();
}

displayTime();

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

$(".saveBtn").click(function () {
  let hour = this.parentElement.dataset.hour;
  let textValue = this.parentElement.children[1].value;
  localStorage.setItem([hour], textValue);
});
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
function checkContainers() {
  let timeContainers = $("#timecontainer").children();
  for (let i = 0; i < timeContainers.length; i++) {
    let value = timeContainers[i].dataset.hour;
    if (localStorage.getItem(value)) {
      timeContainers[i].children[1].value = localStorage.getItem(value);
    }
  }
}
checkContainers();
// TODO: Add code to display the current date in the header of the pag
git;
