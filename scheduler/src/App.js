import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ScheduleHelper from './ScheduleHelper'
import { Container } from 'reactstrap';
//Button, FormGroup, Input,FormText, Form, Label

class App extends Component {
  render() {
    return (
      <Container fluid={true}>

            <ScheduleHelper department="ECON" />

      </Container>
    );
  }
}

export default App;
