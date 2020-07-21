
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
// function to change the contact details on page 2 to the relevant IS contact according to the 1st digit of the staff number
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
  //full name of the person IS contact
  let pName = document.createElement('p');
  pName.textContent = contactFname + " " + contactLname;
  pName.classList.add('font-weight-bold');

  //Details & contact of the relevant contact person
  let pDetails = document.createElement('p');
  pDetails.textContent = `As you will be in the ${dep} department, ${contactFname} will be your contact. You can call ${contactFname} 
  on 020 7581 100${contactPhone}, or email, ${contactFname}.${contactLname}@metatis.com`;

  let parent = document.querySelector('#employeecode1');
  parent.textContent = "";

  parent.appendChild(pName);
  parent.appendChild(pDetails);
}

//function to move from page 2 to page 3
$(".button2").on('click', function () {
    $(".page2").hide();
    $(".page3").show();
    //call the display2 function
    display2();
});

//the below will take the first digit of the staff number and use it to populate page 3 with the correct introduction and laptop choices

function display2() {
    let departmentName;
    let departmentSpec;
    let laptopType1;
    let laptop1Detail1;
    let laptop1Detail2;
    let laptop1Detail3;
    let laptop1Detail4;
    let laptop1Link;
    let laptopType2;
    let laptop2Detail1;
    let laptop2Detail2;
    let laptop2Detail3;
    let laptop2Detail4;
    let laptop2Link;
    switch (staffnumber[0]) {
        case 1:
            departmentName = "IS";
            departmentSpec = " is lighting fast";
            laptopType1 = "Dell Precision 3540";
            laptop1Detail1 = "15.6 inch screen, i7 processor";
            laptop1Detail2 = "16 GB Memory";
            laptop1Detail3 = "512 GB SSD";
            laptop1Detail4 = "Windows 10 Pro";
            laptop1Link = "https://www.dell.com/en-uk/work/shop/workstations/precision-3540-mobile-workstation/spd/precision-15-3540-laptop";
            laptopType2 = "HP ZBook 9850";
            laptop2Detail1 = "17.3 inch screen, i7 processor";
            laptop2Detail2 = "32 GB Memory";
            laptop2Detail3 = "512 GB SSD";
            laptop2Detail4 = "Windows 10 Pro";
            laptop2Link = "https://store.hp.com/UKStore/Merch/Product.aspx?id=6TV06EA&opt=ABU&sel=NTB";
            break;
            case 2:
            departmentName = "Marketing";
            departmentSpec = " is reasonably quick and has great graphics";
            laptopType1 = "MacBook Air";
            laptop1Detail1 = "13.3 inch screen, i5 processor";
            laptop1Detail2 = "8 GB Memory";
            laptop1Detail3 = "256 GB SSD";
            laptop1Detail4 = "Space grey casing";
            laptop1Link = "https://www.apple.com/uk/shop/buy-mac/macbook-air/space-grey-1.1ghz-quad-core-core-i5-processor-with-turbo-boost-up-to-3.5ghz-512gb#";
            laptopType2 = "Acer ConceptD 7 Pro";
            laptop2Detail1 = "15.6 inch screen, i7 processor";
            laptop2Detail2 = "32 GB Memory";
            laptop2Detail3 = "512 GB SSD";
            laptop2Detail4 = "White casing";
            laptop2Link = "https://uk-store.acer.com/conceptd-7-pro-laptop-cn715-71p-white-4";
            break;
            case 3:
            departmentName = "Facilities";
            departmentSpec = " is portable and robust";
            laptopType1 = "Acer ConceptD 5";
            laptop1Detail1 = "15.6 inch screen, i7 processor";
            laptop1Detail2 = "16 GB Memory";
            laptop1Detail3 = "512 GB SSD";
            laptop1Detail4 = "Windows 10 Pro";
            laptop1Link = "https://uk-store.acer.com/conceptd-5-laptop-cn515-71-black";
            laptopType2 = "Dell XPS 17";
            laptop2Detail1 = "17 inch screen, i7 processor";
            laptop2Detail2 = "32 GB Memory";
            laptop2Detail3 = "256 GB SSD";
            laptop2Detail4 = "Windows 10 Pro";
            laptop2Link = "https://www.dell.com/en-uk/shop/cty/pdp/spd/xps-17-9700-laptop";
            break;
            case 4:
            departmentName = "Central Services";
            departmentSpec = " is great for multi-tasking";
            laptopType1 = "Asus ZenBook Pro 15";
            laptop1Detail1 = "15.6 inch screen, i9 processor";
            laptop1Detail2 = "16 GB Memory";
            laptop1Detail3 = "512 GB SSD";
            laptop1Detail4 = "Touchscreen";
            laptop1Link = "https://www.asus.com/uk/Laptops/ASUS-ZenBook-Pro-15-UX580GD/";
            laptopType2 = "HP Elite dragonfly";
            laptop2Detail1 = "13.3 inch screen, i7 processor";
            laptop2Detail2 = "32 GB Memory";
            laptop2Detail3 = "512 GB SSD";
            laptop2Detail4 = "Windows 10 Pro";
            laptop2Link = "https://store.hp.com/UKStore/Merch/Product.aspx?id=8MK77EA&opt=ABU&sel=NTB";
            break;
            case 5:
            departmentName = "Finance";
            departmentSpec = " can cope with lots of data";
            laptopType1 = "Lenovo ThinkPad P1";
            laptop1Detail1 = "15.6 inch screen, i9 processor";
            laptop1Detail2 = "16 GB Memory";
            laptop1Detail3 = "512 GB SSD";
            laptop1Detail4 = "Windows 10 Pro";
            laptop1Link = "https://www.lenovo.com/gb/en/laptops/thinkpad/p-series/P1-Gen-2/p/22WS2WPP102";
            laptopType2 = "Dell Precision 7740";
            laptop2Detail1 = "17.3 inch screen, i7 processor";
            laptop2Detail2 = "32 GB Memory";
            laptop2Detail3 = "512 GB SSD";
            laptop2Detail4 = "Windows 10 Pro";
            laptop2Link = "https://www.dell.com/en-uk/work/shop/laptops/precision-7740-mobile-workstation/spd/precision-17-7740-laptop/n002p7740emea";
            break;
        default:
            alert("error in employee department");
            break;
    }

//adds department name and department requirements spec to into text
let introText = document.createElement("p");
introText.textContent = `As you will work in the ${departmentName} department, you will want a machine that ${departmentSpec}, either of these options
    will be fantastic for you.`;
let parent2 = document.querySelector("#p3intro");
parent2.textContent = "";
parent2.appendChild(introText);

//adds relevant laptop name for first card
let laptop1Text = document.createElement("h5");
laptop1Text.textContent = laptopType1;
let parent3 = document.querySelector("#laptop1name");
parent3.textContent = "";
parent3.appendChild(laptop1Text);

//adds relevant detail 1
let laptop1Text2 = document.createElement("p");
laptop1Text2.textContent = laptop1Detail1;
let parent4 = document.querySelector("#laptop1feat1");
parent4.textContent = "";
parent4.appendChild(laptop1Text2);

//adds relevant detail 2
let laptop1Text3 = document.createElement("p");
laptop1Text3.textContent = laptop1Detail2;
let parent5 = document.querySelector("#laptop1feat2");
parent5.textContent = "";
parent5.appendChild(laptop1Text3);

//adds relevant detail 3
let laptop1Text4 = document.createElement("p");
laptop1Text4.textContent = laptop1Detail3;
let parent6 = document.querySelector("#laptop1feat3");
parent6.textContent = "";
parent6.appendChild(laptop1Text4);

//adds relevant detail 4
let laptop1Text5 = document.createElement("p");
laptop1Text5.textContent = laptop1Detail4;
let parent7 = document.querySelector("#laptop1feat4");
parent7.textContent = "";
parent7.appendChild(laptop1Text5);

/*meant to use an if else to link to the a "want to know more" href element and use the correct href
let laptopLink = document.createElement("a");
laptopLink.a = laptop1Link;
if (laptopType1 === "Dell Precision 3540") {
    let link1 = document.querySelector("#laptop1link");
    link1.appendChild(laptopLink);
}
else {
    alert("Choose department 1 for testing");
}
*/


//adds relevant laptop name for second card
let laptop2Text = document.createElement("h5");
laptop2Text.textContent = laptopType2;
let parent8 = document.querySelector("#laptop2name");
parent8.textContent = "";
parent8.appendChild(laptop2Text);

//adds relevant detail 1
let laptop2Text2 = document.createElement("p");
laptop2Text2.textContent = laptop2Detail1;
let parent9 = document.querySelector("#laptop2feat1");
parent9.textContent = "";
parent9.appendChild(laptop2Text2);

//adds relevant detail 2
let laptop2Text3 = document.createElement("p");
laptop2Text3.textContent = laptop2Detail2;
let parent10 = document.querySelector("#laptop2feat2");
parent10.textContent = "";
parent10.appendChild(laptop1Text3);

//adds relevant detail 3
let laptop2Text4 = document.createElement("p");
laptop2Text4.textContent = laptop2Detail3;
let parent11 = document.querySelector("#laptop2feat3");
parent11.textContent = "";
parent11.appendChild(laptop1Text4);

//adds relevant detail 4
let laptop2Text5 = document.createElement("p");
laptop2Text5.textContent = laptop2Detail4;
let parent12 = document.querySelector("#laptop2feat4");
parent12.textContent = "";
parent12.appendChild(laptop2Text5);
};

