import { IStore } from "../../models/IStore";
import { ActionCreator, Action } from 'redux';
import { IReducer } from "../../models/IReducer";

export const STORE_STATE_ACTIONS = {
    UPDATE_STORE: '[Store State] Update Store State',
    RESET_STORE: '[Store State] Reset Store State'
}

export interface IStoreStateAction extends Action {
    payload: IStore;
}

export const UpdateStoreStateAction: ActionCreator<IStoreStateAction> = (payload: IStore): IStoreStateAction => ({
    type: STORE_STATE_ACTIONS.UPDATE_STORE,
    payload: payload.initialValue
});

export const ResetStoreStateAction: ActionCreator<IStoreStateAction> = (): IStoreStateAction => ({
    type: STORE_STATE_ACTIONS.RESET_STORE,
    payload: { initialValue: {} }
});

export const selectStoreInitialState = (state: IReducer) => state.storeState.initialValue;