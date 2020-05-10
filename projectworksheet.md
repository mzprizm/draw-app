![](hello-world.gif)

## Project Overview: Draw App

_With virtual meetings, we need an easy, free way to whiteboard digitally. Besides that, drawing is  a playful, artistic way of passing time._

### Project Links

- [github repo](https://github.com/mzprizm/draw-app)

### Project Description

We wish there were a free, easy real-time virtual whiteboard app! Now, there is. Whether you're playing pictionary, tackling tough algos with your classmates, or just having fun doodling without wasting paper, Draw App is the one for you!

You open the browser, and just start drawing with your mouse (or finger if you're on mobile). 

Draw App lets a user draw in the browser, erase in the browser, and save the drawings.  If time permits, more drawing features will be added, perhaps even ability to input text and add titles upon save. 

Inspiration:
[Pusher tutorial with old react](https://pusher.com/tutorials/live-paint-react)
[Example of how it saves in local storage](https://github.com/embiem/react-canvas-draw/blob/master/demo/src/index.js)
[advanced React Draw examples](https://embiem.github.io/react-canvas-draw/)

### Wireframes

- [wireframes](https://www.figma.com/file/mzIVbu3QmRXZAXlVXXMbs6/Untitled?node-id=0%3A1)
- [react architecture](https://docs.google.com/drawings/d/1doPdkU9MWTkRGpOQoilYF5nI2cV_w947-W5oUYJeCJo/edit?usp=sharing)

### Time/Priority Matrix
[Time-priority Matrix](https://docs.google.com/drawings/d/1pRNoZt9zOMwXjxH9K_5iqyELHGdzMLLsa-bx95cAjXs/edit?usp=sharing)

### MVP / Post - MVP
#### MVP 
- Mongo, Node, Express, React. ( Pusher / Cors / Canvas )
- Front end and back end connected, functioning and deployed
- Render drawing in real time on website in browser
- Allow user to interact with the website, save 
- simple minimalist responsive styling 
- 2 colors
- ability to erase drawing, save drawing

#### PostMVP 

- More drawing features
- Ability to share link to see real time drawing, no screen-share required
- Ability to collaborate
- ability to type or render text onto the screen also (as reference, or to display a problem to solve)
- sticky social shares
- a nice contact page with social icons / links
- cursor shape options (pencil, eraser)

### Components
| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Main | This will render the drawing canvas, any tools, buttons etc. | 
| About | The header stays, the main switches to showing /about | 
| Canvas | allows the drawings to take place in real time with Pusher
| Tools | change colors, save, etc. |

| Component | Priority | Estimated Time | 
| --- | :---: |  :---: | 
| Prep | MVP | 10hrs|
| Wireframes | MVP | 2.5 hrs |
| Architecture | MVP | 1 hr |
| Components: Index, app, main, about | MVP | 2.5 hrs | 
| Components: Canvas, drawing tools | MVP | 8 hrs | 
| Back end setup |  MVP | 2 hrs |
| Back end full CRUD (create drwaing, see it, update it, delete it, see all drawings) | MVP | 4hrs |
| Styling | MVP | 5hrs | 
| Getting support | MVP | 2hrs | 
| Cleaning code up / present | MVP | 3hr | 
| Total | MVP | 40 hrs| 


### Additional Libraries

### Code Snippet