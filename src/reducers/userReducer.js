const user = {};

const userReducer = (state = user, action) => {
    switch(action.type){
        case 'ADD_USER': {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.processes = action.payload.processes;
            state.queues = action.payload.queues;
            state.isStaff = action.payload.isStaff;
            state.isAdmin=action.payload.isAdmin;
            return state
        }
        case 'MODIFY_USER': {
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

export default userReducer