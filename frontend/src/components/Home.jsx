import React from 'react';
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Home = () => (
  <div className="homepage">
    <Button.Group>
      <Button color="olive">
        <NavLink to="/login">Login</NavLink>
      </Button>
      <Button.Or />
      <Button color="olive">
        <NavLink to="/register">Register</NavLink> 
      </Button>
    </Button.Group>
  </div>
);

export default Home;