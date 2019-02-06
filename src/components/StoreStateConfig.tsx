import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { createStyles, withStyles } from '@material-ui/core/styles';
import { IReducer } from '../models/IReducer';
import { selectStoreInitialState, UpdateStoreStateAction, IStoreStateAction } from '../store/actions/StoreState.actions';

import { IStore } from '../models/IStore';
import { IStyledConnectedComponent } from '../models/IStyledConnectedComponent';

import MonacoEditor from './MonacoEditor';

const styles = createStyles({});

interface StoreStateConfigProps extends IStyledConnectedComponent {
    value: string;
    valueUpdated: (value: string) => IStoreStateAction;
}

class StoreStateConfig extends React.Component<StoreStateConfigProps> {
    constructor(props: StoreStateConfigProps) {
        super(props);
        this.onMonacoEditorChanged = this.onMonacoEditorChanged.bind(this);
        this.onMonacoEditorMounted = this.onMonacoEditorMounted.bind(this);
    }

    onMonacoEditorChanged(value: string) {
        this.props.valueUpdated(value);
    }

    onMonacoEditorMounted() { }

    render() {
        return (
            <MonacoEditor onEditorChange={this.props.valueUpdated} onEditorMount={this.onMonacoEditorMounted} value={this.props.value}/>
        );
    }
}

function mapState(state: IReducer) {
    return {
        value: selectStoreInitialState(state)
    }
}

function mapDispatch(dispatch: Dispatch) {
    return {
        valueUpdated: (value: string) => dispatch(UpdateStoreStateAction(value))
    }
}

export default withStyles(styles)(
    withRouter(
        connect(mapState, mapDispatch)(
            StoreStateConfig
        )
    )
);