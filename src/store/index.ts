import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { ReducerConfiguration } from './reducers';
import { IReducerInitialValue } from '../models/IReducer';

export const history = createBrowserHistory();

export function configureStore() {
    const store = createStore(
        ReducerConfiguration(history),
        IReducerInitialValue,
        compose(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    );
    return store;
};