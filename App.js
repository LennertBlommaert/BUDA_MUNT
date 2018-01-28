import React from 'react';
import { Provider } from 'mobx-react/native';

import Router from './components/Router';

import stores from './stores';

const App = () => (
  <Provider {...stores}>
    <Router />
  </Provider>
);

export default App;
