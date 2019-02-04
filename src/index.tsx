import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { createStyles, withStyles } from '@material-ui/core/styles';

import { configureStore } from './store';

import App from './App';

const store = configureStore();

const baseStyles = createStyles({
    f: {
        display: 'flex',
        flex: 1
    },
    c: {
        flexDirection: 'column'
    },
    r: {
        flexDirection: 'row'
    }
});

const baseWrapper = () =>
    (<Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>);

const Base = withStyles(baseStyles)(baseWrapper);

ReactDOM.render(
    <Base />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
