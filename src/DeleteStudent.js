import React, {Component} from 'react'

class DeleteStudent extends Component{
  constructor(){
    super()
    this.state = {id:null}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.deleteStudent(e.target.id.value)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='id'>ID</label>
          <input type='number' id='id' />
          <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}

export default DeleteStudent
