import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello, fucking World!</p>;
  }
}

render(<App/>, document.getElementById('app'));
