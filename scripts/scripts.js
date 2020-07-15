
"use strict";

//this makes the opening page show view 1 only and hides all other views
$(".page2").hide();
$(".page3").hide();
$(".page4").hide();
$(".page5").hide();
$(".page6").hide();
$(".page7").hide();

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

//the below pushes the number entered into the staffnumber variable
$('#txtFirstDigit').on('input', function() {
  staffnumber.push(parseInt(this.value, 10));
});
$('#txtSecondDigit').on('input', function () {
  staffnumber.push(parseInt(this.value, 10));
});
$('#txtThirdDigit').on('input', function () {
  staffnumber.push(parseInt(this.value, 10));
});
$('#txtFourthDigit').on('input', function () {
  staffnumber.push(parseInt(this.value, 10));
});

//onclick to store the names
$(".button1").on('click', function() {
    userfirstname=(txtFirstName.value);
    userlastname=(txtFamilyName.value);
    console.log(`Name: ${userfirstname} ${userlastname}`);
 });



//onclick to check that the staffnumber variable is 4 digits long and the first digit is between 1 and 5
$(".button1").on('click', function() {
    //testing of recording of name, staff number and number of staff number digits
    console.log(`staffnumber array is ${staffnumber} and its length is ${staffnumber.length}`);

  if(staffnumber.length===4){
    if(1<=staffnumber[0]&& staffnumber[0]<=5){
     
    //after all checks passed and staff number & name stored, hides page 1 and displays relevant page 2
    $(".page1").hide();
    $(".page2").show();
    }   
    }else{
      alert("Please enter a valid employee number. Employee numbers are four digits long and the first digit is between 1 and 5. you will have received this on your welcome email")
  }
  });

/*the below will take the first digit of the staff number and use it to populate page two with the correct contact person
function display() {
  const dep;      
  const contactFname;
  const contactLname;
  const contactPhone;
  switch (usernumber[0]) {
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
      break;
  }
  let pName = document.createElement('p');
  pName.textContent = contactFname;
  pName.classList.add('font-weight-bold');

  let pDetails = document.createElement('p');
  pDetails.textContent = `As you will be in the ${dep} department, ${contactFname} will be your contact. You can call ${contactFname} 
  on 020 7581 100${contactPhone}, or email, ${contactFname}.${contactLname}@metatis.com`;

  let cardText = document.querySelector('.card-text');

  cardText.appendChild(pName);
  cardText.appendChild(pDetails);

  document.querySelector()
}
*/