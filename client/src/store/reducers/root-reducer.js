import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import adminDescriptionReducer from "./admin-description-reducer";
import adminEmployeesReducer from "./admin-employees-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    adminDescription: adminDescriptionReducer,
    employees: adminEmployeesReducer,
});

export default rootReducer;