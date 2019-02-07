export interface IModel {
    name: string;
    schema: {
        [key: string]: string;
    };

}

export interface IStateModel {
    name: string;
    model: string;
    value: any;
}

export interface IValidState {
    models: IModel[];
    state: IStateModel[];
}