import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import adminDescriptionReducer from "./admin-description-reducer";
import adminEmployeesReducer from "./admin-employees-reducer";
import adminServicesReducer from "./admin-services-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    adminDescription: adminDescriptionReducer,
    employees: adminEmployeesReducer,
    services: adminServicesReducer,
});

export default rootReducer;