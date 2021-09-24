import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../images/Icons'
import { Component } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { WorkExperience } from '../components/WorkExperience'

const { useEffect, useRef } = React

const Profile = () => {
  const hiddenFileInput = React.useRef(null);
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    hiddenFileInput.current.click();
  }

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
  };

  const formHandleClick = (event) => {
    event.preventDefault()
    setActive(!isActive)
  }

  const createWorkExperience = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
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
      console.log(response.json())
    })
  }

  return (
    <div className="profile__main-wrapper">
      <nav className="main__nav">
        <Link to="/" className="nav__btn" role="button">Home</Link>
        <Link to="/signup" className="nav__btn" role="button">SignUp</Link>
        <Link to="/login" className="nav__btn" role="button">Login</Link>
      </nav>
      <div className="profile__picture-container">
        {/* <img src="" alt="Profile Picture" className="profile__picture" /> */}

        <a href="" className="profile__pic-link" onClick={handleClick}>
          <AddAPhotoIcon className="profile-pic__upload" />
        </a>
        <input type="file"
          name="ProfilePic"
          id="profile__pic"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
      </div>

      <section className="info">
        <div className="top-section-content__wrapper">
          <h2 className="work-section__title">Work Experience</h2>
          <a href="" className="add__link" onClick={formHandleClick}>
            <h2 className="work-section__title">Add</h2>
          </a>
        </div>

        <div>
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
                <option value="January">Jan</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="start_year">Start Year</label>
              <select name="start_year">
                <option value="2018">2018</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="end_month">End Month</label>
              <select name="end_month">
                <option value="January">Jan</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="end_year">End Year</label>
              <select name="end_year">
                <option value="2020">2020</option>
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
            <button className="save__btn">Save</button>
          </section>
        </form>
        {/* Work Experience submit form */}
      </section>
      <section className="info">
        <h2 className="work-section__title">Education</h2>
      </section>
      <section className="info">
        <h2 className="work-section__title">Projects</h2>
      </section>
      <section className="info">
        <h2 className="work-section__title">Hobbies</h2>
      </section>
    </div>
  )
}

export default Profile