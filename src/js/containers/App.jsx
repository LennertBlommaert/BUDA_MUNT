import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route} from 'react-router-dom';
import Home from './Home';

const App = ({demands}) => (

  <section>

    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

    <header>
      <h1>Buda Munt</h1>
    </header>

    <ul>
      {
        console.log(demands)
      }
      {
        demands.map(item => {
          return <li key={item.uid}>{item.name}</li>;
        })
      }
    </ul>

    <section>
      <Route
        exact path='/'
        component={Home}
      />
    </section>

  </section>

);

App.propTypes = {
  demands: PropTypes.observableArray.isRequired
};

export default inject(
  ({store}) => ({
    demands: store.demands
  })
)(
  observer(App)
);
