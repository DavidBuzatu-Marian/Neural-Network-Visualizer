import React, { Fragment, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

import { renderLoader } from './components/utils/RenderLoader';

const Landing = lazy(() => import('./components/layout/Landing'));

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Suspense fallback={renderLoader()}>
          <Landing />
        </Suspense>
      </Fragment>
    </Provider>
  );
};

export default App;
