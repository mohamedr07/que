import clinicImage from "../resources/clinic.jpg"
const availableProcesses = [
    {
        id: 1,
        name: 'Dentistry',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                id: 1,
                name: 'Payment' 
            },
            {
                id: 2,
                name: 'Assessment'
            },
            {
                id: 4,
                name: 'Dentistry clinic'
            }
        ]
    }, 
    {
        id: 2,
        name: 'Surgery',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                id: 1,
                name: 'Payment' 
            },
            {
                id: 2,
                name: 'Assessment'
            },
            {
                id: 5,
                name: 'Surgery clinic'
            }
        ]
    },
    {
        id: 3,
        name: 'Orthopedic',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                id: 1,
                name: 'Payment' 
            },
            {
                id: 2,
                name: 'Assessment'
            },
            {
                id: 6,
                name: 'Orthopedic clinic'
            }
        ]
    },
    {
        id: 4,
        name: 'Nephrology',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                id: 1,
                name: 'Payment' 
            },
            {
                id: 2,
                name: 'Assessment'
            },
            {
                id: 7,
                name: 'Nephrology clinic'
            }
        ]
    },
    {
        id: 5,
        name: 'Obstetrics & Gynecology',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                id: 1,
                name: 'Payment' 
            },
            {
                id: 2,
                name: 'Assessment'
            },
            {
                id: 8,
                name: 'Obstetrics & Gynecology clinic'
            }
        ]
    }
];
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