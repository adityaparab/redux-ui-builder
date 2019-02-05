import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { Link, Switch, withRouter } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import { IReducer } from '../models/IReducer';
import { selectStoreInitialState } from '../store/actions/StoreState.actions';

import CreateNewProject from './CreateNewProject';

const Overview = () => <div>Overview</div>;

interface ContentComponentProps extends RouteComponentProps<any>, DispatchProp {
    intialState: any;
}

class ContentComponent extends React.Component<ContentComponentProps> {
    render() {
        return (
            <div className="f c">
                <Switch>
                    <Route exact path="/" component={CreateNewProject} />
                    <Route exact path="/overview" component={Overview} />
                </Switch>
            </div>
        )
    }
}

function mapState(state: IReducer) {
    return {
        intialState: selectStoreInitialState(state)
    }
}



const Content = withRouter(connect(mapState)(ContentComponent));

export default Content;