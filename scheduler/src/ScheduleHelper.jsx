import React, { Component } from 'react';
//import ScheduleIcon from './ScheduleIcon.jsx'
import { Row, Container, Col, Form, Label } from 'reactstrap';
//Button, FormGroup, Input,FormText, Container

class ScheduleHelper extends Component{
  constructor(props){
    super(props)
    this.state = {courses: null, inputVal: "", hasVal: false}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  //  this.state = {courseList:null}
    //fetch the courses
    //this.courses = {courses: null}
  }

  componentWillMount(){
    this.getClasses()
  }

  getClasses(){
    var semester = "Fall"
    var year = "2018"
    var yourSearch = encodeURI(this.state.inputVal)

    var limit = 100
      //fetch the department course list

      //http://eg:48484/q?Semester=Spring&Year=2019&text=%22Luiz%20Felipe%20F.%22

      const url =
        'https://www.eg.bucknell.edu/~amm042/service/q?'+ //+ ".json"
         "Semester=" + semester + "&Year=" + year + "&Department=" + yourSearch + "&limit=" + limit
        console.log(url)
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

  listAllCourses(){
    var listOfCourses = []
    if (this.state.courses){
      console.log(this.state.courses)
    //  console.log(this.state.courses["Meeting Time"])
      for (var i = 0; i < this.state.courses.length; i++){
        if (!(this.state.courses[i]["Meeting Time"].indexOf("F") > -1)){
        //NO Fridays!!! WOOHOO!!!
          if(!((this.state.courses[i]["Title"].indexOf("Lab") > -1) ||
          (this.state.courses[i]["Title"].indexOf("Recitation") > -1))) {
          //IT'S NOT A LAB or Recitation
            listOfCourses.push(this.state.courses[i]["Course"] + ": " + this.state.courses[i]["Title"] + " " +
        this.state.courses[i]["Meeting Time"] + " CRN:" + this.state.courses[i]["CRN"])
        }
        }
      }
      console.log(listOfCourses)
    }
    return listOfCourses.map((text) => <li key={text}>{text}</li>);
  }

  handleSubmit(event) {
   event.preventDefault();
   this.setState({hasVal: true});
   this.getClasses()
 }

  handleChange(event) {
    this.setState({inputVal: event.target.value});
  }

  render(){
    console.log("rendering")

    return <Container>
          <div>
              <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>
                <h1>Welcome to the no-Friday scheduler</h1>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>
                <h3>Simply search for a Department, and let the programming do the rest!</h3>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>
                <form onSubmit={this.handleSubmit}>
                      <label>
                        <input type="text" value= {this.state.inputVal} onChange={this.handleChange} />
                      </label>
                      <input type="submit" value="Submit" />
                </form>
              </Col>
              </Row>
              <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>
                 <p>
                   Here are a list of courses in the Department that have no Friday class.
                   {this.listAllCourses()}
                 </p>
                 </Col>
              </Row>
           </div>
        </Container>
  }
}

export default ScheduleHelper

// Department selected: {this.menu}
// {this.courses}


// <Form onSubmit={this.handleDeptChange.bind}>
//   <Label>Select a Department: </Label>
//       <select ref = {(input)=> this.menu = input} onChange={this.handleDeptChange.bind(this)}>
//         <option value="ECON">ECON</option>
//         <option value="ACFM">ACFM</option>
//         <option value="PSYC">PSYC</option>
//         <option value="BIOL">BIOL</option>
//         <option value="POLS">POLS</option>
//         <option value="SPAN">SPAN</option>
//         <option value="PHIL">PHIL</option>
//         <option value="CSCI">CSCI</option>
//       </select>
// </Form>

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


      //
      //
      // handleDeptChange(e){
      //   e.preventDefault();
      // //  if (this != undefined){
      //   this.state.department = this.menu.value
      //   //    this.setState({courses: this.menu.value})
      //   console.log("Changing Department to", this.menu.value)
      //   this.handleCourse(this.menu.value)
      //
      // //  }
      // }
