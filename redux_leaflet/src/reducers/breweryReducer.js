// reducers/breweryReducer.js


const initialState = {
  searchedBreweries: [] ,// Initial state for searchedBreweries
  markers: [ // Static coordinates
  { latitude: 34.020882, longitude: -6.841650 ,name:'Rabat'}, // Example marker , 
  { latitude: 34.05020107094708 , longitude: -6.8125209570016265, name:'ESTS' },
   // Example marker  , 
  // Add more static coordinates as needed
]
};

/*-- Dans ce fichier, nous définissons le réducteur pour gérer 
les données relatives aux brasseries.
Actuellement, nous n'avons pas d'actions spécifiées pour modifier l'état. --*/

const breweryReducer = (state = initialState, action) => {
  // Reducer logic goes here
  return state;
};

export default breweryReducer;