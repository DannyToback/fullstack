import React, { Component } from 'react';
//import ScheduleIcon from './ScheduleIcon.jsx'
import { Form, Label } from 'reactstrap';
//Button, FormGroup, Input,FormText, Container

class ScheduleHelper extends Component{
  constructor(props){
    super(props)
    this.state = {courses: null}
  //  this.state = {courseList:null}
    //fetch the courses
    //this.courses = {courses: null}
  }

  handleCourse(department){
    if (this.state.courses === null){
      //fetch the department course list

      const url =
        'https://www.eg.bucknell.edu/~amm042/service/q?' //+ ".json"
        + "Department=" + department
        console.log("FETCH")
        fetch(url)
        .then(rsp => {
          return rsp.json()
        }).then(courses => {
        //  console.log('got department', courses) //.message[0].Department)
          // this.listAllCourses(courses["message"])
          this.setState({courses: courses["message"]})
          console.log(this.state.courses)
          //this.setState({courses: courses.message}) //.message[0].Department})
        })
        .catch(err=> console.log("ERR",err))
    }
  }


  handleDeptChange(e){
    e.preventDefault();
  //  if (this != undefined){
    this.state.department = this.menu.value
    //    this.setState({courses: this.menu.value})
    console.log("Changing Department to", this.menu.value)
    this.handleCourse(this.menu.value)

  //  }
  }

  listAllCourses(courses){
    console.log(courses)
    var listOfCourses = []
    if (courses !== undefined){
      for (var i = 0; i < courses.length; i++){
        listOfCourses.push(courses[i]["Title"])
        if (courses[i].Textbooks === ""){
          //console.logthis.props.department[i].Title)
        }
      }
      console.log(this.listOfCourses)
    }
    const listItems = listOfCourses.map((text) => <li>{text}</li>);
  }

  render(){
    var yourDept = ""
    console.log("rendering")

    if (this.state.courses){
      yourDept = this.state.courses.Department
    }
    console.log(yourDept)

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
               <p>
                 Department selected: {this.menu}
                 {this.courses}
               </p>
              </div>
  }
}

export default ScheduleHelper



    // setDepartments(json){
    //   this.setState({courses: json["message"]})
    // }
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
