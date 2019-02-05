import { ActionCreator, Action } from 'redux';
import { IReducer } from "../../models/IReducer";

export const CREATE_PROJECT_STATE_ACTIONS = {
    NAME_UPDATE_ACTION: '[Create Project State] Update Name',
    FRAMEWORK_UPDATE_ACTION: '[Create Project State] Update Framework',
    STORE_MODULE_UPDATE_ACTION: '[Create Project State] Update Store Module',
    MIDDLEWARE_UPDATE_ACTION: '[Create Project State] Update MIDDLEWARE'
}

export interface IProjectConfigAction extends Action {
    payload: string;
}

export const UpdateFrameworkCreateProjectAction: ActionCreator<IProjectConfigAction> = (payload: string): IProjectConfigAction => ({
    type: CREATE_PROJECT_STATE_ACTIONS.FRAMEWORK_UPDATE_ACTION,
    payload
});

export const UpdateMiddlewareCreateProjectAction: ActionCreator<IProjectConfigAction> = (payload: string): IProjectConfigAction => ({
    type: CREATE_PROJECT_STATE_ACTIONS.MIDDLEWARE_UPDATE_ACTION,
    payload
});

export const UpdateNameCreateProjectAction: ActionCreator<IProjectConfigAction> = (payload: string): IProjectConfigAction => ({
    type: CREATE_PROJECT_STATE_ACTIONS.NAME_UPDATE_ACTION,
    payload
});

export const UpdateStoreModuleCreateProjectAction: ActionCreator<IProjectConfigAction> = (payload: string): IProjectConfigAction => ({
    type: CREATE_PROJECT_STATE_ACTIONS.STORE_MODULE_UPDATE_ACTION,
    payload
});

export const selectNewProjectFramework = (state: IReducer) => state.createProjectState.framework;
export const selectNewProjectMiddleware = (state: IReducer) => state.createProjectState.middleware;
export const selectNewProjectName = (state: IReducer) => state.createProjectState.name;
export const selectNewProjectStoreModule = (state: IReducer) => state.createProjectState.storeModule;