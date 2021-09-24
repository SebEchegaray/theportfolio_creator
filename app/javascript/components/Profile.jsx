import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { WorkExperience } from '../components/WorkExperience'
import { Education } from '../components/Education'
import { Button } from '@material-ui/core';
import ProfilePicture from '../components/ProfilePic'
import { year, month } from '../components/DropdownOptions'

const { useRef } = React

const Profile = props => {
  const hiddenFileInput = React.useRef(null);
  let uploadedFile = null
  const [isActive, setActive] = useState(false);
  const [isActiveEdu, setEduActive] = useState(false);
  const [isActiveProjects, setProjectsActive] = useState(false);

  const handleClick = () => {
    hiddenFileInput.current.click();
  }

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    uploadedFile = fileUploaded
    console.log(uploadedFile)
  };

  const formHandleClick = (event) => {
    event.preventDefault()
    if(/work/.test(event.target.className)) {
      setActive(!isActive)
    } else if(/edu/.test(event.target.className)) {
      setEduActive(!isActiveEdu)
    }
  }

  const createWorkExperience = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    console.log(data)
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch("/api/work_experiences", {
      method: "post",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      // console.log(response.json())
      setActive(!isActive)
      window.location.reload();
    })
  }

  const createEducation = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    console.log(data)
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch("/api/educations", {
      method: "post",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      // console.log(response.json())
      setEduActive(!isActiveEdu)
      window.location.reload();
    })
  }

  return (
    <div className="profile__main-wrapper">
      <nav className="main__nav">
        <Link to="/" className="nav__btn" role="button">Home</Link>
        <Link to="/signup" className="nav__btn" role="button">SignUp</Link>
        <Link to="/login" className="nav__btn" role="button">Login</Link>
      </nav>
      {/* <ProfilePicture /> */}
      <div className="profile__picture-container">
        
        {/* <img src={uploadedFile} alt="Profile Picture" className="profile__picture" /> */}

        <Button className="profile__pic-link" onClick={handleClick}>
          <AddAPhotoIcon className="profile-pic__upload" />
          <input type="file"
            name="ProfilePic"
            id="profile__pic"
            ref={hiddenFileInput}
            onChange={handleChange}
          />
        </Button>
      </div>

      <section className="info">
        <div className="top-section-content__wrapper">
          <h2 className="section__title">Work Experience</h2>
          <a href="" className="add__link" onClick={formHandleClick}>
            <h2 className="section__title work">Add</h2>
          </a>
        </div>

        <div className="info__display">
          <WorkExperience />
        </div>

        {/* Work Experience submit form */}
        <form onSubmit={event => createWorkExperience(event)} className={`work-submit-form ${isActive ? "open__animation-info" : ""}`}>
        <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>" />
          <section className="form__section">
            <div className="field">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" />
            </div>
            <div className="field">
              <label htmlFor="company_name">Company</label>
              <input type="text" name="company_name" />
            </div>
            <div className="field">
              <label htmlFor="start_month">Start Month</label>
              <select name="start_month">
                {month.map((m, index) => {
                  return (
                    <option key={index} value={m}>{m}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="start_year">Start Year</label>
              <select name="start_year">
                {year.map((y, index) => {
                  return (
                    <option key={index} value={y}>{y}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="end_month">End Month</label>
              <select name="end_month">
                {month.map((m, index) => {
                  return (
                    <option key={index} value={m}>{m}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="end_year">End Year</label>
              <select name="end_year">
                {year.map((y, index) => {
                  return (
                    <option key={index} value={y}>{y}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="industry">Industry</label>
              <input type="text" name="industry" />
            </div>
            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea name="description"></textarea>
            </div>
            <button className="save__btn" type="submit">Save</button>
          </section>
        </form>
        {/* Work Experience submit form */}
      </section>
      
      {/* EDUCATION */}
      <section className="info">
        <div className="top-section-content__wrapper">
          <h2 className="section__title">Education</h2>
          <a href="" className="add__link" onClick={formHandleClick}>
            <h2 className="section__title edu">Add</h2>
          </a>
        </div>

        <div className="info__display">
          <Education />
        </div>

        {/* Education submit form */}
        <form onSubmit={event => createEducation(event)} className={`education-submit-form ${isActiveEdu ? "open__animation-info-edu" : ""}`}>
        <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>" />
          <section className="form__section">
            <div className="field">
              <label htmlFor="institution_name">Institution Name</label>
              <input type="text" name="institution_name" />
            </div>
            <div className="field">
              <label htmlFor="start_month">Start Month</label>
              <select name="start_month">
                {month.map((m, index) => {
                  return (
                    <option key={index} value={m}>{m}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="start_year">Start Year</label>
              <select name="start_year">
                {year.map((y, index) => {
                  return (
                    <option key={index} value={y}>{y}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="end_month">End Month</label>
              <select name="end_month">
                {month.map((m, index) => {
                  return (
                    <option key={index} value={m}>{m}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="end_year">End Year</label>
              <select name="end_year">
                {year.map((y, index) => {
                  return (
                    <option key={index} value={y}>{y}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="degree">Degree</label>
              <input type="text" name="degree" />
            </div>
            <div className="field">
              <label htmlFor="field">Field of Study</label>
              <input type="text" name="field" />
            </div>
            <button className="save__btn" type="submit">Save</button>
          </section>
        </form>
        {/* Education submit form */}
      </section>
      <section className="info">
        <div className="top-section-content__wrapper">
          <h2 className="section__title">Projects</h2>
          <a href="" className="add__link" onClick={formHandleClick}>
            <h2 className="section__title">Add</h2>
          </a>
        </div>

        {/* Projects submit form */}
        <form onSubmit={event => createEducation(event)} className={`education-submit-form ${isActiveEdu ? "open__animation-info-edu" : ""}`}>
        <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>" />
          <section className="form__section">
            <div className="field">
              <label htmlFor="institution_name">Institution Name</label>
              <input type="text" name="institution_name" />
            </div>
            <div className="field">
              <label htmlFor="start_month">Start Month</label>
              <select name="start_month">
                {month.map((m, index) => {
                  return (
                    <option key={index} value={m}>{m}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="start_year">Start Year</label>
              <select name="start_year">
                {year.map((y, index) => {
                  return (
                    <option key={index} value={y}>{y}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="end_month">End Month</label>
              <select name="end_month">
                {month.map((m, index) => {
                  return (
                    <option key={index} value={m}>{m}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="end_year">End Year</label>
              <select name="end_year">
                {year.map((y, index) => {
                  return (
                    <option key={index} value={y}>{y}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="degree">Degree</label>
              <input type="text" name="degree" />
            </div>
            <div className="field">
              <label htmlFor="field">Field of Study</label>
              <input type="text" name="field" />
            </div>
            <button className="save__btn" type="submit">Save</button>
          </section>
        </form>
        {/* Projects submit form */}
      </section>
      <section className="info">
        <div className="top-section-content__wrapper">
          <h2 className="section__title">Hobbies</h2>
          <a href="" className="add__link" onClick={formHandleClick}>
            <h2 className="section__title">Add</h2>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Profile