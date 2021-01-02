import clinicImage from "../resources/clinic.jpg"
const availableProcesses = [
    {
        id: 1,
        name: 'Dentistry',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                name: 'Payment',
                 id: 1
            },
            {
                name: 'Assessment',
                 id: 2
            },
            {
                name: 'Dentistry clinic',
                 id: 3
            },
        ]
    }, 
    {
        id: 2,
        name: 'Surgery',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                name: 'Payment',
                 id: 1
            },
            {
                name: 'Assessment',
                 id: 2
            },
            {
                name: 'Surgery clinic',
                 id: 4
            },
        ]
    },
    {
        id: 3,
        name: 'Orthopedic',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                name: 'Payment',
                 id: 1
            },
            {
                name: 'Assessment',
                 id: 2
            },
            {
                name: 'Orthopedic clinic',
                 id: 5
            },
        ]
    },
    {
        id: 4,
        name: 'Nephrology',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                name: 'Payment',
                 id: 1
            },
            {
                name: 'Assessment',
                 id: 2
            },
            {
                name: 'Nephrology clinic',
                 id: 6
            },
        ]
    },
    {
        id: 5,
        name: 'Obstetrics & Gynecology',
        image: clinicImage,
        active: false,
        processQueues: [
            {
                name: 'Payment',
                 id: 1
            },
            {
                name: 'Assessment',
                 id: 2
            },
            {
                name: 'Obstetrics & Gynecology clinic',
                 id: 7
            },
        ]
    }
];
const processReducer = (state = availableProcesses, action) => {
    switch(action.type){
        case 'ADD': {
            let newProcess = {
                id: 6,
                name: action.payload,
                image: clinicImage,
                active: false,
                processQueues: action.data
            }
            return [...state, newProcess]

        }
        case 'DELETE': {
            state.splice(action.data, 1);
            return [...state];
        }
        case 'MODIFY': {
            state[action.id].name = action.payload
            state[action.id].processQueues = action.data
            return state;
        }    
        default:
            return state;
    }
}

export default processReducer