import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Home from './pages/Home';
import New from './pages/New';

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/new' component={New} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
