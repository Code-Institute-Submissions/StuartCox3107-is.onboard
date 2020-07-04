
//jquery mouse over/leave to change the background color of the next button
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

//function to store p1 information on input
function informationStore() {
    var firstName = document.getElementById("txtFirstName").value;
    var familyName = document.getElementById("txtFamilyName").value;
    var firstDigit = document.getElementById("txtFirstDigit").value;
    alert ("Hi " + firstName +" " + familyName + " " +firstDigit + " ,Bye!")
}

//jquery validation plugin function to validate staff id number input

$(function()
{
    $("#p1form").validate(
      {
        rules: 
        {
          label1: 
          {
            required: true,
            range:[1,5]
          },
          label2: 
          {
            required: true,
            range:[0,9]
          },
          label3:
          {
            required: true,
            range:[0,9]  
          },
          label4:
          {
            required: true,
            range:[0,9]
          }
        }
       });	
});


















