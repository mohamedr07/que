const availableStations = [
    {
        id: 1,
        location: 'BLA',
        queue: 'Payment',
        provider: 'Ahmed'
    },
    {
        id: 2,
        location: 'BLA 2',
        queue: 'Assessment',
        provider: 'Mohamed'
    },
    {
        id: 3,
        location: 'BLA 3',
        queue: 'Clinic',
        provider: 'Abbas'
    },
    {
        id: 4,
        location: 'BLA 4',
        queue: 'Eyes Clinic',
        provider: 'Gaber'
    }
    
];


const stationsReducer = (state = availableStations, action) => {
    switch(action.type){
        case 'ADD_STATION': {
            return [...state,action.payload];
        }
        case 'MODIFY_STATION': {
            state[action.payload.index].location = action.payload.location;
            state[action.payload.index].queue = action.payload.queue;
            state[action.payload.index].provider = action.payload.provider;

            return [...state];
        }    
        case 'DELETE_STATION': {
            state.splice(action.payload, 1);
            return [...state];
        }    
        default:
            return state;
    }
}

export default stationsReducer