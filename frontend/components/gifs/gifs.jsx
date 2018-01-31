import React from 'react';

export default class GIF extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
    }
  }

  componentDidMount() {
    $.ajax({ url: "http://api.giphy.com/v1/gifs/search?q=funny&api_key=627abada91c14e1bba8cbb692d5863ef&limit=100",
             method: "GET",
             success: (response) => this.setState({ gifs: response.data}),
           }).then(() => {
             const rand = () => {
               var randNum = Math.floor(Math.random() * 100);
               return this.state.gifs[`${randNum}`].images.downsized_medium.url;
             }
             for (var i = 0; i < 20; i++) {
               $("#column1").append($('<img>',{src: rand(), width: "100%"}))
               $("#column2").append($('<img>',{id:'theImg',src: rand(), width: "100%"}))
               $("#column3").append($('<img>',{id:'theImg',src: rand(), width: "100%"}))
             }
           })
  }



  render() {
    // debugger
    if (this.state.gifs.length === 0) {
      return(<div></div>);
    } else {
      return(
        <div>
          <div className="header-gifs">
            To use full functionality of this website, please Login.
          Meanwhile, enjoy best GIFs of the day
          </div>
          <div className="row">
            <div id="column1" className="column">
            </div>
            <div id="column2" className="column">
            </div>
            <div id="column3" className="column">
            </div>
          </div>
        </div>
      )
    }
  }
}

// <img src={rand()} width="100%"/>
