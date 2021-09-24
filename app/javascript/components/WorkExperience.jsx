import React from 'react'
import { Component } from 'react'

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
            <div key={work.id} className="each__experience">
              <div className="row">
                <h1>Title:</h1><h1 className="content__h1">{work.title}</h1>
              </div>
              <div className="row">
                <h1>Company:</h1><h1 className="content__h1">{work.company_name}</h1>
              </div>
              <div className="row">
                <h1>Start Month:</h1><h1 className="content__h1 space-right">{work.start_month}</h1>
                <h1>Start Year:</h1><h1 className="content__h1">{work.start_year}</h1>
              </div>
              <div className="row">
                <h1>End Month:</h1><h1 className="content__h1 space-right">{work.end_month}</h1>
                <h1>End Year:</h1><h1 className="content__h1">{work.end_year}</h1>
              </div>
              <div className="row">
                <h1>Industry:</h1><h1 className="content__h1">{work.industry}</h1>
              </div>
              <div className="row column">
                <h1>Description:</h1><p className="content__h1">{work.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}