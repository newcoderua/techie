import React from 'react';

export default class GIF extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: "",
    }
  }

  componentDidMount() {
    this.setState({ hello: "World"});
  }

  render() {
    debugger
    return(
      <div>
        <div className="header-gifs">
          To use full functionality of this website, please Login.
        Meanwhile, enjoy best GIFs of the day
        </div>
        <div className="row">
          <div className="column">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            Hello
          </div>
          <div className="column">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            Hello
          </div>
          <div className="column">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" width="100%"/>
            Hello
          </div>
        </div>
      </div>
    )
  }
}
