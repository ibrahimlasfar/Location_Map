// reducers/index.js

/*--Le fichier reducers/index.js combine tous les réducteurs : --*/
import { combineReducers } from 'redux';
import breweryReducer from './breweryReducer';

const rootReducer = combineReducers({
  brewery: breweryReducer,
  // Add other reducers here if you have them
});


export default rootReducer;
