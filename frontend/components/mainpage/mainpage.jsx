import React from 'react';
import { Nav, NavItem, NavLink, Button, Link,
          Collapse, CardBody, Card, Input, UncontrolledTooltip,
         } from 'reactstrap';
import SearchResults from '../searchresults/searchresults_container';
import SearchInput, {createFilter} from 'react-search-input'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import Icon from 'react-icons-kit';
import { envelop } from 'react-icons-kit/icomoon/envelop';


export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.getAmazonGoods = this.getAmazonGoods.bind(this);
    this.toggleSearchResults = this.toggleSearchResults.bind(this);
    this.state = {
      collapse : false,
      searchResults : false,
      results : [],
      isOpen : false,
     };
  }

  toggle() {
    this.setState({ collapse : !this.state.collapse })
  }

  getAmazonGoods() {
    var amazon = require('amazon-product-api');

    var client = amazon.createClient({
      awsId: 'AKIAI2XY4FZGO35KORAA',
      awsSecret: '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',
      awsTag: 'vladstadnyk-20'

    });
    var self = this;
    // debugger
    //http://webservices.amazon.com/scratchpad/index.html check for options to itemSearch
    client.itemSearch({
      searchIndex: 'Electronics',
      Keywords: 'iphone 6s',
      responseGroup: 'ItemAttributes,Offers,Images'
    }, function(err, results, response) {
      if (err) {
        // console.log(err);
      } else {
        // console.log(results);
        self.setState({
          results : results
        })
        // debugger
        // debugger
          // products (Array of Object)
      }
      // console.log(response);

    });
    // debugger
  }

  toggleSearchResults() {
    this.setState({ searchResults : !this.state.searchResults })
    this.getAmazonGoods();
  }

  render() {
    // debugger
    return (
      <div className="leftNav">
        <div className="lefty-nav-bar">
          <div><FaEnvelopeO /></div>
          <div><FaEnvelopeO /></div>
          <div><FaEnvelopeO /></div><br /><br />
          <div><FaCameraRetro /></div>
          <div><FaEnvelopeO /></div>
          <div><FaEnvelopeO /></div>
        </div>
        <div className="righty-nav-bar">
          <FaCameraRetro />My Gadgets
        </div>
      </div>
    );
  }
}
