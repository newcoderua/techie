import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './mainpage/mainpage_container';
import Header from './header/header_container';


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
      <MainPage />
    </div>
  )
}
export default App;
