import React, { Component } from "react";
import "./Resume.css";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span></span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>

                      {/* <p>
                          {item.Achievements}
                          </p>*/}
                      <h3>{item.highSchoolName}</h3>
                      <p className="info">
                        {item.highSchoolSpecialization}
                        <span></span>{" "}
                        <em className="date">
                          {item.highMonthOfPassing} {item.highYearOfPassing}
                        </em>
                      </p>
                      {/* <p>
                          {item.Achievements}
                          </p>*/}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row item">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="Skills">
            <section className="container">
              <div className="container-box">
                {resumeData.skills.map((item) => (
                  <div key={item.skillname} className="container-box-1">
                    <img
                      src={item.imgSrc}
                      alt={item.skillname}
                      className="img"
                    />
                    <h2 className="heading">{item.skillname}</h2>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
