<div align="center">
<img src="assets/images/isonboardlogo.png" height="350" width="350">
</div>

---

# is.onboard

---

## Aim of the site

This is a site that is used to on-board new employees of a (fictional) company. It is specifically focussed on the Information Systems (IS) department, and the new employee's 
relationship and induction with the IS function. It allows them to walk away from the experience with an understanding of how IS works for **them**, and what equipment choices they have to make that are relevant to their role. 

<!--Link to live site to add-->

---

## User stories

"As a new employee: I want to walk away from this interaction with the feeling that the company and the IS department are professional and have provided me with 
an online induction tailored towards **my** needs and the needs of my role. I want the experience to be quick and simple and to give me all the information **I** need to make the relevant choices to 
do my job effectively. I want to understand what the next steps are in terms of me starting my new role and how IS fits in with this. I want to understand a bit more about the geographical
location of the IS team and where this fits in with my geographical work location in case I need face to face support."

"As a manager in the IS department: I want to be certain that the new employee is being offered the right equipment for their role but can make choices that tailor the choice to their own preferences. 
I want to know that they have a good understanding of 
the point of contact relevant to **their** new role should they have any issues. I want them to walk away from the experience knowing exactly what the next steps are."

"As a senior manager in the company: I want to be certain that my new employees are engaged with the company from the start, and that they do not waste valuable 
time after actually starting their roles in working through what equipment they actually need to perform their role. I want to be sure that they have choices available to them 
that meet the needs of their role, their own personal preferences, and also within the boundaries of the purchasing cost restraints"

---

## Site features & wireframes

### View 1

This will give a basic introduction of what the site will achieve, ask for their name and employee number. A next button only will also be present.

### View 2

This will tell them the generic structure of the IS management team and also the IS contacts specific to their department. A next button will also be present.

### View 3

This will give them a choice of laptops to choose from, specific to their new role. Next and back buttons will be present.

### View 4

This will take their laptop choice and present the relevant choices for a case, a mouse and a keyboard. Next and back buttons will be present.

### View 5

This will take their department and laptop choices and give options for a lock, a screen, mouse mat, a riser and a mouse. Next and back buttons will be present.

### View 6

Through the Google maps API, this will show them where they will be physically be located when they start work, and how this location relates to the wider IS team.

### View 7

This will tell them what the next steps are.

### Wireframes

- [View 1 desktop & tablet](wireframes/p1desktoptablet.png) opens in same tab, press back to return
- [View 1 mobile](wireframes/p1mobile.png) opens in same tab, press back to return
- [View 2 desktop & tablet](wireframes/p2desktoptablet.png) opens in same tab, press back to return
- [View 2 mobile](wireframes/p2mobile.png) opens in same tab, press back to return
- [View 3 desktop & tablet](wireframes/p3desktoptablet.png) opens in same tab, press back to return
- [View 3 mobile](wireframes/p3mobile.png) opens in same tab, press back to return
- [View 4 desktop & tablet](wireframes/p4desktoptablet.png) opens in same tab, press back to return
- [View 4 mobile](wireframes/p4mobile.png) opens in same tab, press back to return
- [View 5 desktop & tablet](wireframes/p5desktoptablet.png) opens in same tab, press back to return
- [View 5 mobile](wireframes/p5mobile.png) opens in same tab, press back to return
- [View 6 desktop & tablet](wireframes/p6desktoptablet.png) opens in same tab, press back to return
- [View 6 mobile](wireframes/p6mobile.png) opens in same tab, press back to return
- [View 7 desktop & tablet](wireframes/p7desktoptablet.png) opens in same tab, press back to return
- [View 7 mobile](wireframes/p7mobile.png) opens in same tab, press back to return

---

## Theme & typography

The site will be a single page site with 7 different views, the first view will gather the name and employee number of the new starter and the 
views following this will change according to which department the employee will be working in or from previous choices made by them. If for example they work in the 
marketing department they will be presented with the option of laptop A or laptop B, if they choose laptop B then they will be presented with the relevant sized laptop case options.
Navigation will purely be through NEXT and BACK buttons. 

Given the target users are new employees, the site needs to be professional in terms of style & look to convey the feeling of professionalism.
The company would want to present itself as slick and professional, and the site should convey this. It should be very simple to use and need few instructions for use.

- Linear navigation, one step at a time using only "NEXT" or "BACK" to progress
- Simple, quick, intuitive. Asks exactly what is needed only
- Questions are based on either the department of the new employee or previous equipment choices made
- Overview of choices needed to be made with links present to further details if needed
- Simple pages, no information overload

---

## Features left to implement

- Not in the scope of this project, but future plans would be to automate follow up emails on progress
- Not in the scope of this project, but future plans would be to link this to inductions of all divisions of the company

---

## Technologies Used

- HTML, CSS & Javascript
- [JQuery](https://jquery.com) Javascript library, opens in same tab, press back to return
- [jQuery Validation Plugin](https://jqueryvalidation.org/) - Form validation plugin
- [Fontawesome](https://fontawesome.com/) for back & next arrows used through all pages, opens in same tab, press back to return
- [Hover.css](https://ianlunn.github.io/Hover/) for back & forward button effects, opens in same tab, press back to return
- [Google fonts](https://fonts.google.com/) for Baloo Thambo 2 font used through all pages, opens in same tab, press back to return
- [Favicon.io](https://favicon.io/) to generate favicon,opens in same tab, press back to return
- [Bootstrap](https://getbootstrap.com/) - for layout framework, opens in same tab, press back to return
- [Gitpod](https://www.gitpod.io/) - IDE used to code, opens in same tab, press back to return
- [GitHub](https://github.com/) - To host the repositories for this project and the live website preview, opens in same tab, press back to return
- [Balsamiq](https://balsamiq.com/) - used to design wireframes, opens in same tab, press back to return

---

## Testing

### Javascript testing

- Manually tested storage of form data by alerting information stored after onclick triggered



---

## Deployment

To deploy this page to GitHub Pages from its [GitHub repository]<!--(xxxxxxxxxxxxxxxxxxxxxxxxxxxxx)-->, the following steps were taken: 

1. From the menu items near the top of the page, select **Settings**.
2. Scroll down to the **GitHub Pages** section.
3. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
4. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
5. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.
 

### How to run this project locally

To clone this project from GitHub:

1. Under the repository name, click "Clone or download".
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
- [Freepik.com](https://www.freepik.com/free-photos-vectors/background") - for background image, created by Starline
- Richard Wells_lead for the README.md Deployment section

---