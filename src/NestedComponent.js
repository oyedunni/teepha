import React from 'react'

class NestedComponent extends React.Component{
  render(){
    const {school, firstName} = this.props
    const listStyle = {
      listStyleType:'none',
      fontFamily:'cursive',
      color:'green'
    }
    return(
      <div>
        <h2 style={{color:'blue', textTransform:'capitalize'}}>Nested Component</h2>
        <ul style={listStyle}>
          <li>School: {school}</li>
          <li>First Name: {firstName}</li>
        </ul>
        <ul style={listStyle}>
          <li>Student One</li>
          <li>Student Two</li>
          <li>Student Three</li>
        </ul>
      </div>
    )
  }
}

export default NestedComponent
