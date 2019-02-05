import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { StoreStateReducer } from './StoreState.reducer';
import { CreateNewProjectStateReducer } from './CreateNewProject.reducer';

export const ReducerConfiguration = (history: History) => combineReducers({
    router: connectRouter(history),
    storeState: StoreStateReducer,
    createProjectState: CreateNewProjectStateReducer
})