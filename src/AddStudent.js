import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class AddStudent extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    let form = document.forms.formAdd
    this.props.addStudent({
      id: form.id.value,
      name: form.name.value,
      score: form.score.value
    })
  }
  render(){
    return(
      <div>
        <form name='formAdd' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='id'>ID</label>
            <input type='text' name='id' id='id' />
          </div>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' />
          </div>
          <div>
            <label htmlFor='score'>Score</label>
            <input type='text' name='score' id='score' />
          </div>
          <Button variant="outline-primary" size='sm'>Add Student</Button>
        </form>
      </div>
    )
  }
}

export default AddStudent
