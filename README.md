This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Title

Welcome to Ourpg 

## Motivation
I love homebrew and indie tabletop games created by citizen-designers across the internet. Sadly, there are few good apps for drafting documents made to serve as rulesets, and even fewer for distributing them to interested audiences. 

## Build Status
Ourpg is currently in an "alpha" state. I am both planning the role-out of new features such as user collaboration and edit commit messages, as well as experimenting with the viability of other useful tools, such as probability calculators. 

## Code Style
Indentation.

## Frameworks
This app uses React, Redux, and Redux-Thunk on the front end and Rails API with a Postgres database on the back end. 

## Installation
To get Ourpg up and running, its essential that you set Ruby on Rails and Postgres. In the back end, run bundle install, and then run the Rails server such that is running on localhost:3000. Then navigate into the Front End via commandline, install all necessary packages with npm install, then fire up the front end with NPM start. You may have to seed yourself. 

## How to use
Making use of the project is quite easy. Viewable to everyone is a home page with all rulesets that have been flagged as "published." Clicking on any rulseset with take you to an index of that rulesets component chapters. Click on any one of them to view that chapter of the rules. If you would like to view the entire ruleset as one contigous document, hit "export" and you will be offered a complete PDF of the rules for download. If the user wishes to create or edit their own games, they may sign up log in (at current there is only one hard coded user who is auto logged in, but this will change soon), and then have access to an index of personal games. It is presented much the same as the index of public games, except with increased functionality.  

## License
GNU 
