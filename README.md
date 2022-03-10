# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Important

You need to have node 16.5.0 or greater and react scripts 5.0.0

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `Techonologies used`

Localstorage: LoacalStorage is used to store user's preferred language for the request and list tiles view type.

LocalForage: In order to store an array of Collection objects localForage is used, it might be an async processes but it allows us to store the array without having to parse it or stingify it every time.

GraphQL: For the purpose of filtering the keys of the response object and also taking advantage of browser's cache.

Apollo: This library simplifies the way qraphQL is used

Redux: For global state management, the application shares the same state across all it's components allowing us to skip passing "current state" arguments in a function.

