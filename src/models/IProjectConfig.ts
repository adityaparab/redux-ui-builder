export interface IProjectConfig {
    name: string;
    framework: string;
    storeModule: string;
    middleware: string;
}

export const IProjectConfigInitialState: IProjectConfig = {
    name: '',
    framework: '',
    storeModule: '',
    middleware: ''
}