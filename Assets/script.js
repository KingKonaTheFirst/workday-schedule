var date = dayjs().format("dddd MMMM D");
console.log(date);


// check the time and adds/changes the class in the html to change the color of the blocks
$(function (){
  let hour = dayjs().hour();
  
    $('.time-block').each(function(){
    var currentHourEl = $(this).attr("id").split("-")[1]
      if (hour < currentHourEl){
        $(this).addClass("future")
        } else if(hour == currentHourEl){
          $(this).addClass("present")
            }else{
              $(this).addClass("past")
    }})

});

$(document).ready(function () {
  // listen for save button clicks
  $('.saveBtn').on('click', function () {
    // get nearby values
    var value = $(this).siblings('.description').val();
    var parent = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(parent, value);
  });
});



//************************************************************************************************************************************************* */

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page
