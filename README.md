# Project Name: Gaming App

### Project Description

A ReactJS application to fetch and consume data for a REST API and utilise React Scaling tools like Axio and Redux.

<img src="images/GamingApp.png">

### Dependancies

    npm install react-router-dom
            - Render components based on where we are in the URL.
            - Wrap <App> in index.js with <BrowserRouter>
            - import {Switch , Route} from 'react-router-dom';  - In App.js
    npm install framer-motion
            -Add animation to web pages
    npm install react-intersection-observer
            -Allows page to perform a particular function once in view. Example:- Scroll.
            -import { useInView } from "react-intersection-observer";
    npm install styled-components
            - Enables styling of components, same as SASS but in Javascript.

### Setup Instructions

The project runs from an API provided by https://rawg.io/

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# BDD

## Input

A user can search any game from a wide variety of games provided by the API.

## Output

Games displayed from the API call are grouped into four categories, searched games, upcoming games, new games and popular games.

# Contact Infomation:

### Author: [DENNIS NJENGA](https://github.com/deepeters)

         Email: dennis@dennis.com
         Phone: +254712345678

### Technology Used

1. ReactJS
2. HTML
3. SCSS
4. Javascript

### Frameworks Used

1. Git

### LICENSE: [MIT LICENSE](https://raw.githubusercontent.com/deepeters/gaming-app/master/LICENSE)
