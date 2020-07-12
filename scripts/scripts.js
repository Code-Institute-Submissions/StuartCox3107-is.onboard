
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

//function to allow for removing & showing page elements from display
function showElement(element){
  element.style.visibility = 'block';
}

function hideElement(element){
  element.style.visibility = 'hidden';
}

// global array of staff number entered & names
let staffnumber = [];
let userfirstname = '';
let userlastname = '';

const handles = {};


//The below checks that all 4 employee numbers entered are a number and pushes the number entered into the staffnumber variable
$('#txtFirstDigit').on('input', function() {
  let n1 = document.querySelector('#txtFirstDigit').value;
  if(jQuery.type(n1) === "number"){
    staffnumber.push(int(n1));
  }
});
$('#txtSecondDigit').on('input', function() {
  let n2 = document.querySelector('#txtSecondDigit').value;
  if(jQuery.type(n2) === "number"){
    staffnumber.push(int(n2));
  }
});
$('#txtThirdDigit').on('input', function() {
  let n3 = document.querySelector('#txtThirdDigit').value;
  if(jQuery.type(n3) === "number"){
    staffnumber.push(int(n3));
  }
});
$('#txtFourthDigit').on('input', function() {
  let n4 = document.querySelector('#txtFourthDigit').value;
  if(jQuery.type(n4) === "number"){
    staffnumber.push(int(n4));
  }
});

//checks that the staffnumber variable is 4 digits long and the first digit is between 1 and 5
$(handles.button1).on('click', function(){
  if(staffnumber.length===4){
    if(1<=staffnumber[0]&& staffnumber[0]<=5){
     
      //after all checks passed and staff number & name stored, hides page 1 and displays relevant page 2
      hideElement(handles.page1);
      showElement(handles.page2);

      display();
    }
    else{
      // first number out of range
      console.log("1st digit not valid")
    }
    }else{
    // print error, they should fill it
    print("Please enter a number")
  }
  });


//test to check whether staffnumber variable is being stored
alert(staffnumber);

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
      contactPhone = "001";
      break;
    case 2:
        dep = "Marketing";
        contactFname = "Emma";
        contactLname = "Harding";
        contactPhone = "002";
        break;
    case 3:
        dep = "Facilities";
        contactFname = "Simon";
        contactLname = "Anand";
        contactPhone = "003";
        break;
    case 4:
        dep = "Central Services";
        contactFname = "Laura";
        contactLname = "Kim";
        contactPhone = "004";
        break;
    case 5:
        dep = "Finance";
        contactFname = "Paul";
        contactLname = "Garcia";
        contactPhone = "005";
        break;   
    default:
      break;
  }
  let pName = document.createElement('p');
  pName.textContent = contact;
  pName.classList.add('font-weight-bold');

  let pDetails = document.createElement('p');
  pDetails.textContent = `As you will be in the ${dep} department, ${contactFname} will be your contact. You can call ${contactFname} 
  on 07917 581 , ${contactPhone}, or email, ${contactFname}.${contactLname}@metatis.com`;

  let cardText = document.querySelector('.card-text');

  cardText.appendChild(pName);
  cardText.appendChild(pDetails);

  document.querySelector()
}