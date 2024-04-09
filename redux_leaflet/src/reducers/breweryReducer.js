// reducers/breweryReducer.js

const initialState = {
  searchedBreweries: [] ,// Initial state for searchedBreweries
  markers: [ 
    {
      latitude: 34.020882,
      longitude: -6.841650,
      name: 'Appartement à Rabat',
      description: 'Appartement spacieux avec vue sur la ville',
      price: '3000 MAD/mois',
      bedrooms: 2,
      availability: 'Disponible',
      photos: [require('../images/appr.jpeg'), require('../images/bedr.jpeg'), require('../images/cuir.jpeg')],
      phoneNumber: '06 96 50 30 30'
    },
    {
      latitude: 33.573110,
      longitude: -7.589843,
      name: 'Villa à Casablanca',
      description: 'Villa moderne avec piscine',
      price: '8000 MAD/mois',
      bedrooms: 4,
      availability: 'Disponible',
      photos: [require('../images/villac.jpeg'), require('../images/piscinc.jpeg'), require('../images/bedc.jpeg'), require('../images/hallc.jpeg')],
      phoneNumber: '06 96 50 30 30'
    },
    {
      latitude: 30.422023,
      longitude: -9.559509,
      name: 'Maison à Agadir',
      description: 'Maison traditionnelle près de la plage',
      price: '5000 MAD/mois',
      bedrooms: 3,
      availability: 'Non disponible',
      photos: [require('../images/tradiagadir.jpeg'), require('../images/bedagadir.jpeg'), require('../images/vueagadir.jpeg')],
      phoneNumber: '06 96 50 30 30'
    },
    {
      latitude: 34.046917,
      longitude: -4.973235,
      name: 'Maison à Fès',
      description: 'Maison traditionnelle rénovée dans la médina',
      price: '4000 MAD/mois',
      bedrooms: 2,
      availability: 'Disponible',
      photos: [require('../images/tradifes.jpeg'), require('../images/hallfes.jpeg'), require('../images/bedfes.jpeg'), require('../images/cuifes.jpeg')],
      phoneNumber: '06 96 50 30 30'
    },
    {
      latitude: 31.631549,
      longitude: -8.008283,
      name: 'Appartement à Marrakech',
      description: 'Appartement moderne près de la place Jemaa el-Fna',
      price: '6000 MAD/mois',
      bedrooms: 3,
      availability: 'Disponible',
      photos: [require('../images/appkesh.jpeg'), require('../images/bedkesh.jpeg'), require('../images/cuikesh.jpeg')],
      phoneNumber: '06 96 50 30 30'
    },
    {
      latitude: 35.762834,
      longitude: -5.809065,
      name: 'Villa à Tanger',
      description: 'Villa avec vue sur la mer à proximité de la plage',
      price: '10000 MAD/mois',
      bedrooms: 4,
      availability: 'Disponible',
      photos: [require('../images/villat.jpeg'), require('../images/vuet.jpeg'),  require('../images/cuit.jpeg')],
      phoneNumber: '06 96 50 30 30'
    },
    {
      latitude: 33.8938,
      longitude: -5.5616,
      name: 'Appartement à Meknès',
      description: 'Appartement lumineux avec balcon',
      price: '3500 MAD/mois',
      bedrooms: 2,
      availability: 'Disponible',
      photos: [require('../images/appm.jpeg'), require('../images/balconm.jpeg'), require('../images/bedm.jpeg'), require('../images/cuim.jpeg')],
      phoneNumber: '06 96 50 30 30'
    },
    {
      latitude: 30.920193,
      longitude: -6.910497, 
      name: 'Villa à Ouarzazate',
      description: 'Villa spacieuse avec jardin et piscine',
      price: '9000 MAD/mois',
      bedrooms: 4,
      availability: 'Disponible',
      photos: [require('../images/villao.jpeg'), require('../images/jardino.jpeg'), require('../images/bedo.jpeg'), require('../images/hallo.jpeg')],
      phoneNumber: '06 96 50 30 30'
    },
    {
      latitude: 35.153930,
      longitude: -2.925610,
      name: 'Maison à Al Hoceïma',
      description: 'Maison traditionnelle avec vue sur la mer',
      price: '6000 MAD/mois',
      bedrooms: 3,
      availability: 'Non disponible',
      photos: [require('../images/maisontradih.jpeg'), require('../images/vueh.jpeg')],
      phoneNumber: '06 96 50 30 30'
    }
    
    
    
          
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