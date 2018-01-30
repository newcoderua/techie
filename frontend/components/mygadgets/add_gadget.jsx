import React from 'react';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Collapse,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  InputGroup,
  InputGroupAddon,
  Col, Button, Form, FormGroup, Label, Input, FormText,
  Tooltip
  } from 'reactstrap';
import MdSearch from 'react-icons/lib/md/search';
import SearchResultsItem from '../searchresults/searchresults_item_container';


export default class AddGadget extends React.Component {
  constructor(props) {
    super(props);

    this.getAmazonGoods = this.getAmazonGoods.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleManufacturer = this.handleManufacturer.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleCondition = this.handleCondition.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleAdvancedSearch = this.handleAdvancedSearch.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      results : [],
      keywords : '',
      color: '',
      size: '',
      info: '',
      collapse : false,
      search : 'Advanced Search',
      condition: "All",
      manufacturer: "",
      title: "",
      tooltipOpen: false,
    };
  }

  toggleTooltip() {
    // debugger
    if ($('#advanced-search').html() === "Hide Advanced Search") {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }

  handleTitle() {
    var input = document.getElementById('exampleTitle').value;
    this.setState({ title : input })
  }

  handleManufacturer() {
    var input = document.getElementById('manufacturer').value;
    this.setState({ manufacturer : input })
  }

  handleColor() {
    var input = document.getElementById('exampleColor').value;
    this.setState({ color : input });
  }

  handleSize() {
    var input = document.getElementById('size').value.concat(' ').concat(this.state.keywords);
    this.setState({ size : input });
  }

  handleInfo() {
    var input = document.getElementById('other-info').value.concat(' ').concat(this.state.keywords);
    this.setState({ info : input });
  }

  handleCondition() {
    var input = document.getElementById('exampleSelect').value;
    this.setState({ condition : input });
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
      var client = amazon.createClient({
        awsId: myId,
        awsSecret: mySecret,
        awsTag: myTag
      });
      var self = this;
      var fullKeywords = self.state.keywords + ' ' + self.state.color + ' ' + self.state.size + ' ' + self.state.info;
      // debugger
      return client.itemSearch({
        searchIndex: 'Electronics',
        Keywords: fullKeywords,
        Condition: self.state.condition,
        Manufacturer: self.state.manufacturer,
        Title: self.state.title,
        responseGroup: 'Large'
      }, function(err, results, response) {
        // debugger
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

  toggle() {
    if (this.state.search === "Advanced Search") {
      this.setState({ collapse: !this.state.collapse, search : "Hide Advanced Search", keywords : ''})
      $('#input-for-search').val('');
      $('#input-for-search').prop('disabled', true);
    } else {
      // debugger
      this.setState({ collapse: !this.state.collapse,
                      search : "Advanced Search",
                      keywords : '',
                      color: '',
                      size: '',
                      info: '',
                      manufacturer: '',
                      condition: "All",
                      title: ''})
                      // debugger
      $('#input-for-search').prop('disabled', false);
    }
  }

  handleAdvancedSearch() {
    this.getAmazonGoods();
  }

  render() {
    // debugger
    if (this.state.results.length !== 0) {
      var self = this;
      return(
        <div className="search-input-elems">
          <InputGroup id="place-for-tooltip">
            <input
              id="input-for-search"
              placeholder="ex. iphone 6s gold"
              onChange={this.handleChangeInput}
              />
            <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="place-for-tooltip" toggle={this.toggleTooltip}>
              This area is disabled! Please, hide advanced search to use it
            </Tooltip>
            <InputGroupAddon>
              <button
                className="search-button-input"
                onClick={this.getAmazonGoods}>🔍</button>
            </InputGroupAddon>
          </InputGroup>

          <div className="hidden-form">
            <div className="inner-hidden-form">
              <div className="div-advanced-search">
                <button id='advanced-search' onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.state.search}</button>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleTitle" sm={2}>Title</Label>
                        <Col sm={4}>
                          <Input onChange={this.handleTitle} name="title" id="exampleTitle" placeholder="iphone X" />
                        </Col>
                        <Label for="exampleManufacturer" sm={2}>Manufacturer</Label>
                        <Col sm={4}>
                          <Input onChange={this.handleManufacturer} name="manufacturer" id="manufacturer" placeholder="apple" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="color" sm={2}>Color</Label>
                        <Col sm={4}>
                          <Input onChange={this.handleColor} name="color" id="exampleColor" placeholder="silver" />
                        </Col>
                        <Label for="size" sm={2}>Size</Label>
                        <Col sm={4}>
                          <Input onChange={this.handleSize} type="size" name="size" id="size" placeholder="128gb" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Condition</Label>
                        <Col sm={3}>
                          <Input onChange={this.handleCondition} type="select" name="select" id="exampleSelect" >
                            <option>All</option>
                            <option>New</option>
                            <option>Used</option>
                            <option>Refurbished</option>
                          </Input>
                        </Col>
                        <Label for="size" sm={2}>Other info</Label>
                        <Col sm={5}>
                          <Input onChange={this.handleInfo} name="other-info" id="other-info" placeholder="5.8-inch diagonal all-screen OLED" />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Label sm={2}/>
                        <Button id="search-advanced-button" color="primary" onClick={this.handleAdvancedSearch}>Search</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </div>
          <div className="search_results">

                  { Object.keys(self.state.results).map((el, id) => {
                    // debugger
                    var img;
                    var largeImage;
                    var brand;
                    var title;
                    var price;
                    var feature;
                    var color;
                    var size;

                    if (self.state.results[id].MediumImage === undefined) {
                      if (self.state.results[id].ImageSets === undefined) {
                        img = 'http://138.197.45.118/wp-content/uploads/2015/09/icon-mobile@2x.png';
                      } else {
                        img = self.state.results[id].ImageSets['0'].ImageSet['0'].MediumImage['0'].URL['0'];
                      }
                    } else {
                      img = self.state.results[id].MediumImage['0'].URL['0']
                    }

                    if (self.state.results[id].LargeImage === undefined) {
                      if (self.state.results[id].ImageSets === undefined) {
                        largeImage = 'http://138.197.45.118/wp-content/uploads/2015/09/icon-mobile@2x.png';
                      } else {
                        largeImage = self.state.results[id].ImageSets['0'].ImageSet['0'].LargeImage['0'].URL['0'];
                      }
                    } else {
                      largeImage = self.state.results[id].LargeImage['0'].URL['0']
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
                    if(self.state.results[id].ItemAttributes['0'].Feature !== undefined){
                      self.state.results[id].ItemAttributes['0'].Feature.forEach((el) => {
                        feature.push(el);
                      })
                      feature = feature.join('. ');
                    }

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
                        largeImage={largeImage}
                        />
                    )
                  })}
          </div>
        </div>
      )
    } else {
      return(
        <div className="search-input-elems">
          <InputGroup id="place-for-tooltip">
            <input id="input-for-search" placeholder="ex. iphone 6s gold" onChange={this.handleChangeInput} />
              <Tooltip placement="auto-start" isOpen={this.state.tooltipOpen} target="place-for-tooltip" toggle={this.toggleTooltip}>
                This area is disabled! Please, hide advanced search to use it
              </Tooltip>
            <InputGroupAddon>
              <button
                className="search-button-input"
                onClick={this.getAmazonGoods}>🔍</button>
            </InputGroupAddon>
          </InputGroup>

          <div className="hidden-form">
            <div className="inner-hidden-form">
              <div className='div-advanced-search'>
                <button id='advanced-search' onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.state.search}</button>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleTitle" sm={2}>Title</Label>
                        <Col sm={4}>
                          <Input onChange={this.handleTitle} name="title" id="exampleTitle" placeholder="iphone X" />
                        </Col>
                        <Label for="exampleManufacturer" sm={2}>Manufacturer</Label>
                        <Col sm={4}>
                          <Input onChange={this.handleManufacturer} name="manufacturer" id="manufacturer" placeholder="apple" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="color" sm={2}>Color</Label>
                        <Col sm={4}>
                          <Input onChange={this.handleColor} name="color" id="exampleColor" placeholder="silver" />
                        </Col>
                        <Label for="size" sm={2}>Size</Label>
                        <Col sm={4}>
                          <Input onChange={this.handleSize} type="size" name="size" id="size" placeholder="128gb" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Condition</Label>
                        <Col sm={3}>
                          <Input onChange={this.handleCondition} type="select" name="select" id="exampleSelect" >
                            <option>All</option>
                            <option>New</option>
                            <option>Used</option>
                            <option>Refurbished</option>
                          </Input>
                        </Col>
                        <Label for="size" sm={2}>Other info</Label>
                        <Col sm={5}>
                          <Input onChange={this.handleInfo} name="other-info" id="other-info" placeholder="5.8-inch diagonal all-screen OLED" />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Label sm={2}/>
                        <Button id="search-advanced-button" color="primary" onClick={this.handleAdvancedSearch}>Search</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </div>
        </div>
      )
    }
  }
}
