var date = dayjs().format("dddd MMMM D");
// console.log(date);

// check the time and adds/changes the class in the html to change the color of the blocks
$(function () {
  let hour = dayjs().hour() - 7;

  $(".time-block").each(function () {
    var currentHourEl = $(this).attr("id").split("-")[1];
    if (hour < currentHourEl) {
      $(this).addClass("future");
    } else if (hour == currentHourEl) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });

  //  allows the save button to function at saves textbox to local
  $(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var parent = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(parent, value);
  });
  // pulls desc from local storage and displays into the box
  $(".description").each(function () {
    var parentId = $(this).parent().attr("id");
    var text = localStorage.getItem(parentId);
    $(this).val(text);
  });
  
  let displayedDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(displayedDate);
});
