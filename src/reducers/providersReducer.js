const availableProviders = [];


const providersReducer = (state = availableProviders, action) => {
    switch(action.type){
        case 'ADD_PROVIDER': {
            return [...state,action.payload];
        }
        case 'MODIFY_PROVIDER': {
            state[action.payload.index].name = action.payload.name;
            state[action.payload.index].station = action.payload.station;
            state[action.payload.index].queue = action.payload.queue;
            return [...state];
        }    
        case 'DELETE_PROVIDER': {
            state.splice(action.payload, 1);
            return [...state];
        }    
        default:
            return state;
    }
}

export default providersReducer