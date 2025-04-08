import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_6bmnsen",
        "template_66f1uus",
        e.target,
        "C1xv5SWMezEeAyo-K"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({
            email: "",
            name: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <Container>
        <div className="contact__container">
          <div className="contact__top">
            <h2>Contact Me</h2>
          </div>
          <div className="contact__card">
            <div className="contact__left">
              <div className="contact__name">
                <h2 className="emailnames">Email</h2>
                <div>
                  <FlightTakeoffIcon className="airplane" />
                </div>
              </div>
              <form className="contact__input" onSubmit={handleSubmit}>
                <input
                  className="contactinputs"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="contactinputs"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="contactinputs"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <input
                  className="contactinputsmsg"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="contact__send">
                  Send
                </button>
                {status && <p className="contact__status">{status}</p>}
              </form>
            </div>
            <div className="contact__right">
              <h2>Let's get in touch</h2>
              <p>
                Want to get in touch? I'd love to hear from you. Feel free to
                use the contact form
              </p>
              <div className="icon__contacts">
                <div className="icons__card">
                  <p>
                    <LocationOnIcon />
                  </p>
                  <p>Baku, Azerbaijan</p>
                </div>
                <div className="icons__card">
                  <p>
                    <MailOutlineIcon />
                  </p>
                  <p>eyyubbayramov811@gmail.com</p>
                </div>
                <div className="icons__card">
                  <p>
                    <LinkedInIcon />
                  </p>
                  <p>Eyyub Bayramov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
