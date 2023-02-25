import { createStore } from 'redux';
import rootReducer from './reducer';

const initValue = {
    user: null,
    error: null,
};

const store = createStore(rootReducer, initValue)
export default store