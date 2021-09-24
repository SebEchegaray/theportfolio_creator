import React from 'react'
import { Component } from 'react'

export class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      educations: [],
    }
  }

  componentDidMount() {
    fetch("/api/educations")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ educations: response }))
      .catch()
  }

  render() {
    const { educations } = this.state
    return (
      <div>
        {educations.map(education => {
          return (
            <div key={education.id} className="each__experience">
              <div className="row">
                <h1>Institution:</h1><h1 className="content__h1">{education.institution_name}</h1>
              </div>
              <div className="row">
                <h1>Start Month:</h1><h1 className="content__h1 space-right">{education.start_month}</h1>
                <h1>Start Year:</h1><h1 className="content__h1">{education.start_year}</h1>
              </div>
              <div className="row">
                <h1>End Month:</h1><h1 className="content__h1 space-right">{education.end_month}</h1>
                <h1>End Year:</h1><h1 className="content__h1">{education.end_year}</h1>
              </div>
              <div className="row">
                <h1>Degree:</h1><h1 className="content__h1">{education.degree}</h1>
              </div>
              <div className="row">
                <h1>field:</h1><h1 className="content__h1">{education.field}</h1>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}