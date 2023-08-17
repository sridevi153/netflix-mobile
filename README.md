

# Movie Browser Mobile App

Movie Browser is a React Native mobile app that lets users explore trending movies, view details, and watch trailers seamlessly.

# Features

View trending movies.

Browse movie details including description, ratings, and release date.

Watch movie trailers directly within the app.

Carousel display of movies with dynamic loading.

Efficient movie data fetching and management.

# Installation

Before you start, ensure you have Node.js and Expo CLI installed.

## 1.Clone the repository:

git clone https://github.com/sridevi153/movie-browser-app.git  <!-- replace with your repo's URL -->
cd movie-browser-app


## 2.Install dependencies:

npm install

## Start the app:

npx react-native run-android

This will start the Metro bundler and opens your app on the running emulator.

# Built With

React Native - A framework for building native apps using React.

React Navigation - Routing and navigation for React Native apps.

Axios - Promise based HTTP client.

movieTrailer - Node module for getting movie trailers.

react-native-youtube-iframe - A YouTube component for React Native.

# Usage

1.On opening the app you will land on login page.

2.Enter username : **sridevi@gmail.com** and password : **hello**

3.on successful login you will navigate to home page, else alert message will be shown.

4.In home page the displayed movie banner will change at an **interval**.

5.On click of **play** button on banner trailer of that movie will be displayed, to go back touch the **back** button.

6.There are row of movies based on its category, you can scroll through the cards.

7.On press of **movies** in navbar you will navigate to movies page where a list of movies will be displayed, you cant do a vertical scroll on it.

8.On press of any **movie card** in Movies page, it will navigate to Movie deatils page showing details of that movie.

9.In movie details page on Press of the **play button** a trailer of that movie will be played.

10.On press of **icon** im left corner of the Navbar, app will logOut.

# Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
