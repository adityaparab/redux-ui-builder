import React, { Component } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { IReducer } from './models/IReducer';
import { selectStoreInitialState, UpdateStoreStateAction } from './store/actions/StoreState.actions';
import { Dispatch } from 'redux';
import { IStore } from './models/IStore';

import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

interface AppComponentProps extends React.Props<DispatchProp> {
  initialState: any;
  setInitialStoreState: (storeState: IStore) => void;
}

class AppComponent extends Component<AppComponentProps> {
  constructor(props: any) {
    super(props);
    console.log('One last attempt at gh-pages deployment');
  }

  render() {
    return (
      <div className="f c">
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

function mapState(state: IReducer) {
  return {
    initialState: selectStoreInitialState(state)
  }
}

function mapDispatch(dispatch: Dispatch) {
  return {
    setInitialStoreState: (storeState: IStore) => dispatch(UpdateStoreStateAction(storeState))
  }
}

const App = connect(mapState, mapDispatch)(AppComponent);

export default withStyles({})(App);
