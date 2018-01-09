import React from 'react';
import { Provider } from 'react-redux';
import Session from './session/session_container';
import Header from './header/header_container';
import {
  Switch,
  Route
} from 'react-router-dom';


const App = () => {
  return(
    <div>
      <div>
        <header  className="header-class">
          <div>
            <Header />
          </div>
        </header>
      </div>
      <div className='main-page'>
        <Switch>
          <Route exact path="/login" component={Session} />
          <Route path="/signup" component={Session} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
