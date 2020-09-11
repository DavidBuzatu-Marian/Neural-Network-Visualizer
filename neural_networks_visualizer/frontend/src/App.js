import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <h1>Hello, React</h1>
      </Fragment>
    </Provider>
  );
};

export default App;
