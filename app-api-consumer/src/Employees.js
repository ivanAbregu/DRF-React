import React, { Component } from 'react';
import Table1 from './Table1';
import axios from 'axios';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class Employees extends Component {

  constructor(props){
    super(props);

    this.state = {
      employees: [],
    };
  }
  url = 'http://127.0.0.1:8000/api/emp/';
  
  componentDidMount(){

    axios.get(this.url)
    .then(res=>{
      this.setState({ employees: res.data })
    });

  }
  render() {
    return (
        <div>
          <Table1 employees={this.state.employees}/>
        </div>
    );
  }
}

export default Employees;
