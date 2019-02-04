import React, { Component } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { IReducer } from './models/IReducer';
import { selectStoreInitialState, UpdateStoreStateAction } from './store/actions/StoreState.actions';
import { Dispatch } from 'redux';
import { IStore } from './models/IStore';

interface AppComponentProps extends React.Props<DispatchProp> {
  initialState: any;
  setInitialStoreState: (storeState: IStore) => void;
}

class AppComponent extends Component<AppComponentProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        {1 + 2}
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

export default App;
