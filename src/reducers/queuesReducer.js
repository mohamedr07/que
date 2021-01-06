const availableQueues = [
    {
        id: 1,
        name: 'Payment'
    }, 
    {
        id: 2,
        name: 'Assessment'
    }, 
    {
        id: 3,
        name: 'Clinic'
    }, 
    {
        id: 4,
        name: 'Dentistry Clinic'
    }, 
    {
        id: 5,
        name: 'Surgery Clinic'
    },
    {
        id: 6,
        name: 'Orthopedic Clinic'
    },
    {
        id: 7,
        name: 'Nephrology Clinic'
    },
    {
        id: 8,
        name: 'Obstetrics & Gynecology Clinic'
    },
    {
        id: 9,
        name: 'Eyes Clinic'
    }
];


const queuesReducer = (state = availableQueues, action) => {
    switch(action.type){
        case 'ADD_QUEUE': {
            return [...state,action.payload];
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