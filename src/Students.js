import React,{Component} from 'react'
import AddStudent from './AddStudent'
import DeleteStudent from './DeleteStudent'
import {Container, Row, Col} from 'react-bootstrap'

class Students extends Component{
  constructor(props){
    super(props)
    this.state = {oldStudents:this.props.students}
  }
  addStudent = (student)=>{
    const newStudents = [...this.state.oldStudents, student]
    this.setState({oldStudents:newStudents})
  }
  deleteStudent = (id)=>{
    const newStudents = this.state.oldStudents.filter(student=> parseInt(student.id) !== parseInt(id))
    this.setState({oldStudents:newStudents})
  }
  render(){
    const studentList = this.state.oldStudents.map((student, key)=>{
      return(
        <tr key={key}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.score}</td>
        </tr>
      )
    })
    return(
      <Container>
        <h2>Students</h2>
        <Row>
        <Col>
          <AddStudent addStudent={this.addStudent} />
          <DeleteStudent deleteStudent={this.deleteStudent} />
        </Col>
        <Col>
          <table className='student-table'>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {studentList}
          </tbody>
        </table>
        </Col>
        </Row>
      </Container>
    )
  }
}

export default Students
