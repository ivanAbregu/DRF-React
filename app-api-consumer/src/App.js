import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './Employees';
import Loguin from './Loguin';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
class App extends Component {

  constructor(props){
    super(props);
    this.state = { token: null };

  }
  setToken(newToken){
    this.setState(  {token : newToken})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          
          { this.state.token===null &&
            <Loguin setToken = { this.setToken.bind(this) }
            /> 
          }
          
          { this.state.token && 
            <div className="App-content">
              el token: {this.state.token}
              <Employees />
            </div>
          }

      </div>
    );
  }
}

export default App;
