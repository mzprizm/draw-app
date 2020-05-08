![](hello-world.gif)

## Project Overview: Draw App

_With so many virtual meetings lately, we need easier ways to whiteboard digitally. Plus, drawing is  a playful, artistic way of passing time._

### Project Links

- [github repo](https://github.com/mzprizm/draw-app)

### Project Description

We wish there were a free, easy real-time virtual whiteboard app! Whether you're playing pictionary, tackling tough algos with your classmates, or just having fun doodling without wasting paper, Draw App is the one for you!

You open the browser, and just start drawing with your mouse (or finger if you're on mobile). 

Draw App lets users draw in the browser, erase in the browser, and save their drawings.  If time permits, more drawing features will be added, perhaps even ability to input text and add titles upon save.

### Wireframes

- [wireframes](https://res.cloudinary.com/mzprizm/image/upload/v1585315843/Screen_Shot_2020-03-27_at_6.29.35_AM_l3ljpo.png)
- [react architecture](https://docs.google.com/drawings/d/1JHA2GmCaWnYUhfoBDY1f9NPjtdV8rhGYHhxbOGapDYw/edit)

### Time/Priority Matrix
[Time-priority Matrix](https://docs.google.com/drawings/d/1TO5TRVcUEK9qGF6cnxtz1UyaMwTM2WM7zHg9Yfhz1CU/edit)

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

### Components
| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Main | This will render the drawing canvas, any tools, buttons etc. | 
| About | The header stays, the main switches to showing /about | 
| Canvas | allows the drawings to take place in real time with Pusher

| Component | Priority | Estimated Time | 
| --- | :---: |  :---: | 
| Prep | MVP | 10hrs|
| Wireframes | MVP | 2.5 hrs |
| Architecture | MVP | 1 hr |
| Components: Index, app, main, about | MVP | 2 hrs | 
| Components: Canvas, drawing tools | MVP | 8 hrs | 
| Back end setup |  MVP | 2 hrs |
| Back end full CRUD (create drwaing, see it, update it, delete it, see all drawings) | MVP | 2hrs |
| Styling | MVP | 5hrs | 
| Getting support | MVP | 2hrs | 
| Cleaning code up / present | MVP | 3hr | 
| Total | MVP | ## hrs| 


### Additional Libraries

### Code Snippet