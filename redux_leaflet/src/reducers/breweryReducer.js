// reducers/breweryReducer.js

const initialState = {
  searchedBreweries: [] ,// Initial state for searchedBreweries
  markers: [ 
    { 
      latitude: 34.020882, 
      longitude: -6.841650,
      name: 'Rabat',
      description: 'Description of Rabat marker',
      photos: ['http://etiny.io/s/aq7Cnf', 'http://etiny.io/s/tVGWvk']    },
    { 
      latitude: 34.05020107094708, 
      longitude: -6.8125209570016265,
      name: 'ESTS',
      description: 'Description of ESTS marker',
      photos: ['https://cutt.ly/lw3XrLuF', 'https://cutt.ly/7w3Xr47d']    },
    // Add more markers with description and photos as needed
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