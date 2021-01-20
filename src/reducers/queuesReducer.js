const availableQueues = [];


const queuesReducer = (state = availableQueues, action) => {
    switch(action.type){
        case 'ADD_QUEUE': {
            return [...state,action.payload];
        }
        case 'MODIFY_QUEUE': {
            state[action.payload.index].name = action.payload.name;
            state[action.payload.index].estimatedTime = action.payload.estimatedTime;
            return [...state];
        }    
        case 'DELETE_QUEUE': {
            state.splice(action.payload, 1);
            return [...state];
        }    
        default:
            return state;
    }
}

export default queuesReducer