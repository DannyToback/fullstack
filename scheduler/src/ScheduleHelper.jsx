import React, { Component } from 'react';
import ScheduleIcon from './ScheduleIcon.jsx'
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ScheduleHelper extends Component{
  constructor(props){
    super(props)
    this.state = {courses:null}
  //  this.state = {courseList:null}
    //fetch the courses
    //this.courses = {courses: null}
  }

  componentWillMount(){
    if (this.state.courses === null){
      //fetch the department course list

      const url =
        'https://www.eg.bucknell.edu/~amm042/service/q?' //+ ".json"
        + "Department=" + this.props.department
          //this.props.state + '/' + this.props.city.replace(' ', '_') + ".json"
          console.log(this.props.department)
        fetch(url)
        .then(rsp => rsp.json())
        .then(courses => {
          console.log('got department', courses.message[0].Department)
          this.setState({courses: courses.message[0].Department})
          console.log(courses)
        })
        .catch(err=> console.log("ERR",err))
    }
    // if (this.state.courseList === null){
    //   const url2 =
    //     'https://www.eg.bucknell.edu/~amm042/service/q?' //+ ".json"
    //     + "Department=" + this.props.department + "/Title"
    //       //this.props.state + '/' + this.props.city.replace(' ', '_') + ".json"
    //       console.log(this.props.department)
    //     fetch(url2)
    //     .then(rsp => rsp.json())
    //     .then(courses => {
    //       console.log('got courses', courseList.message)
    //       this.setState({courseList: courseList.message[0]})
    //       console.log(courseList)
    //     })
    //     .catch(err=> console.log("ERR",err))
    // }
  }

  handleDeptChange(e){
    e.preventDefault();
  //  if (this != undefined){
    console.log(this.props.department)
    console.log(this.menu.value)
    this.setState({courses: (this.menu.value)})
  //  }
  }

  listAllCourses(){
    for (var i = 0; i < this.props.department.length; i++){
      console.log(this.state)
      if (this.props.department[i].Textbooks === ""){
        //console.log(this.props.department[i].Title)
      }
    }
  }

  render(){
    var yourDept = ""
    var newDepartment = ""

    if (this.state.courses){
      yourDept = this.state.courses
    }


    return  <div>
              <h1>Welcome to the no-Textbook scheduler</h1>
              <h5>Simply select a department, and all of those the no-textbook courses will be displayed</h5>
              <Form onSubmit={this.handleDeptChange.bind}>
                <Label>Select a Department: </Label>
                    <select ref = {(input)=> this.menu = input} onChange={this.handleDeptChange.bind(this)}>
                      <option value="ECON">ECON</option>
                      <option value="ACFM">ACFM</option>
                      <option value="PSYC">PSYC</option>
                      <option value="BIOL">BIOL</option>
                      <option value="POLS">POLS</option>
                      <option value="SPAN">SPAN</option>
                      <option value="PHIL">PHIL</option>
                      <option value="CSCI">CSCI</option>
                    </select>
              </Form>
              <p>Department selected: {yourDept}
                  {this.listAllCourses()}
              </p>
              </div>
  }
}

export default ScheduleHelper
