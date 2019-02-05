import { ActionCreator } from 'redux';

import * as ProjectActions from '../store/actions/CreateNewProject.actions';
import { IReducer } from '../models/IReducer';

export const FORM_CONFIG = {
    FORM_FIELD_MARGIN: 'normal', // Valid Values "none" | "dense" | "normal" | undefined
};

export interface ProjectFormSelectFieldOptionsConfing {
    title: string;
    value: string;
    disabled: boolean;
    appliesTo?: string[];
}

export interface ProjectFormFieldConfig {
    id: string;
    label: string;
    placeholder: string;
    className: string;
    select: boolean;
    disabled: boolean;
    valueSelector: (state: IReducer) => string;
    valueEmitter: (payload: string) => ProjectActions.IProjectConfigAction;
    options: ProjectFormSelectFieldOptionsConfing[];
}

export interface FormConfig { }

export const CreateProjectFormConfig: ProjectFormFieldConfig[] = [
    {
        id: 'project-name',
        label: 'Enter Project Name',
        placeholder: 'Enter Project Name',
        valueSelector: ProjectActions.selectNewProjectName,
        valueEmitter: ProjectActions.UpdateNameCreateProjectAction,
        className: '',
        select: false,
        disabled: false,
        options: []
    },
    {
        id: 'project-framework-name',
        label: 'Select Framework',
        placeholder: 'Select Framework',
        valueSelector: ProjectActions.selectNewProjectFramework,
        valueEmitter: ProjectActions.UpdateFrameworkCreateProjectAction,
        className: '',
        select: true,
        disabled: false,
        options: [
            {
                title: 'AngularJS',
                value: 'ng',
                disabled: true
            },
            {
                title: 'Angular',
                value: 'angular',
                disabled: true
            },
            {
                title: 'React',
                value: 'react',
                disabled: false
            },
            {
                title: 'Vue',
                value: 'vue',
                disabled: true
            }
        ]
    },
    {
        id: 'project-store-module-name',
        label: 'Select Store Module',
        placeholder: 'Select Store Module',
        valueSelector: ProjectActions.selectNewProjectStoreModule,
        valueEmitter: ProjectActions.UpdateStoreModuleCreateProjectAction,
        className: '',
        select: true,
        disabled: false,
        options: [
            {
                title: 'Redux',
                value: 'redux',
                appliesTo: ['react', 'ng', 'angular', 'vue'],
                disabled: false
            },
            {
                title: 'NgRx Store',
                value: 'ngrx',
                appliesTo: ['angular'],
                disabled: true
            }
        ]
    },
    {
        id: 'project-middleware-name',
        label: 'Select Middleware',
        placeholder: 'Select Middleware',
        valueSelector: ProjectActions.selectNewProjectMiddleware,
        valueEmitter: ProjectActions.UpdateMiddlewareCreateProjectAction,
        className: '',
        select: true,
        disabled: true,
        options: [
            {
                title: 'Redux Thunk',
                value: 'thunk',
                appliesTo: ['react'],
                disabled: true
            },
            {
                title: 'Redux Promise',
                value: 'promise',
                appliesTo: ['react'],
                disabled: true
            },
            {
                title: 'Redux Saga',
                value: 'saga',
                appliesTo: ['react'],
                disabled: true
            },
            {
                title: 'Redux Observable',
                value: 'observable',
                appliesTo: ['react'],
                disabled: true
            }
        ]
    }
];