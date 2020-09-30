import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Views/Home'
import BaseStyled from './baseStyled'
import Aux from '../components/Aux/Aux'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css';

library.add(fas);

const App = () => {
  return(
    <Aux>
      <BaseStyled/>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/"/>
      </Switch>
    </Aux>
    )
}
export default App;
