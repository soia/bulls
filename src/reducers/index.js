import { combineReducers } from 'redux';
import { currentLocale } from './current-locale.reducer';
import drawer from './drawer.reducer';

const rootReducer = combineReducers({
    currentLocale,
    drawer,
});

export default rootReducer;
