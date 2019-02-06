import { ActionCreator, Action } from 'redux';
import { IReducer } from "../../models/IReducer";

export const STORE_STATE_ACTIONS = {
    UPDATE_STORE: '[Store State] Update Store State',
    RESET_STORE: '[Store State] Reset Store State'
}

export interface IStoreStateAction extends Action {
    payload: string;
}

export const UpdateStoreStateAction: ActionCreator<IStoreStateAction> = (payload: string): IStoreStateAction => ({
    type: STORE_STATE_ACTIONS.UPDATE_STORE,
    payload: payload
});

export const ResetStoreStateAction: ActionCreator<IStoreStateAction> = (): IStoreStateAction => ({
    type: STORE_STATE_ACTIONS.RESET_STORE,
    payload: '{ }'
});

export const selectStoreInitialState = (state: IReducer) => state.storeState.initialValue;
export const selectStoreIsValid = (state: IReducer) => state.storeState.isValid;
export const selectStoreState = (state: IReducer) => state.storeState.isValid ? JSON.parse(state.storeState.initialValue) : new Error('Invalid State JSON');