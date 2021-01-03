import processReducer from "./processReducer";
import queuesReducer from "./queuesReducer"
import { combineReducers } from "redux"

const allReducer = combineReducers({
    processReducer,
    queuesReducer,
});

export default allReducer;