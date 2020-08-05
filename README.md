<div align="center">
<img src="assets/images/multidevicemockup.png" width="350">
</div>

<div align="center">
<img src="assets/images/isonboardlogo.png" height="350" width="350">
</div>

---

# is.onboard

---

## Aim of the site

This is a site that is used to on-board new employees of a (fictional) company. It is specifically focussed on the Information Systems (IS) department, and the new employee's 
relationship and induction with the IS function. It allows them to walk away from the experience with an understanding of how IS works for **them**, and what equipment choices they have to make that are relevant to their role. 

**Link to live site:** https://stuartcox3107.github.io/is.onboard/ (opens in same tab, click back if needed)

---

## User stories

"As a new employee: I want to walk away from this interaction with the feeling that the company and the IS department are professional and have provided me with 
an online induction tailored towards **my** needs and the needs of my role. I want the experience to be quick and simple and to give me all the information **I** need to make the relevant choices to 
do my job effectively. I want to understand what the next steps are in terms of me starting my new role and how IS fits in with this."

"As a manager in the IS department: I want to be certain that the new employee is being offered the right equipment for their role but can make choices that tailor the choice to their own preferences. 
I want to know that they have a good understanding of 
the point of contact relevant to **their** new role should they have any issues. I want them to walk away from the experience knowing exactly what the next steps are."

"As a senior manager in the company: I want to be certain that my new employees are engaged with the company from the start, and that they do not waste valuable 
time after actually starting their roles in working through what equipment they actually need to perform their role. I want to be sure that they have choices available to them 
that meet the needs of their role, their own personal preferences, and also within the boundaries of the purchasing cost restraints"

"As a supply chain manager: I want to be confident that all new starters are receiving products that are from our nominated suppliers"

---

## Site features & wireframes

### View 1: Welcome, name & staff number page

This will give a basic introduction of what the site will achieve, ask for their name and employee number. A next button only will also be present.

- [View 1 desktop & tablet](wireframes/p1desktoptablet.png) opens in same tab, press back to return
- [View 1 mobile](wireframes/p1mobile.png) opens in same tab, press back to return

### View 2: Introduction to IS contacts page

This will tell them the generic structure of the IS management team and also the IS contact specific to their department. A next button will also be present.

- [View 2 desktop & tablet](wireframes/p2desktoptablet.png) opens in same tab, press back to return
- [View 2 mobile](wireframes/p2mobile.png) opens in same tab, press back to return

### View 3: Choose a laptop page

This will give them a choice of laptops to choose from, specific to their new role. A next button will also be present.

- [View 3 desktop & tablet](wireframes/p3desktoptablet.png) opens in same tab, press back to return
- [View 3 mobile](wireframes/p3mobile.png) opens in same tab, press back to return

### View 4: Choose a bag page

This will take their laptop choice and present the relevant choices for a case. A next button will also be present.

- [View 4 desktop & tablet](wireframes/p4desktoptablet.png) opens in same tab, press back to return
- [View 4 mobile](wireframes/p4mobile.png) opens in same tab, press back to return

### View 5: Choose a screen page

This will take their department and laptop choices and give options for a screen. A next button will also be present.

- [View 5 desktop & tablet](wireframes/p5desktoptablet.png) opens in same tab, press back to return
- [View 5 mobile](wireframes/p5mobile.png) opens in same tab, press back to return

### View 6L Next steps page

This will tell them what the next steps are and confirm the information entered.

- [View 6 desktop & tablet](wireframes/p6desktoptablet.png) opens in same tab, press back to return
- [View 6 mobile](wireframes/p6mobile.png) opens in same tab, press back to return

---

## Theme & typography

The site will be a single page site with 6 different views, the first view will gather the name and employee number of the new starter and the 
views following this will change according to which department the employee will be working in, or from previous choices made by them. If for example they work in the 
marketing department they will be presented with the option of laptop A or laptop B, if they choose laptop B then they will be presented with the relevant sized laptop case options.
Navigation will purely be through NEXT buttons. 

Given the target users are new employees, the site needs to be professional in terms of style & look to convey the feeling of professionalism. At the same time
though the company wants to present a playful side and as such the colours and images should reflect this also.
The company would want to present itself as slick and professional, and the site should convey this. It should be very simple to use and need few instructions for use.

- Linear navigation, one step at a time using only "NEXT" to progress
- Simple, quick, intuitive. Asks exactly what is needed only
- Questions and display is based on either the department of the new employee or previous equipment choices made
- Overview of choices needed to be made with links present to further details if needed
- Simple pages, no information overload

---

## Features left to implement

- Not in the scope of this project, but future plans would be to automate follow up emails on progress
- Not in the scope of this project, but future plans would be to link this to inductions of all divisions of the company
- All relevant choices will be stored at the final page in variables. On a live site these would be sent as an email to the IS team, but in this case are console logged
- If I were doing this project again I would look at using JSON to store more of the strings

---

## Technologies Used & credits