//function to record laptop chosen, alerts if no choice made
function recordLaptop() {
  if (document.getElementById('choice1').checked) {
    console.log('Choice 1 was selected');
    return 1;
  } else if (document.getElementById('choice2').checked) {
    console.log('Choice 2 was selected');
    return 2;
  } else {
    alert("Please make a choice, unless you want to use pen & paper!");
    return 0;
  }
}

//function to move from page 3 to page 4 as long as choice made
$(".button3").on('click', function () {
  if (recordLaptop()) {
    // user has selected something
    $(".page3").hide();
    $(".page4").show();
    //call the display3 function
    display3();
  }
});

//function to allocate a value to bagSize depending on the laptop chosen
function display3() {
    let bagSize = "";
    if (laptopType1 || laptopType2 == "Dell Precision 3540" || "Acer ConceptD 7 Pro" || "Acer ConceptD 5" || "Asus ZenBook Pro 15" || "Lenovo ThinkPad P1") {
        bagSize = "15 inch";
    }    else if (laptopType1 || laptopType2 == "HP ZBook 9850" || "Dell XPS 17" || "Dell Precision 7740") {
        bagSize = "17 inch";
    }   else {
        bagSize = "13 inch";
    }    
}


//page 4, header referring to laptop size chosen, card pictures and features unchanged
let bagIntroText = document.createElement("p");
bagIntroText.textContent = `As you chose a ${bagSize} laptop, please choose one of these two options.`;
let parent13 = document.querySelector('#laptopintro');
parent13.textContent = "";
parent13.appendChild(bagIntroText);

//function to record bag chosen, recorded as bagchoice1 or bagchoice2, alerts if no choice made
function recordBag() {
  if (document.getElementById('bagchoice1').checked) {
    console.log('Bag choice 1 was selected');
    return 1;
  } else if (document.getElementById('bagchoice2').checked) {
    console.log('Bag choice 2 was selected');
    return 2;
  } else {
    alert("Please make a choice, unless you want to use a carrier bag!");
    return 0;
  }
}

//function to move from page 4 to page 5
$(".button4").on('click', function () {
  if (recordBag()) {
    // user has selected something
    $(".page4").hide();
    $(".page5").show();
  }
});

let screenIntroText = document.createElement("p");
screenIntroText.textContent = `As you will work in the ${departmentName} department, you will want a screen that allows you to see crystal clear colour, we can recommend either of these.`;
let parent2 = document.querySelector("#screenintro");
parent2.textContent = "";
parent2.appendChild(screenIntroText);
