import {combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";


const mainReducer = combineReducers({
    app: appReducer,
})

export const store = createStore(mainReducer)