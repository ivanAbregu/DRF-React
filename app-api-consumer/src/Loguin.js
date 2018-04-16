import React, { Component } from 'react';
import axios from 'axios';

//const ENTER_KEY_CODE = 13;

class Loguin extends Component {

  //url = 'http://127.0.0.1:8000/api/emp/';
  url= 'http://127.0.0.1:8000/auth/'
  constructor(props){
  	super(props);

  	this.state = {
  		username : '',
  		password : ''
  	}
  	this.handleInputChange = this.handleInputChange.bind(this);
  	this.handleOnSubmit = this.handleOnSubmit.bind(this);
  	
  }

  componentDidMount(){

     
     //this.url=  'http://127.0.0.1:8000/api-token-auth/'
     

  }
  handleInputChange(event){
  	const target = event.target;
  	this.setState({
  		[target.name] : target.value 
  	});
  }

  handleOnSubmit(){

  	const data = {
                username: this.state.username,
                password: this.state.password
            }
    
    axios.post(this.url, data)
      .then(res => {
        this.props.setToken(res.data.token);
      })
      .catch(error => {
        alert("error en el post");
      });

  }
 
  render() {

    return (
        <div>
          <input 
	          name = "username"
	          type = "text" 
	          placeholder="Username" 
	          value = {this.state.username}
	          onChange = {this.handleInputChange }
          />
          <input 
	          name = "password"
	          type="password"
	          placeholder="Password" 
	          value = {this.state.password}
	          onChange = {this.handleInputChange }
          />
          <button onClick={this.handleOnSubmit}> Aceptar</button>
        </div>
    );
  }
}

export default Loguin;
