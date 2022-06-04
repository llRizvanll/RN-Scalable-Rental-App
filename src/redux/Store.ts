import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { baseReducer } from './BaseReducer';

const reducers = combineReducers({
    baseReducer : baseReducer,
});

const appReducers = (state: any , action: any ) => {
    return reducers(state,action);
};

const store = createStore(appReducers,{},applyMiddleware(thunk));

export {store};

