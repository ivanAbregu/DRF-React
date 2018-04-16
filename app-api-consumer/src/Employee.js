import React, { Component } from 'react';


class Employee extends Component {
   
  render() {
    const emp = this.props.employee;
    return (
      

      <div className="Employee" >
        <li>
          Id: {emp.id} 
          Nombre:  {emp.name} 
          Años: {emp.age} 
          Email: {emp.email} 
        </li>
      </div>
    );
  }
}

export default Employee;
