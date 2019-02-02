import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
      newArr: [],
      start: 8
    }
  }

  componentDidMount() {
    this.main();
  }


  main = () => {
    let { arr, newArr } = this.state;
    for (var i = 0; i < 8; i++) {
      newArr.push(arr[i]);
      this.setState({ newArr });
    }
  }


  clickMe = () => {

    let { arr, newArr, start } = this.state;
    newArr = [];
    for (var i = 0; i < 8; i++) {

      if (start >= arr.length) {
        start = 0;
        this.setState({ start })

      }
      newArr.push(arr[start]);
      this.setState({ newArr });

      start++;
      this.setState({ start })
    }

  }

  render() {
    let { newArr } = this.state;

    return (
      <div className="grids">
        <ul className="grids__ul">
          {newArr.map(function (data, idx) {
            return (
              <li className="grids__li" key={idx}>{data}</li>
            )
          })}
          <button className="grids__button" onClick={() => this.clickMe()}>Click me</button>
        </ul>
      </div>
    );
  }
}

export default App;
