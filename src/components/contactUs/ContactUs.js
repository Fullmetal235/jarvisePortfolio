import React, { Component, useState } from 'react';
import './ContactUs.css';
import axios from 'axios';
 function ContactUs (props) {
	  const [creds, setCreds] = useState({fullName: '', email: '', message:''})
	  const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('https://contact-backend-app.herokuapp.com/contacts', creds)
            .then(res => {
                console.log(res)
    
            })
            .catch(err => {
                console.log(typeof err.message)
            })
    }
	  const handleChange = e => {
        // console.log(credentials) 
        console.log(creds) 
        setCreds({...creds, [e.target.name]: e.target.value})
    }
	  //let resumeData = props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
         {/* <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>*/}
			 <form onSubmit={handleSubmit}>
          <p>
            <input required type="text" name="fullName"  value={creds.fullName} onChange={handleChange} placeholder="Full Name" />
            <input required type="text" name="email" value={creds.email} onChange={handleChange}
				placeholder="Email" />
          </p>
          <p>
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Message"
			  value={creds.message}
				onChange={handleChange}
            ></textarea>
          </p>

          <p>
            <input type="submit" name="submit"  />
          </p>
        </form>
        </section>
        );
  
}
export default ContactUs