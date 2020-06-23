
//jquery mouse over/leave to change the background color of the next & back buttons
$(".btn").on("mouseover", function() {
  $(this).css("background-color", "#52796f");
});

$(".btn").on("mouseleave", function() {
  $(this).css("background-color", "#566573");
});

//jquery mouse over/leave to change the background color of the progress bar
$(".progress-bar").on("mouseover", function() {
  $(this).css("background-color", "#52796f");
});

$(".progress-bar").on("mouseleave", function() {
  $(this).css("background-color", "#566573");
});

//jquery to hide back button on page 1
$(".page1 #backbtn").hide();
