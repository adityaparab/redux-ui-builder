import { IProjectConfig, IProjectConfigInitialState } from '../../models/IProjectConfig';
import { CREATE_PROJECT_STATE_ACTIONS, IProjectConfigAction } from '../actions/CreateNewProject.actions';

export function CreateNewProjectStateReducer(
    state: IProjectConfig = IProjectConfigInitialState,
    action: IProjectConfigAction
): IProjectConfig {
    switch (action.type) {
        case CREATE_PROJECT_STATE_ACTIONS.FRAMEWORK_UPDATE_ACTION:
            return { ...state, framework: action.payload };
        case CREATE_PROJECT_STATE_ACTIONS.MIDDLEWARE_UPDATE_ACTION:
            return { ...state, middleware: action.payload };
        case CREATE_PROJECT_STATE_ACTIONS.NAME_UPDATE_ACTION:
            return { ...state, name: action.payload };
        case CREATE_PROJECT_STATE_ACTIONS.STORE_MODULE_UPDATE_ACTION:
            return { ...state, storeModule: action.payload };
        default:
            return { ...state };
    }
}