- HTML, CSS & Javascript
- [JQuery](https://jquery.com) Javascript library, opens in same tab, press back to return
- [Fontawesome](https://fontawesome.com/) for back & next arrows used through all pages, opens in same tab, press back to return
- [Hover.css](https://ianlunn.github.io/Hover/) for back & forward button effects, opens in same tab, press back to return
- [Google fonts](https://fonts.google.com/) for Baloo Thambo 2 font used through all pages, opens in same tab, press back to return
- [Favicon.io](https://favicon.io/) to generate favicon,opens in same tab, press back to return
- [Bootstrap](https://getbootstrap.com/)  for layout framework, opens in same tab, press back to return
- [Gitpod](https://www.gitpod.io/)  IDE used to code, opens in same tab, press back to return
- [GitHub](https://github.com/)  To host the repositories for this project and the live website preview, opens in same tab, press back to return
- [Balsamiq](https://balsamiq.com/)  used to design wireframes, opens in same tab, press back to return
- [https://background-generator.com/]  used to generate background vector
- [https://undraw.co/illustrations]  used for cartoon image on site
- [https://www.shapedivider.app/] used to generate the site wavy shape divider

---

## Testing

### General

All views tested for various devices using Chrome Developer tools: Moto G4, Galaxy S5, Pixel 2, Pixel 2XL, iPhone 5 SE, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhone X, iPad, iPad Pro, Galaxy Fold, Surface Duo

Live site tested on Chrome, IE, Firefox, Edge

### HTML

- Code ran through [W3C HTML markup validation service](https://validator.w3.org/#validate_by_uri) opens in same tab, press back to return. Passed with no errors or warnings.

### CSS

- Code ran through [W3S CSS markup validation service](https://jigsaw.w3.org/css-validator/) opens in same tab, press back to return. Passed with no errors or warnings.

### Javascript

- Code ran through [JS lInt.com](https://jslint.com/) opens in same tab, press back to return. Only issue of the laptop link lines being over 80 characters

### View 1: Welcome, name & staff number page

- Tested to check that staff numbers will not accept letters or non-decimal characters, alert if incorrect
- Tested to check that only whole numbers from 1-5 are accepted through the scroll arrows
- Tested to check that manual entry of numbers outside 1-5 can be entered, alert if incorrect
- Tested to check that only whole numbers are accepted on manual input, alert if incorrect
- Tested to check that the first name input is required before moving to the next page
- Tested to check that the first family input is required before moving to the next page
- Tested to check that progress bar moves as expected
- Chrome debugger tool used to check that the variables are given values for the user first name, family name, all 4 digits of the employee number,
and that the first digit of the employee number stores the correct department variable

### View 2: Introduction to IS contacts page

- All possible 1st digit entries from 1-5 tested to ensure that page 2 individual contact text populated correctly (name, number & email)
- Tested to check that progress bar moves as expected

### View 3: Choose a laptop page

- Tested to check that each of the 5 possible employee departments entered on page 1 display the correct introduction text including the department and features needed
- Tested to check that each of the 5 possible employee departments entered on page 1 display the correct laptop choices, and related laptop features in the cards
- Tested to ensure that one (not zero or 2) laptops can be chosen in order to move to the next view. Alert present if user tries to choose none
- Tested to check that all laptop links work for all scenarios (5 possible outcomes, 10 links)
- Tested to check that progress bar moves as expected
- Chrome debugger tool used to check that the variable is assigned the correct value for storing the laptop chosen (laptop model and size of screen)


### View 4: Choose a bag page

- Tested to check that all previous laptop choices display the correct text in terms of reminding the user of the laptop size chosen
- Tested to ensure that one (not zero or 2) bag can be chosen in order to move to the next view. Alert present if user tries to choose none
- Tested to check that progress bar moves as expected
- Chrome debugger tool used to check that the bag type variable is assigned the correct value for storing the bag chosen 

### View 5: Choose a screen page

- Tested all "Want to know more" links
- Tested all previous bag choices display correct text
- Tested all all relevant department 1st digit entries display correct department in text
- Tested all relevant department 1st digit entries display correct screen features in text
- Tested to check that progress bar moves as expected
- Chrome debugger tool used to check that the screen size variable is assigned the correct value for storing the bag chosen 

### View 6: Next steps page

- Chrome debugger tool used to check that all variables are assigned the correct values for the inputs and choices made
- All department choices tested to populate relevant text
- All laptop choices tested to populate relevant text
- All department choice tested to populate relevant text
- Tested to check that progress bar moves as expected
- Finish button tested to ensure alert appears

### Issues arising

-


---

## Deployment

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/StuartCox3107/is.onboard), the following steps were taken: 

1. From the menu items near the top of the page, select **Settings**.
2. Scroll down to the **GitHub Pages** section.
3. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
4. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
5. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.
 

### How to run this project locally

To clone this project from GitHub:

1. Under the repository name, click "Code".
2. In the Clone with HTTPs section, copy the clone URL for the repository. 
3. In your local IDE open Git Bash.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type ```git clone```, and then paste the URL you copied in Step 3.
```console
git clone https://github.com/StuartCox3107/is.onboard.git
```
6. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).

---

### Credits & acknowledgements

- [Simen Daehlin](https://github.com/Eventyret) - [The Padwan Project](https://github.com/Eventyret/Padawan) for boilerplate template
- Richard Wells_lead for the README.md Deployment section

---