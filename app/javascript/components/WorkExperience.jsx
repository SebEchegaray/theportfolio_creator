import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export class WorkExperience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workExperience: [],
    }
  }

  componentDidMount() {
    const url = "http://localhost:3000/profile";
    fetch(url)
      .then(response => {
        console.log(response.json())
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ workExperience: response }))
      .catch();
  }

  render() {
    console.log(this.state)
    const {workExperience} = this.state
    console.log(workExperience)
    
    return (
      <div>
        <h1>{workExperience}</h1>
      </div>
    )
  }
}