import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";
function ContactUs(props) {
  const [creds, setCreds] = useState({ fullName: "", email: "", message: "" });
  const handleSubmit = () => {
    
    axios
      .post("https://contact-backend-app.herokuapp.com/contacts", creds)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(typeof err.message);
      });
  };
  const handleChange = (e) => {
    // console.log(credentials)
    console.log(creds);
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  //let resumeData = props.resumeData;
  return (
    /*<section id="contact">
      <div classNameName="row section-head">
        <div classNameName="ten columns">
          <p classNameName="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div classNameName="row">
        <aside classNameName="eigth columns footer-widgets">
          <div classNameName="widget">
            <h4>Linked in :{resumeData.linkedinId}</h4>
          </div>
        </aside>
      </div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            className="input"
            required
            type="text"
            name="fullName"
            value={creds.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            required
            type="text"
            name="email"
            value={creds.email}
            onChange={handleChange}
            placeholder="Email"
          />
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
          <input type="submit" value="Get in touch" className="submit-button" />
        </p>
      </form>
  </section>*/
    <section id="contact">
      <div className="background">
      <p classNameName="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="input"
            required
            type="text"
            name="fullName"
            value={creds.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <label>Email</label>
          <input
            required
            type="text"
            name="email"
            value={creds.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <label>Message</label>
          <textarea
            required
            name="message"
            rows="5"
            placeholder="Message"
            value={creds.message}
            onChange={handleChange}
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
}
export default ContactUs;
