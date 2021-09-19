import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Control from './components/Control/Control';

import Count from './components/count/Count';

import store from './store';

function App() {

  //A reducer function must have 2 parameters 
  //state , action 

   

  return (
    <Provider store={store}>
      <div className="App">
      <h1>React-Redux Crash Course</h1>
      <Count/>
      <Control></Control>
      
    </div>
   
    </Provider>
  );
}

export default App

//store -> will hold of our application data/state
// Reducer -> A function who return a specofoc amount of state or data 
//Actions -> Event occurs -> {type:"something" payload:''}
//Dispatcher
//Subscriber

//1. Create a reducer
//2. Create store with the help of reducer
//3. Now we can subscribe 
//4. dispatch(action)

//React will be responsible for only view layer 
//Redux will be responsible for only data layer 

//React - Redux
