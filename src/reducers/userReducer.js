const user = {
        id: 1,
        name: 'Mohamed Rashad',
        processes: ['Dentistery clinic', 'Eyes clinic'],
        queues: [
            {
                name: 'Payment',
                current: false,
                completed: true,
                estimatedTime: 3.12
            },
            {
                name: 'Assessment',
                current: false,
                completed: true,
                estimatedTime: 2.56
            },
            {
                name: 'Dentistery clinic',
                current: true,
                completed: false,
                estimatedTime: 5.90
            },
            {
                name: 'Eyes clinic',
                current: false,
                completed: false,
                estimatedTime: 7.30
            },
            {
                name: 'Obstetrics & Gynecology clinic',
                current: false,
                completed: false,
                estimatedTime: 8.20
            },
            {
                name: 'Nephrology clinic',
                current: false,
                completed: false,
                estimatedTime: 3.30
            }

        ]
    }

const userReducer = (state = user, action) => {
    switch(action.type){
        case 'ADD_PROVIDER': {
            return [...state,action.payload];
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