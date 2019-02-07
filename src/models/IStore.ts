export interface IStore {
    initialValue: any;
    isValid: boolean;
}

export const IStoreInitialState: IStore = {
    initialValue: `{
    "models": [
        {
            "name": "Todo",
            "schema": {
                "id": "string",
                "title": "string",
                "done": "boolean"
            }
        }
    ],
    "state": [
        {
            "name": "todos",
            "model": "Todo[]",
            "value": [
                {
                    "id": "abc123",
                    "title": "Complete Redux UI Builder App",
                    "done": false
                }
            ]
        }
    ]
}`,
    isValid: true
};
