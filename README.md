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

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
