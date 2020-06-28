


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


//jquery to disable manual entry of numbers to page 1 employee number. Code taken from stack overflow research code
$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});

var employeeOrder = [];

//function to store information on input
function informationStore() {
    var firstName = document.getElementById("txtFirstName").value;
    var familyName = document.getElementById("txtFamilyName").value;
    var firstDigit = document.getElementById("txtFirstDigit").value;
    alert ("Hi " + firstName +" " + familyName + " " +firstDigit + " ,Bye!")
}











