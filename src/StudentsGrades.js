import React,{Component} from 'react'

class StudentsGrades extends Component{
  render(){
    const {students} = this.props
    let status = '';
    const studentList = students.map((student, key)=>{
      status = (student.score >= 50) ? ('PASSED') : ('FAILED')
      return(
          <tr key={key}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.score}</td>
            <td>{status}</td>
          </tr>
        )
    })
    return(
      <div className='container'>
        <h2>Students Grades</h2>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default StudentsGrades
