import clinicImage from "../resources/clinic.jpg"
const availableProcesses = [];
const processReducer = (state = availableProcesses, action) => {
    switch(action.type){
        case 'ADD_PROCESS': {
            let newProcess = {
                id: action.payload.id,
                name: action.payload.name,
                image: clinicImage,
                active: false,
                processQueues: action.payload.queues
            }
            return [...state, newProcess]

        }
        case 'DELETE_PROCESS': {
            state.splice(action.payload, 1);
            return [...state];
        }
        case 'MODIFY_PROCESS': {
            state[action.payload.index].name = action.payload.name
            state[action.payload.index].processQueues = action.payload.queues
            return [...state];
        }    
        default:
            return state;
    }
}

export default processReducer