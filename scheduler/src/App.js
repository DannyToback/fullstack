import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ScheduleHelper from './ScheduleHelper'
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Container fluid={true}>

            <ScheduleHelper department="CSCI" />

      </Container>
    );
  }
}

export default App;
