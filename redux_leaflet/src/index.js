// index.js or wherever your main entry point is
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

import App from './App'; 

// Your root component

/*-- Nous créons le magasin Redux avec le combinateur de réducteurs rootReducer 
et l'enveloppons avec le composant Provider pour que 
tous les composants de notre application puissent accéder à l'état global. --*/

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);