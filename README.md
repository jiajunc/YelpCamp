
Already deployed on heroku, please click [here](https://jiajun-yelpcamp.herokuapp.com/campgrounds)




# YelpCamp

Yelpcamp is a yelp-like campground review web app. Users can register and sign in this website to upload campground and reviews regard different campgrounds.


## Website

This app has been deployed on heroku, please click [here](https://yelpcamp--demo.herokuapp.com/) to view.

## Features

* Authentication:
  
  * User login with username and password

  * Admin sign-up with admin code

* Authorization:

  * One cannot manage posts and view user profile without being authenticated

  * One cannot edit or delete posts and comments created by other users

  * Admin can manage all posts and comments

* Manage campground posts with basic functionalities:

  * Create, edit and delete posts and comments

  * Upload campground photos

  * Display campground location on Google Maps
  
  * Search existing campgrounds

* Manage user account with basic functionalities:

  * Profile page setup with sign-up

* Flash messages responding to users' interaction with the app

* Responsive web design

### Custom Enhancements

* Update campground photos when editing campgrounds

* Use Helmet to strengthen security
 
## Getting Started

> This app contains API secrets and passwords that have been hidden deliberately, so the app cannot be run with its features on your local machine. However, feel free to clone this repository if necessary.

### Clone or download this repository

```sh
git clone https://github.com/lucasweng/yelp-camp.git
```

### Install dependencies

```sh
npm install
```

or

```sh
yarn install
```


## Built with

### Front-end

[ejs](http://ejs.co/)
[Google Maps APIs](https://developers.google.com/maps/)
[Bootstrap](https://getbootstrap.com/docs/3.3/)

### Back-end

Implemented the server side with [Node.js](https://github.com/expressjs/session#express-session).
Implemented authentication with [passport.js](http://www.passportjs.org/)
Implemented the database with [mongoDB](https://www.mongodb.com/)
Implemented the web with [Express.js](https://github.com/expressjs/session#express-session) framework

### Platforms
Deployed on [Heroku](https://www.heroku.com/)
Developed with [Cloud9](https://aws.amazon.com/cloud9/?origin=c9io)
