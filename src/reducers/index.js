import processReducer from "./processReducer";
import queuesReducer from "./queuesReducer"
import stationsReducer from "./stationsReducer"
import providersReducer from "./providersReducer"
import userReducer from "./userReducer"
import { combineReducers } from "redux"

const allReducer = combineReducers({
    processReducer,
    queuesReducer,
    stationsReducer,
    providersReducer,
    userReducer,
});

export default allReducer;