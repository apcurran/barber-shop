import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import adminDescriptionReducer from "./admin-description-reducer";
import adminEmployeesReducer from "./admin-employees-reducer";
import adminServicesReducer from "./admin-services-reducer";
import adminAppointmentsReducer from "./admin-appointments-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    aboutDescription: adminDescriptionReducer,
    employees: adminEmployeesReducer,
    services: adminServicesReducer,
    appointments: adminAppointmentsReducer
});

export default rootReducer;