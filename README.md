# Portfolio Site V2

* **Author:** Hayden Hanson
* **URL:** haydenhanson.dev
* **Netlify Deployment URL:** https://haydenhanson.netlify.app/

### Credit Where Its Due:
* Tailwind CSS
* Daisy UI
* Fireship YT Channel
* Inspirations: 

### Documentation of Web App and React Components

**General App Description:** This web application serves as a portfolio for myself! I had a portfolio [site](https://mason.gmu.edu/~hhanson2/) before. It was my first attempt at a portfolio site and though it looks okay, it's not quite to the standard I would expect from myself now. This portfolio site is mobile responsive, contains multiple React components, and demonstrates all of my knowledge of CSS styling and frontend design principles. No CSS framework was used during the development of this app, this was all me! :)

Preface for grader - not all of the mobile responsiveness is fully operational, please view my site on desktop for now. If anything happens to look jumbled at all, just hit ctrl - and zoom out 1 or 2 ticks, on the contrary if it looks super spaced out due to a large screen zoom in 1 or 2 clicks. Everything fits well on the screens available to me, in the Chrome browser. Thanks!

* **React Component 1: Navbar** 
  * *Functionality:* Displays a sticky navigation for the site.
  * *Interactivity:* The user can hover over each option and have a nice CSS effect to look at. Responsive to multiple screen sizes.
  
* **React Component 2: Hero** 
  * *Functionality:* Displays a welcome and introduction to the site, AKA a hello from me, since this is a portfolio site.
  * *Interactivity:* There are SVG circles that I was playing around with, they are responsive to multiple screen sizes and do _not_ interfere with the text.
  
* **React Component 3: ProjectTile** 
  * *Functionality:* Displays a projects basic information - Name, Type, and a nice photo.
  * *Interactivity:* The user can hover over this tile to get a nice CSS animation, displaying the cursor as a pointer notifying that this is also a button. Clicking the button will route the user to the corresponding ProjectPage - detailed later.
  
* **React Component 4: Portfolio** 
  * *Functionality:* Displays a grid of ProjectTiles, with some of my most notable projects I have completed.
  * *Interactivity:* This grid is responsive to many screen sizes. 
  
* **React Component 5: SkillTile** 
  * *Functionality:* Displays a tool's picture and name.
  * *Interactivity:* Auto-Scrolls horizontally across the screen with the rest of the SkillTiles.
  
* **React Component 6: Skills** 
  * *Functionality:* Displays a general overview of my skills.
  * *Interactivity:* Important links can be hovered and clicked on. Responds to different screen sizes.
  
* **React Component 7: Contact** 
  * *Functionality:* Displays a closing message and how to contact me.
  * *Interactivity:* Font size changes in response to different screen sizes.
  
* **React Component 8: Footer** 
  * *Functionality:* Displays icons for GitHub, LinkedIn, my Resume and a button to bring the user to the top of the page.
  * *Interactivity:* Icons have fun animation on hover.
  
* **React Component/Page 1: HomePage** 
  * *Functionality:* Displays my work/portfolio and some of my more general skills, along with a contact section and a footer.
  * *Interactivity:* The page is responsive to different screen sizes. The user can also interact with the ProjectTile and Footer.
  
* **React Component/Page 2: SkillsPage** 
  * *Functionality:* Displays my skills in more detail than the home page.
  * *Interactivity:* The page is responsive to different screen sizes. The user can also interact with the Footer.
  
* **React Component/Page 3: AboutPage** 
  * *Functionality:* Displays information about me.
  * *Interactivity:* The page is responsive to different screen sizes. The user can also interact with the Footer.
  
* **React Component/Page 4: ProjectPage** 
  * *Functionality:* Displays information about a project when the corresponding ProjectTile is clicked on.
  * *Interactivity:* The page is responsive to different screen sizes. The user can also interact with the Footer.
 
