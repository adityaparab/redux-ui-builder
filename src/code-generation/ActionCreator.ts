import { IModel } from "../models/IValidState";
import * as str from 'strman';
import { render } from "ejs";

const modelOperations = ['CREATE', 'UPDATE', 'DELETE'];

const actionsFileTemplate = `// <%= options.actionsFileName %>.js
import { <%=options.constants.variable%> } from '../constants/<%=options.constantsFileName%>'
<%options.functions.forEach(fn => { %>
export function <%=fn.functionName%>(payload) {
    return {
        type: <%=fn.type%>,
        payload
    }
}
<%})%>`;

const constantsFileTemplate = `// <%=options.constantsFileName%>.js
export const <%=options.constants.variable%> = {
<%options.constants.values.forEach((c, i) => {%>
    <%=c.key%>: "<%=c.value%>"<% if(i < options.constants.values.length - 1){%>,<%}%>
<%})%>
}
`;

function generateFunctionName(op: string, name: string) {
    const n = [op.toLowerCase(), name, 'Action'].join(' ');
    return str.toCamelCase(n);
}

function generateActionId(op: string, name: string) {
    return [op, name, 'Action'].join('-').toUpperCase();
}

function generateActionsFileConfig(model: IModel, output: any) {
    const name = model.name.toLowerCase();
    return {
        ...output, ...{
            NAME: name.toUpperCase(),
            name,
            actionsFileName: name + '.actions',
            constantsFileName: `${name}.constants`,
            reducerFileName: `${name}.reducer`
        }
    }
}

function generateActionFunctionConfig(options: any) {
    options.functions = modelOperations.map((op: string) => {
        return {
            id: generateActionId(op, options.name),
            functionName: generateFunctionName(op, options.name)
        };
    });

    return options;
}

function generateActionConstants(options: any) {
    const { NAME, name } = options;
    const variable = `${NAME}_CONSTANTS`;
    return {
        ...options,
        ...{
            constants: {
                variable,
                values: modelOperations.map((op: string) => {
                    const key = `${op}_${NAME}`;
                    const value = `[${NAME} ACTIONS] ${str.toStudlyCaps(op)} ${NAME}`;
                    return {
                        id: generateActionId(op, options.name),
                        key,
                        value,
                        fullyQualifiedName: `${variable}.${key}`
                    }
                })
            }
        }
    };
}

function assignTypesToActions(options: any) {
    const { constants, functions } = options;
    return {
        ...options, ...{
            functions: functions.map((fn: any) => {
                const type = constants.values.find((v: any) => v.id === fn.id);
                fn.type = `${constants.variable}.${type.key}`;
                return fn;
            })
        }
    }
}

export function createActions(model: IModel) {
    let options = generateActionsFileConfig(model, {});
    options = generateActionFunctionConfig(options);
    options = generateActionConstants(options);

    options = assignTypesToActions(options);

    const actionsCode = render(actionsFileTemplate, { options });
    const constantsCode = render(constantsFileTemplate, { options });

    console.log(constantsCode);
    console.log(actionsCode);

    return {
        actionsCode,
        constantsCode
    };

}