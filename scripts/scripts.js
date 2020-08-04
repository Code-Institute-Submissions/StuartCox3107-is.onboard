// this makes the opening page show view 1 only and hides 
//all other views once the page loads, until needed
$(document).ready(function () {
    $(".page2").hide();
    $(".page3").hide();
    $(".page4").hide();
    $(".page5").hide();
    $(".page6").hide();
});

// global variables declared of staff number entered & names etc
let staffnumber = [];
let userfirstname = "";
let userlastname = "";

// jquery mouse over/leave to change the 
//background color of the next button
$(".btn").on("mouseover", function () {
    $(this).css("background-color", "#52796f");
});

$(".btn").on("mouseleave", function () {
    $(this).css("background-color", "#566573");
});

// jquery mouse over/leave to change the background 
//color of the progress bar
$(".progress-bar").on("mouseover", function () {
    $(this).css("background-color", "#52796f");
});

$(".progress-bar").on("mouseleave", function () {
    $(this).css("background-color", "#566573");
});

// the below pushes the number entered into the 
//staffnumber variable on place 0-3 positions
$("#txtFirstDigit").on("input", function () {
    staffnumber[0] = parseFloat(this.value, 10);
});
$("#txtSecondDigit").on("input", function () {
    staffnumber[1] = parseFloat(this.value, 10);
});
$("#txtThirdDigit").on("input", function () {
    staffnumber[2] = parseFloat(this.value, 10);
});
$("#txtFourthDigit").on("input", function () {
    staffnumber[3] = parseFloat(this.value, 10);
});

// function to check that the entered staff numbers are 
//only from 1 to 5 in all 4 entries, makes sure nothing 
//else is entered
function checkStaffNumber() {
    const validNumbers = [
        1,
        2,
        3,
        4,
        5
    ];
    for (let index = 0; index < 4; index++) {
        const num = staffnumber[index];
        if (! validNumbers.includes(num)) {
            return false;
        }
    }
    return true;
}

// function to change the contact details on page 2 to 
//the relevant IS contact according to the 1st digit 
//of the staff number
let dep;
let contactFname;
function displayContactPage() {
    let contactLname;
    let contactPhone;
    switch (staffnumber[0]) {
        case 1: dep = "IS";
            contactFname = "Andrew";
            contactLname = "Chan";
            contactPhone = "1";
            break;
        case 2: dep = "Marketing";
            contactFname = "Emma";
            contactLname = "Harding";
            contactPhone = "2";
            break;
        case 3: dep = "Facilities";
            contactFname = "Simon";
            contactLname = "Anand";
            contactPhone = "3";
            break;
        case 4: dep = "Central Services";
            contactFname = "Laura";
            contactLname = "Kim";
            contactPhone = "4";
            break;
        case 5: dep = "Finance";
            contactFname = "Paul";
            contactLname = "Garcia";
            contactPhone = "5";
            break;
        default:
            alert("error in displaying the text");
            break;
    }
    // full name of the person IS contact
    let pName = document.createElement("p");
    pName.textContent = contactFname + " " + contactLname;
    pName.classList.add("font-weight-bold");

    // details & contact of the relevant contact person
    let pDetails = document.createElement("p");
    pDetails.textContent = `As you will be in the ${dep} department, 
    ${contactFname} will be your contact. You can call ${contactFname} 
  on 020 7581 100${contactPhone}, or email ${contactFname}.
  ${contactLname}@metatis.com`;

    let parent = document.querySelector("#employeecode1");
    parent.textContent = "";

    parent.appendChild(pName);
    parent.appendChild(pDetails);
}

// function for the submit button to allow for transition 
//to page 2 and display page 2 relevant information
//next button moves to page 3
$(".button1").on("click", function () {
    // onclick to store the names
    userfirstname = txtFirstName.value;
    userlastname = txtFamilyName.value;
    // if input passes test
    if (checkStaffNumber() === true) {
        $(".page1").hide();
        $(".page2").show();
        // call the display function
        displayContactPage();
        // or if input doesn't pass test
    } else {
        alert(`Please enter a valid employee number. Employee 
        numbers are four digits long and all numbers are between 
        1 and 5. you will have received this on your welcome email`);
    }
});

