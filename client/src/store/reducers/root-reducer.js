import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import adminReducer from "./admin-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
});

export default rootReducer;