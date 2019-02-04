import { combineReducers, createStore, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';

import { IReducer } from '../models/IReducer';
import { StoreStateReducer } from './reducers/StoreState.reducer';

const reducers: Reducer<IReducer> = combineReducers({
    routing: routerReducer,
    storeState: StoreStateReducer
});

export function configureStore() {
    const store = createStore(reducers);
    return store;
};