import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import adminDescriptionReducer from "./admin-description-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    adminDescription: adminDescriptionReducer,
});

export default rootReducer;