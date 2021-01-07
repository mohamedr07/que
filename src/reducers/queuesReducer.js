const availableQueues = [
    {
        id: 1,
        name: 'Payment',
        estimatedTime: 7.03,
        providers: [
            {
                id: 1,
                name: 'Ahmed'
            }
        ]
    }, 
    {
        id: 2,
        name: 'Assessment',
        estimatedTime: 3.68,
        providers: [
            {
                id: 2,
                name: 'Mohamed'
            }
        ]
    }, 
    {
        id: 3,
        name: 'Clinic',
        estimatedTime: 3.12,
        providers: [
            {
                id: 3,
                name: 'Abbas'
            }
        ]
    }, 
    {
        id: 4,
        name: 'Dentistry Clinic',
        estimatedTime: 4.30,
    }, 
    {
        id: 5,
        name: 'Surgery Clinic',
        estimatedTime: 3.12,
    },
    {
        id: 6,
        name: 'Eyes Clinic',
        estimatedTime: 1.12,
        providers: [
            {
                id: 4,
                name: 'Gaber'
            }
        ]
    }
];


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