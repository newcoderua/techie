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


// const history = createHistory();

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.goToGadgets = this.goToGadgets.bind(this);
    this.getAmazonGoods = this.getAmazonGoods.bind(this);
    this.toggleSearchResults = this.toggleSearchResults.bind(this);
    this.state = {
      collapse : false,
      searchResults : false,
      results : [],
      isOpen : false,
      activeTab : '4'
     };
  }

  componentDidMount() {
    document.getElementById("gadgets-icon").addEventListener('click', () => {
      document.getElementById("gadgets-icon").style.background = "#4c4c6e";
    });
  }

  // componentWillUnmount() {
  //     document.removeEventListener('click', this.handleClick);
  // }


  goToGadgets() {
    this.props.history.push('/my_gadgets');
  }

  getAmazonGoods() {
    var amazon = require('amazon-product-api');

    var client = amazon.createClient({
      

    });
    var self = this;
    client.itemSearch({
      searchIndex: 'Electronics',
      Keywords: 'iphone 6s',
      responseGroup: 'ItemAttributes,Offers,Images'
    }, function(err, results, response) {
      if (err) {
      } else {
        self.setState({
          results : results
        })
      }
    });
  }

  toggleSearchResults() {
    this.setState({ searchResults : !this.state.searchResults })
    this.getAmazonGoods();
  }

  render() {
    // debugger
    return (
      <Router history={this.props.history}>
      <div className='main-page'>
        <div className="leftNav">
          <div className="lefty-nav-bar">
            <div className="icons" id="messages-icon"><FaEnvelopeO /></div>
            <div id="bell-icon"><TiBell /></div>
            <div id="settings-icon"><TiCogOutline /></div><br /><br />
            <div id="gadgets-icon">
              <Link to='/gadgets'>
                <FaCameraRetro />
              </Link>
              </div>
            <div id="cart-icon"><TiShoppingCart /></div>
            <div id="news-icon"><FaNewspaperO /></div>
          </div>
            <div className="righty-nav-bar">
              <Switch>
                <Route path="/gadgets" component={MyGadgets} />
              </Switch>
            </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default withRouter(MainPage);
