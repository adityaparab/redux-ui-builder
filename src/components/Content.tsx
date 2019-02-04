import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import { IReducer } from '../models/IReducer';

const Home = () => <div>Home</div>;
const Overview = () => <div>Overview</div>;

interface ContentComponentProps extends RouteComponentProps<any>, DispatchProp, React.Props<any> {
    state: any;
}

class ContentComponent extends React.Component<ContentComponentProps> {
    render() {
        console.log(this.props.state);
        return (
            <div className="f c">
                <Link to="/">Home</Link>
                <Link to="/test">Test</Link>
                <Route exact path="/" component={Home} />
                <Route exact path="/overview" component={Overview} />
            </div>
        )
    }
}

function mapState(state: IReducer) {
    return {
        state
    }
}



const Content = withRouter(connect(mapState)(ContentComponent));

export default Content;