// the below will take the first digit of the staff number and use 
//it to populate page 3 with the correct introduction and laptop choices
let departmentName;
let departmentSpec;
let departmentScreenSpec;
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
function displayLaptopPage() {
    switch (staffnumber[0]) {
        case 1: departmentName = "IS";
            departmentSpec = " is lighting fast";
            departmentScreenSpec = "with fantastic definition";
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
        case 2: departmentName = "Marketing";
            departmentSpec = " is reasonably quick and has great graphics";
            departmentScreenSpec = `that allows you to 
            see crystal clear colour`;
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
        case 3: departmentName = "Facilities";
            departmentSpec = " is portable and robust";
            departmentScreenSpec = "that has excellent connectivity";
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
        case 4: departmentName = "Central Services";
            departmentSpec = " is great for multi-tasking";
            departmentScreenSpec = "with super high resolution";
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
            laptop2Link = "https://store.hp.com/UKStore/Merch/Offer.aspx?p=b-hp-elite-dragonfly-convertible";
            break;
        case 5: departmentName = "Finance";
            departmentSpec = " can cope with lots of data";
            departmentScreenSpec = "that is designed for spreadsheets";
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

    // adds department name and department requirements spec to into text
    let introText = document.createElement("p");
    introText.textContent = `As you will work in 
    the ${departmentName} department, 
    you will want a machine that ${departmentSpec}, 
    either of these options
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

    // adds relevant detail 1
    let laptop1Text2 = document.createElement("p");
    laptop1Text2.textContent = laptop1Detail1;
    let parent4 = document.querySelector("#laptop1feat1");
    parent4.textContent = "";
    parent4.appendChild(laptop1Text2);

    // adds relevant detail 2
    let laptop1Text3 = document.createElement("p");
    laptop1Text3.textContent = laptop1Detail2;
    let parent5 = document.querySelector("#laptop1feat2");
    parent5.textContent = "";
    parent5.appendChild(laptop1Text3);

    // adds relevant detail 3
    let laptop1Text4 = document.createElement("p");
    laptop1Text4.textContent = laptop1Detail3;
    let parent6 = document.querySelector("#laptop1feat3");
    parent6.textContent = "";
    parent6.appendChild(laptop1Text4);

    // adds relevant detail 4
    let laptop1Text5 = document.createElement("p");
    laptop1Text5.textContent = laptop1Detail4;
    let parent7 = document.querySelector("#laptop1feat4");
    parent7.textContent = "";
    parent7.appendChild(laptop1Text5);

    // adds relevant link
    const link1 = document.querySelector("#laptop1link");
    link1.setAttribute("href", laptop1Link);

    // adds relevant laptop name for second card
    let laptop2Text = document.createElement("h5");
    laptop2Text.textContent = laptopType2;
    let parent8 = document.querySelector("#laptop2name");
    parent8.textContent = "";
    parent8.appendChild(laptop2Text);

    // adds relevant detail 1
    let laptop2Text2 = document.createElement("p");
    laptop2Text2.textContent = laptop2Detail1;
    let parent9 = document.querySelector("#laptop2feat1");
    parent9.textContent = "";
    parent9.appendChild(laptop2Text2);

    // adds relevant detail 2
    let laptop2Text3 = document.createElement("p");
    laptop2Text3.textContent = laptop2Detail2;
    let parent10 = document.querySelector("#laptop2feat2");
    parent10.textContent = "";
    parent10.appendChild(laptop2Text3);

    // adds relevant detail 3
    let laptop2Text4 = document.createElement("p");
    laptop2Text4.textContent = laptop2Detail3;
    let parent11 = document.querySelector("#laptop2feat3");
    parent11.textContent = "";
    parent11.appendChild(laptop2Text4);

    // adds relevant detail 4
    let laptop2Text5 = document.createElement("p");
    laptop2Text5.textContent = laptop2Detail4;
    let parent12 = document.querySelector("#laptop2feat4");
    parent12.textContent = "";
    parent12.appendChild(laptop2Text5);

    // adds relevant link
    const link2 = document.querySelector("#laptop2link");
    link2.setAttribute("href", laptop2Link);
}

// function to move from page 2 to page 3
$(".button2").on("click", function () {
    $(".page2").hide();
    $(".page3").show();
    // call the display2 function
    displayLaptopPage();
});

// function to record laptop chosen
let chosenLaptop = "";

function recordLaptop() {
    if (document.getElementById("choice1").checked) {
        chosenLaptop = laptopType1;
        return 1;
    } else if (document.getElementById("choice2").checked) {
        chosenLaptop = laptopType2;
        return 2;
    } else {
        alert(`You REALLY REALLY REALLY want to choose a laptop 
        in this job, pen & paper just wont cut it!`);
        return 0;
    }
}

// function to allocate value to the laptopScreenSize variable

let laptopScreenSize = "";
let fifteenInchModels = [
    "Dell Precision 3540",
    "Acer ConceptD 7 Pro",
    "Acer ConceptD 5",
    "Asus ZenBook Pro 15",
    "Lenovo ThinkPad P1"
];
let seventeenInchModels = ["HP ZBook 9850", "Dell XPS 17", 
"Dell Precision 7740"];

function displayBagPage() {
    if (fifteenInchModels.includes(chosenLaptop)) {
        laptopScreenSize = "15 inch";
    } else if (seventeenInchModels.includes(chosenLaptop)) {
        laptopScreenSize = "17 inch";
    } else {
        laptopScreenSize = "13 inch";
    }
}

// function to move from page 3 to page 4 as long as choice has been made
$(".button3").on("click", function () {
    if (recordLaptop()) {
        //if user has selected something
        //call the display3 function and show the next page
        $(".page3").hide();
        $(".page4").show();
        displayBagPage();

        let bagIntroText = document.createElement("p");
        bagIntroText.textContent = `As you chose a ${laptopScreenSize} laptop, 
        please choose one of these two options. 
        We find this purely a matter of preference so just choose away!`;
        let parent13 = document.querySelector("#laptopintro");
        parent13.textContent = "";
        parent13.appendChild(bagIntroText);
    }
});


// function to record bag chosen, recorded as bagchoice1 or 
//bagchoice2, alerts if no choice made
let bagChosen;

function recordBag() {
    if (document.getElementById("bagchoice1").checked) {
        bagChosen = "soft bag";
        return 1;
    } else if (document.getElementById("bagchoice2").checked) {
        bagChosen = "hard bag";
        return 2;
    } else {
        alert(`Please make a choice, unless 
        you want to use a carrier bag!`);
        return 0;
    }
}

// function to move from page 4 to page 5
$(".button4").on("click", function () {
    if (recordBag()) {
        // user has selected something
        $(".page4").hide();
        $(".page5").show();
        let screenIntroText = document.createElement("p");
        screenIntroText.textContent = `Great, you chose a ${bagChosen} 
        and we will get that ordered. As you will work in 
        the ${dep} department, 
        you will want a screen ${departmentScreenSpec}, we can 
        recommend either of these.`;
        let parent14 = document.querySelector("#screenintro");
        parent14.textContent = "";
        parent14.appendChild(screenIntroText);
    }
});


// function to record screen chosen, recorded as screenchoice1 
//or screenchoice2, alerts if no choice made
let screenChosen;
function recordScreen() {
    if (document.getElementById("screenchoice1").checked) {
        screenChosen = "27 inch";
        return 1;
    } else if (document.getElementById("screenchoice2").checked) {
        screenChosen = "30 inch";
        return 2;
    } else {
        alert(`Please make a choice, or you will have your insy 
        winsy laptop screen only!`);
        return 0;
    }
}

// function to move from page 5 to page 6
$(".button5").on("click", function () {
    if (recordScreen()) {
        // user has selected something
        $(".page5").hide();
        $(".page6").show();
        let finalIntroText = document.createElement("p");
        finalIntroText.textContent = `You have made all the choices 
        you need to make to integrate smoothly into the ${dep} department, 
        by the time you start, your ${laptopType1} will be onsite, and 
        your IS contact, ${contactFname} will walk through the setup with 
        you, and make sure you are comfortable. ${contactFname} will 
        also be the person to speak to with any IS issues moving forward. 
        Again, welcome to Metatis and we trust that your career 
        with us will be fruitful!`;
        let parent15 = document.querySelector(".secondarytextfinal");
        parent15.textContent = "";
        parent15.appendChild(finalIntroText);

        console.log(`Name: ${userfirstname} ${userlastname}, Employee number: 
        ${staffnumber}, Department: ${dep}, Laptop chosen: ${chosenLaptop}, 
        Bag chosen: ${bagChosen}, Screen chosen: ${screenChosen}`);
    }
});

// function to alert that on a real 
//site it would display the company site
$(".button7").on("click", function () {
    alert(`On a live site for a real company at this point, 
    the page would have the company website 
    open in the same window`);
});

