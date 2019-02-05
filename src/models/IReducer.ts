import { LocationChangeAction, RouterState } from 'connected-react-router';
import { IStore, IStoreInitialState } from './IStore';
import { Reducer, AnyAction, ReducersMapObject } from 'redux';
import { IProjectConfig, IProjectConfigInitialState } from './IProjectConfig';

export interface IReducer {
    storeState: IStore;
    createProjectState: IProjectConfig;
}

export const IReducerInitialValue: IReducer = {
    storeState: IStoreInitialState,
    createProjectState: IProjectConfigInitialState
};
