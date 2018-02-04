import React from 'react';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import TiBell from 'react-icons/lib/ti/bell';
import TiCogOutline from 'react-icons/lib/ti/cog-outline';
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart';
import FaNewspaperO from 'react-icons/lib/fa/newspaper-o';
import Icon from 'react-icons-kit';
import MyGadgets from '../mygadgets/mygadgets_container';
import { browserHistory } from 'react-router';
import { Router, hashHistory } from 'react-router';
import { Route,
  Switch,
  Link,
  withRouter
} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import AddGadget from '../mygadgets/add_gadget_container';
import GIFs from '../gifs/gifs';
import AllMyGadgets from '../mygadgets/all_my_gadgets_container'

// const history = createHistory();

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.goToGadgets = this.goToGadgets.bind(this);
    this.state = {
      collapse : false,
      searchResults : false,
      results : [],
      isOpen : false,
      currentUser : this.props.currentUser
     };
  }

  componentDidMount() {
    this.props.fetchGadgets();
    if (this.props.location.pathname === '/gadgets') {
      document.getElementById("gadgets-icon").style.background = "#4c4c6e";
      document.getElementById("svg-gadgets-icon").style.fill = "#dfaa0a";
    }
    document.getElementById("gadgets-icon").addEventListener('click', () => {
      document.getElementById("gadgets-icon").style.background = "#4c4c6e";
      document.getElementById("svg-gadgets-icon").style.fill = "#dfaa0a";
    });
  }

  componentWillUnmount() {
    document.getElementById("gadgets-icon").addEventListener('click', () => {
      document.getElementById("gadgets-icon").style.background = "#4c4c6e";
    });
  }


  goToGadgets() {
    this.props.history.push('/my_gadgets');
  }



  toggleSearchResults() {
    this.setState({ searchResults : !this.state.searchResults })
    this.getAmazonGoods();
  }

  render() {
    const addGadget = (user) => {
      if (user) {
        return(
          <AddGadget />
        )
      } else {
        return(
          <GIFs />
        )
      }
    }

    return (
      <Router history={this.props.history}>
      <div className='main-page'>
        <div className="leftNav">
          <div className="lefty-nav-bar">
            <div className="icons" id="messages-icon"><div><FaEnvelopeO /></div></div>
            <div className="icons" id="bell-icon"><div><TiBell /></div></div>
            <div className="icons" id="settings-icon"><div><TiCogOutline /></div></div><br /><br />
            <div className="icons" id="gadgets-icon">
              <div><Link to='/gadgets'>
                <FaCameraRetro id='svg-gadgets-icon'/>
              </Link></div>
              </div>
            <div className="icons" id="cart-icon"><div><TiShoppingCart /></div></div>
            <div className="icons" id="news-icon"><div><FaNewspaperO /></div></div>
          </div>
          <div className="righty-nav-bar">
            <Switch>
              <Route path="/gadgets" component={MyGadgets} />
            </Switch>
          </div>
        </div>
        <div className="rightNav" id="rightNavId">
          <div id="all-gadgets" className="all-gadgets">
            <AllMyGadgets />
          </div>
          {addGadget(this.props.currentUser)}
        </div>
      </div>
    </Router>
    );
  }
}

export default withRouter(MainPage);
