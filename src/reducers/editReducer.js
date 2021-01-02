
const editReducer = (state = 0, action) => {
    switch(action.type){
        case 'SELECT':  
        {
            state = action.payload
            return state;
        }
        default:
            return state;
    }
}

export default editReducer