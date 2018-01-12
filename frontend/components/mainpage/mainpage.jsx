import React from 'react';
import { Nav, NavItem, NavLink, Button, Link,
          Collapse, CardBody, Card, Input, UncontrolledTooltip,
         } from 'reactstrap';
import SearchResults from '../searchresults/searchresults_container';

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
      <div className="leftNav-input">
        <div className='leftNav'>
          <p>Your Account</p>
          <Nav vertical>
            <NavItem>
              <Button color='primary' onClick={this.toggle} className='add-button'><span>Add gadget</span></Button>

            </NavItem>
            <NavItem>
              <Button className="other-buttons" color='warning'><span>My gadgets</span></Button>
            </NavItem>
            <NavItem>
              <Button className="other-buttons" color='info'>
                Tech News
              </Button>
            </NavItem>
          </Nav>
          <hr />
          <Button className="other-buttons" color='secondary'>
            Contact Us
          </Button>
        </div>
        <div className='input-area'>
          <Collapse id='collapse' isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <Input placeholder='descripe your gadget' />
                <a href="#" id="UncontrolledTooltipExample">Example</a>
                  <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                    iphone 6s grey refurbished 128gb
                  </UncontrolledTooltip>{'   '}
                  <Button color='primary' id='submit' onClick={this.toggleSearchResults} >Submit</Button>
              </CardBody>
            </Card>
          </Collapse>
          <Collapse id='collapse-results' isOpen={this.state.searchResults}>
            <Card>
              <CardBody>
                <SearchResults results={this.state.results} />
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}
