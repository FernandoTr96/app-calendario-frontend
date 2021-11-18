import {combineReducers} from 'redux'
import { uiReducer } from '../reducers/uiReducer';
import { authReducer } from './authReducer';
import { calendarReducer } from './calendarReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    events: calendarReducer,
    auth: authReducer
});

export default rootReducer;