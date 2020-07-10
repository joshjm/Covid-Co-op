# Covid Co-op
A place to advertise and share what equipment you have on hand to battle covid
Based on the idea of https://www.oma-aus.com/

## Name ideas
- covid supply network
- covid co-op
- PERFORMANT MK I
- Supply Dropper

## Description
### key features 
- user login
- inventory management system (CRUD) and orders
- maps API
- data visualization
- hecking cool dev-team
- jwt for login using react

###
Stack:
#### front end
- typescript
- babel-node
- React
- bootstrap

#### backend
- rails as an ORM and API.

### About
A place to advertise what supplies you have to help fight covid. You can list what quantity of facemasks, gloves, sanitizer etc you have, and whether they are free for anyone to collect, or whether you need to be reimbursed. 

You can see locally what supplies are nearby, to help prevent unecessary travel distance. 

The app will feature tracking graphs to show supply trends around australia, and will show hospitals current demand. 

Hospitals and healthcare providers can make fulfillment requents to page as a whole, that people can fill in part or in total. 

Equipment dropoff locations can also be listed.

### Roadmap:
- [ ] Create a backend that can track current supply, locations, hospitals, orders/demand,
- [ ] create a 'twitter clone' or ebay clone that can display posts people make about their current supply, which displays live from the database
- [ ] create user login, and the ability to create new items of supply - not just displaying seed data. 
- [ ] Display locations of supply on a map, either a custom map or using google maps/open maps API (preferred)
- [ ] allow hospitals to make requests for equipment (new migration/models)
- [ ] show analytics for total supply/demand across australia, with time based tracking
- [ ] dummy credit card payment system(?)
- [ ] deploy to heroku
- [ ] quality filtering of PPE. 
- [ ] database of people who has differnent levels of sterlization
- [ ] way-stations/relay points for dropoff not directly at hospitals

## Tools
- [react google maps](https://github.com/tomchentw/react-google-maps)
