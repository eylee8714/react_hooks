import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState((current) => {
      return {
        count: current + 1,
      };
    });
  };

  modify = (n) => {
    this.setState({ count: n });
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        <button onClick={() => this.modify(count + 1)}>Increment</button>
      </>
    );
  }
}

export default App;
