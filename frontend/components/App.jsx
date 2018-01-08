import React from 'react';
import { Provider } from 'react-redux';
// console.log('i am inside app.jsx');
import Header from './header/header_container';
import {
  Switch,
  Route
} from 'react-router-dom';


const App = () => {
  return(
    <div>
      <header  className="header-class">
        <div>
          <Header />
        </div>
      </header>
      <Switch>
      </Switch>
    </div>
  )
}

export default App;
