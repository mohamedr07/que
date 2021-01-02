import processReducer from "./processReducer";
import editReducer from "./editReducer"
import { combineReducers } from "redux"

const allReducer = combineReducers({
    processReducer,
    editReducer
});

export default allReducer;