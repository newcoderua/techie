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
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.state = {
      results : [],
      keywords : ''
    };
  }

  handleChangeInput() {
    // debugger
    var input = document.getElementById('input-for-search').value;
    this.setState({ keywords : input })
  }

  getAmazonGoods() {
    var amazon = require('amazon-product-api');
    var myId = amazonAPI.awsId;
    var mySecret = amazonAPI.awsSecret;
    var myTag  = amazonAPI.awsTag;
    // debugger
    var client = amazon.createClient({
      awsId: myId,
      awsSecret: mySecret,
      awsTag: myTag
    });
    var self = this;
    client.itemSearch({
      searchIndex: 'All',
      Keywords: self.state.keywords,
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
      var self = this;
      return(
        <div className="search-input-elems">
          <InputGroup>
            <InputGroupAddon>
            </InputGroupAddon>
            <input
              id="input-for-search"
              placeholder="ex. iphone 6s gold"
              onChange={this.handleChangeInput}
              />
            <InputGroupAddon>
              <button
                className="search-button-input"
                onClick={this.getAmazonGoods}>🔍</button>
            </InputGroupAddon>
          </InputGroup>
          <div className="search_results">

                  { Object.keys(self.state.results).map((el, id) => {
                    // debugger
                    var img;
                    var brand;
                    var title;
                    var price;
                    var feature;
                    var color;
                    var size;

                    if (self.state.results[id].MediumImage === undefined) {
                      img = self.state.results[id].ImageSets['0'].ImageSet['0'].MediumImage['0'].URL['0'];
                    } else {
                      img = self.state.results[id].MediumImage['0'].URL['0']
                    }

                    if (self.state.results[id].ItemAttributes['0'].Brand === undefined) {
                      brand = self.state.results[id].ItemAttributes['0'].Manufacturer['0']
                    } else {
                      brand = self.state.results[id].ItemAttributes['0'].Brand['0'];
                    }

                    if (self.state.results[id].ItemAttributes['0'].Title === undefined) {
                      title = 'Unknown';
                    } else {
                      title = self.state.results[id].ItemAttributes['0'].Title['0'];
                    }

                    if (self.state.results[id].ItemAttributes['0'].ListPrice === undefined) {
                      price = 'Unknown';
                    } else {
                      price = self.state.results[id].ItemAttributes['0'].ListPrice['0'].FormattedPrice['0'];
                    }

                    if (self.state.results[id].ItemAttributes['0'].Color === undefined) {
                      color = 'Unknown';
                    } else {
                      color = self.state.results[id].ItemAttributes['0'].Color['0'];
                    }

                    if (self.state.results[id].ItemAttributes['0'].Size === undefined) {
                      size = 'Unknown';
                    } else {
                      size = self.state.results[id].ItemAttributes['0'].Size['0'];
                    }
                    var feature = [];
                    self.state.results[id].ItemAttributes['0'].Feature.forEach((el) => {
                      feature.push(el);
                    })
                    feature = feature.join('. ');
                    // debugger
                    return(
                      <SearchResultsItem
                        key={id}
                        id={id}
                        img={img}
                        title={title}
                        companyName={brand}
                        price={price}
                        feature={feature}
                        color={color}
                        size={size}
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
            </InputGroupAddon>
            <input id="input-for-search" placeholder="ex. iphone 6s gold" onChange={this.handleChangeInput} />
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
