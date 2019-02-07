import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStyles, withStyles } from '@material-ui/core/styles';

import { IStyledConnectedComponent } from '../models/IStyledConnectedComponent';
import { IReducer } from '../models/IReducer';
import { selectStoreState, selectStoreInitialState, selectStoreIsValid } from '../store/actions/StoreState.actions';

import MonacoEditor from './MonacoEditor';

import { createActions } from '../code-generation/ActionCreator';
import { IValidState } from '../models/IValidState';

const styles = createStyles({
    leftPanel: {
        width: '450px',
        display: 'flex'
    }
});

interface StoreStateConfigProps extends IStyledConnectedComponent {
    currentState: IValidState;
    currentStateValue: string;
    isValid: boolean;
}

class StoreStateConfig extends React.Component<StoreStateConfigProps> {
    constructor(props: StoreStateConfigProps) {
        super(props);
    }

    render() {
        const { classes = {} } = this.props;
        const v = this.props.currentState.state.map((s: any) => s.value);
        const vv = JSON.stringify(v);
        return (
            <div className="f r">
                <div className="f">
                    <MonacoEditor readOnly={true} value={this.props.currentStateValue} />
                </div>
                <div className="f">
                    <MonacoEditor />
                </div>
            </div>
        );
    }
}

function mapState(state: IReducer) {
    return {
        currentState: selectStoreState(state),
        currentStateValue: selectStoreInitialState(state),
        isValid: selectStoreIsValid(state)
    }
}

export default withStyles(styles)(
    withRouter(
        connect(mapState)(
            StoreStateConfig
        )
    )
)