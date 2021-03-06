import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
   
    let {username, password} = this.state

    return (
      <div className="form">
        <br></br>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            type="text" 
            name="username" 
            value={username} 
            onChange={this.handleChange}
            placeholder="Username"
            icon="user"
            iconPosition="left"
          />
          <Form.Input 
            type="password" 
            name="password" 
            value={password} 
            onChange={this.handleChange}
            placeholder="Password"
            icon="lock"
            iconPosition="left"
          />
          <Button
            color='teal'
            content='Login'
            icon='check'
            labelPosition='left'
            type="submit"
            value="Submit"
          />
        </Form>
      </div>
    );
  }
}
export default LoginForm;