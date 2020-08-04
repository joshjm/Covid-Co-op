# Covid Co-op
A place to advertise and share what equipment you have on hand to battle covid
Based on the idea of https://www.oma-aus.com/

**[Relational Model](https://docs.google.com/drawings/d/19rR_shnmXq3-8fINedSf1_5HKc0NyXGFbh7hTcxJJ8o/edit)**

heroku backend http://covid-co-op.herokuapp.com

GH-Pages frontend https://joshjm.github.io/Covid-Co-op/
sample user credentials: username josh@gmail.com password chicken
### Front end deployment guide
https://create-react-app.dev/docs/deployment/#github-pages

Deploy with `npm run deploy`
Run `npm install` before trying to deploy

If you have issues with 'gh-pages branch already exists', run `node_modules/gh-pages/bin/gh-pages-clean.js` as gh-pages doesnt run acleanup and is a tad buggy.


## Name ideas
- covid supply network
- covid co-op
- PERFORMANT MK I
- Supply Dropper

## Description
### key features
- user login with error handling
- inventory management system (CRUD) and orders
- maps API
- data visualization
- hecking cool dev-team
- Rails session management with JS-Cookie management in React

###
Stack:
#### front end
- typescript
- babel-node
- React
- bootstrap
- JS-Cookie management

#### backend
- Rails as an ORM and API.
- Rails session management for user auth

### About
A place to advertise what supplies you have to help fight covid. You can list what quantity of face-masks, gloves, sanitizer etc you have, and whether they are free for anyone to collect, or whether you need to be reimbursed.

You can see locally what supplies are nearby, to help prevent unnecessary travel distance.

The app will feature tracking graphs to show supply trends around Australia, and will show hospitals current demand.

Hospitals and healthcare providers can make fulfillment requests to page as a whole, that people can fill in part or in total.

Equipment dropoff locations can also be listed.

### Roadmap:
- [x] Create a backend that can track current supply, locations, hospitals, orders/demand,
- [ ] create a 'twitter clone' or ebay clone that can display posts people make about their current supply, which displays live from the database
- [x] create user login,
- [ ]  and the ability to create new items of supply - not just displaying seed data.
- [ ] Display locations of supply on a map, either a custom map or using google maps/open maps API (preferred)
- [ ] allow hospitals to make requests for equipment (new migration/models)
- [ ] show analytics for total supply/demand across australia, with time based tracking
- [ ] dummy credit card payment system(?)
- [x] deploy to heroku
- [ ] quality filtering of PPE.
- [ ] database of people who has differnent levels of sterlization
- [ ] way-stations/relay points for dropoff not directly at hospitals

## Tools
- [react google maps](https://github.com/tomchentw/react-google-maps)

## Timeline
### Weekend
- [x] Get models set up
- [x] Get basic front end up set
### 13/7/2020
- [x] be able to communicate to backend with axios, to perform CRUD
- [x] User Auth - session tokens
- [x] Rails: Bcrypt, CORS, HTTP cookies handler, session controller, update user model & controller, seed data
- [x] React: user auth props, login/ logout (status), registration/ sign up, login, error handling/ redirect
- [x] Deploy backend to heroku
- [x] Bug fix backend
- [x] Set up postman for testing user login

### 14/7/2020
- [x] Api to convert address to GPS - google geocoding API

MAP
- [ ] Display locations of products on the map
- [ ] Clickable icons to get more info, and link to description page/link to product
- [ ] Show location of hospitals/healthcare providers on the map

ORDER
- [ ] Request/Order edit form
- [ ] Orders show page (admin)
- [ ] Shopping cart -*in progress*
- [ ] New Request/Order submit form
- [ ] User purchase history, directed from User
- [ ] User request history, directed from User

TRANSACTION
- [ ] Transaction Page (list of transactions), directed from Order Page (admin)

PRODUCT
- [x] Product list (stock)
- [x] Product description (single product)
- [ ] Create Product(/Add Inventory) PageDummy Payment Page
- [x] Product filter???

USER
- [x] User sign up
- [x] User log in
- [x] Log out button, redirect to home page
- [x] User details (personal)
- [x] User details edit (personal)
- [ ] All users details (admin)
- [x] My Products page (displays a users products)
- [ ] Add new Product page -*in progress*
- [ ] Optional: Recently viewed page, Saved searches

### 15/7/2020
- [ ] analytics/ graph of total supply/demand of product types
- [ ] Covid information/ real-time info on where supplies are most needed

### 16/7/2020
- [ ] Mobile app deployment (android)
- [ ] Convert dummy payment page to working payment page

### 17/7/2020  Final Day
- [ ] Testing
- [ ] Ui improvements
