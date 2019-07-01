import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';

function configureStore(state = { progress: 1, location: '', Car:''}) {
    return createStore(rootReducer,state);
}

export default configureStore;