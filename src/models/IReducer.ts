import { RouterState } from 'react-router-redux';
import { IStore } from './IStore';
import { Reducer, AnyAction, ReducersMapObject } from 'redux';

export interface IReducer {
    routing: RouterState;
    storeState: ReducersMapObject<IStore, AnyAction>;
}
