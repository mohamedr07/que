const availableStations = [];


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