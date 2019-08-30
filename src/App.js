import React, {Component} from 'react'
import NestedComponent from './NestedComponent'
import Students from './Students'
import StudentsGrades from './StudentsGrades'
import Teachers from './Teachers'
import Carousels from './Carousels'
import {Container} from 'react-bootstrap'
import {Route, Link} from 'react-router-dom'

class App extends Component{
  constructor(){
    super()
    this.state = {
     students:[
       {'id':1, 'name':'Oyekunle Opeyemi', 'score': 92},
       {'id':2, 'name':'Moyin Akinbolwale', 'score': 52},
       {'id':3, 'name':'Adeferanmi Tolulope', 'score': 32},
     ],
     teachers:[
       {'id':1, 'name':'Oyekunle Opeyemi', 'age': 52},
       {'id':2, 'name':'Moyin Akinbolwale', 'age': 78},
       {'id':3, 'name':'Adeferanmi Tolulope', 'age': 43},
     ]
    }
  }
  render(){
    // const projectName = 'Student App'
    // const firstName = 'Opeyemi'
    //
    // const numberOne = 2, numberTwo = 4
    // const sum = numberOne + numberTwo
    return(
      <Container>

        <Link to='/carousel'>Carousel</Link>

        <Route path='/carousel' component={Carousels}/>

        <Students students={this.state.students} />
        <Teachers teachers={this.state.teachers} />
        <StudentsGrades students={this.state.students} />
      </Container>
    )
  }
}
export default App
