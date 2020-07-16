
"use strict";

//this makes the opening page show view 1 only and hides all other views once the page loads
$(document).ready(function () {
  $(".page2").hide();
  $(".page3").hide();
  $(".page4").hide();
  $(".page5").hide();
  $(".page6").hide();
  $(".page7").hide();
});

// global variables declared of staff number entered & names etc
let staffnumber = [];
let userfirstname = '';
let userlastname = '';

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

//the below pushes the number entered into the staffnumber variable, accepts decimals
$('#txtFirstDigit').on('input', function () {
  staffnumber[0] = parseFloat(this.value, 10);
});
$('#txtSecondDigit').on('input', function () {
  staffnumber[1] = parseFloat(this.value, 10);
});
$('#txtThirdDigit').on('input', function () {
  staffnumber[2] = parseFloat(this.value, 10);
});
$('#txtFourthDigit').on('input', function () {
  staffnumber[3] = parseFloat(this.value, 10);
});

//function to check that the entered staff numbers are only from 1 to 5 in all 4 entries
function checkStaffNumber() {
  const validNumbers = [1,2,3,4,5];
  for (let index = 0; index < 4; index++) {
    const num = staffnumber[index];
    if (!validNumbers.includes(num)){
      console.log(num + " not valid");
      return false;
    }
  }
  return true;
}

//function for the submit button to allow for transition to page 2
$(".button1").on('click', function () {
  //onclick to store the names
  userfirstname = txtFirstName.value;
  userlastname = txtFamilyName.value;
  //testing of name storage
  console.log(`Name: ${userfirstname} ${userlastname}`);
  //testing of recording of staff number and number of staff number digits
  console.log(`staffnumber is ${staffnumber} and its length is ${staffnumber.length}`);
  //if input passes test
  if (checkStaffNumber() === true) {
    $(".page1").hide();
    $(".page2").show();
    //call the display function
    display();
  //or if input doesn't pass test  
    } else {
    alert("Please enter a valid employee number. Employee numbers are four digits long and all numbers are between 1 and 5. you will have received this on your welcome email")
  }
});

function display() {
  let dep;
  let contactFname;
  let contactLname;
  let contactPhone;
  switch (staffnumber[0]) {
    case 1:
      dep = "IS";
      contactFname = "Andrew";
      contactLname = "Chan";
      contactPhone = "1";
      break;
    case 2:
      dep = "Marketing";
      contactFname = "Emma";
      contactLname = "Harding";
      contactPhone = "2";
      break;
    case 3:
      dep = "Facilities";
      contactFname = "Simon";
      contactLname = "Anand";
      contactPhone = "3";
      break;
    case 4:
      dep = "Central Services";
      contactFname = "Laura";
      contactLname = "Kim";
      contactPhone = "4";
      break;
    case 5:
      dep = "Finance";
      contactFname = "Paul";
      contactLname = "Garcia";
      contactPhone = "5";
      break;
    default:
      alert('error in displaying the text');
      break;
  }
  let pName = document.createElement('p');
  pName.textContent = contactFname + " " + contactLname;
  pName.classList.add('font-weight-bold');

  let pDetails = document.createElement('p');
  pDetails.textContent = `As you will be in the ${dep} department, ${contactFname} will be your contact. You can call ${contactFname} 
  on 020 7581 100${contactPhone}, or email, ${contactFname}.${contactLname}@metatis.com`;

  let parent = document.querySelector('#employeecode1');
  parent.textContent = "";

  parent.appendChild(pName);
  parent.appendChild(pDetails);

}
