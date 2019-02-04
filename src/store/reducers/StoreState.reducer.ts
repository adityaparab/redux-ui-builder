import * as StoreStateActions from '../actions/StoreState.actions';
import { IStore, IStoreInitialState } from '../../models/IStore';
import { Reducer, AnyAction } from 'redux';

export const StoreStateReducer: Reducer<IStore> = (
    state: IStore = IStoreInitialState,
    action: AnyAction
): IStore => {
    switch (action.type) {
        case StoreStateActions.STORE_STATE_ACTIONS.RESET_STORE:
            return { ...state, initialValue: {} };
        case StoreStateActions.STORE_STATE_ACTIONS.UPDATE_STORE:
            return { ...state, initialValue: action.payload };
        default:
            return { ...state };
    }

}