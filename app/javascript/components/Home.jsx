import React from "react";
import { Component } from 'react'
import { Link } from "react-router-dom";
import { Icons } from '../images/Icons'

export class Home extends Component {
  expand = (event, position) => {
    const homeSection = event.target
    let sectionTextContainer = document.querySelectorAll('.text__container')

    if (position === "first") {
      sectionTextContainer[0].classList.toggle('move')
    } else {
      sectionTextContainer[1].classList.toggle('move')
    }

    if (homeSection.style.width != "100%") {
      homeSection.style.width = "100%"
    } else {
      homeSection.style.width = "41.4rem"
    }
  }

  render() {
    return (
      <div className="home page-main__wrapper">
        <nav className="main__nav">
          <Link to="/" className="nav__btn" role="button">Home</Link>
          <Link to="/signup" className="nav__btn" role="button">SignUp</Link>
          <Link to="/login" className="nav__btn" role="button">Login</Link>
          <a href="/profile" className="profile__icon-link">
            <img src={Icons.profileIcon} alt="" className="profile__icon" />
          </a>
        </nav>
        <section className="img-container">
          <div className="section__container__wrapper" onClick={ (e) => this.expand(e, "first")}>
            <img src={Icons.resume} alt="Icon" className="Home_Icon" />
            <div className="text__container">
              <h1 className="home__content-headline">Create a stands out portfolio</h1>
              <p className="home__content-paragraph">Build your digital portfolio with all you need to show potential employers what you are capable of.</p><br />
              <p className="home__content-paragraph">Education, Work experience and every detail the company needs to know about you as well as projects where you worked and teams you were part of.</p>
            </div>
          </div>
        </section>
        <section className="img-container">
          <div className="section__container__wrapper" onClick={ (e) => this.expand(e, "second")}>
            <img src={Icons.personalized} alt="Icon" className="Home_Icon" />
            <div className="text__container">
              <h1 className="home__content-headline">Customize based on the employer</h1>
              <p className="home__content-paragraph">Display or hide everything you want from your digital portfolio that you want specific employers to see or not.</p>
            </div>
            
          </div>
        </section>
      </div>
    )
  }
}

// Example of <Link> being used
// {/* <Link
//   to="/recipes"
//   className="btn btn-lg custom-button"
//   role="button"
// >
//   View Recipes
// </Link> */}