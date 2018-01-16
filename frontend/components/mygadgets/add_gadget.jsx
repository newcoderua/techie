import React from 'react';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  InputGroup,
  InputGroupAddon
  } from 'reactstrap';
import MdSearch from 'react-icons/lib/md/search';
import SearchResultsItem from '../searchresults/searchresults_item_container';


export default class AddGadget extends React.Component {
  constructor(props) {
    super(props);

    this.getAmazonGoods = this.getAmazonGoods.bind(this);
    this.state = {
      results : [],
    };
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
        console.log(err);
      } else {
        console.log(results);
        self.setState({
          results : results
        })
      }
    });
  }

  render() {
    // debugger
    if (this.state.results.length !== 0) {
      return(
        <div className="search-input-elems">
          <InputGroup>
            <InputGroupAddon>
              <UncontrolledDropdown>
                  <DropdownToggle caret>
                    All
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action 2</DropdownItem>
                    <DropdownItem>Action 3</DropdownItem>
                    <DropdownItem>Action 4</DropdownItem>
                    <DropdownItem>Action 5</DropdownItem>
                    <DropdownItem>Action 6</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </InputGroupAddon>
            <Input placeholder="and..." />
            <InputGroupAddon>
              <button
                className="search-button-input"
                onClick={this.getAmazonGoods}>🔍</button>
            </InputGroupAddon>
          </InputGroup>
          <div className="search_results">

                  { Object.keys(this.state.results).map((id) => {
                    return(
                      <SearchResultsItem
                        key={id}
                        id={id}
                        img={this.state.results['0'].MediumImage['0'].URL['0']}

                        />
                    )
                  })}

          </div>
        </div>
      )
    } else {
      return(
        <div className="search-input-elems">
          <InputGroup>
            <InputGroupAddon>
              <UncontrolledDropdown>
                  <DropdownToggle caret>
                    All
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action 2</DropdownItem>
                    <DropdownItem>Action 3</DropdownItem>
                    <DropdownItem>Action 4</DropdownItem>
                    <DropdownItem>Action 5</DropdownItem>
                    <DropdownItem>Action 6</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </InputGroupAddon>
            <Input placeholder="and..." />
            <InputGroupAddon>
              <button
                className="search-button-input"
                onClick={this.getAmazonGoods}>🔍</button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      )
    }
  }
}
