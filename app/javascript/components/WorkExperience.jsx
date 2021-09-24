import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export class WorkExperience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      work_experiences: [],
    }
  }
  componentDidMount() {
    fetch("/api/work_experiences")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ work_experiences: response }))
      .catch()
  }

  render() {
    const { work_experiences } = this.state;
    return (
      <div>
        {work_experiences.map(work => {
          return (
            <div key={work.id}>
              <h1>{work.title}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}