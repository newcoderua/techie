import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './mainpage/mainpage_container';
import Header from './header/header_container';


const App = () => {
  return(
    <div className="major-div">
      <div className="major-header">
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
