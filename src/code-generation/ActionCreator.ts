import { IModel } from "../models/IValidState";
import * as str from 'strman';

const actionCreatorTemplate = `
export function <%functionName%>
`;

const MODEL_OPERATIONS = ['CREATE', 'UPDATE', 'DELETE']

export function createActions(model: IModel) {
    let { name } = model;

    const names = {
        fileName: name.toLowerCase() + '.actions.js'
    }

    console.log(names);

}