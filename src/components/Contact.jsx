import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send email
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sjp72pd",
        "template_ofzdlo2",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "vQ_a3Gc_V9cU0jSF5",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          alert("Message sent successfully!");

          // Clear form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);

          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h1>Contact Me</h1>

          <p>
            Have a project or job opportunity?
            Feel free to get in touch with me.
          </p>

          <div className="contact-details">

            <p>
              <strong>Email:</strong>{" "}
              vidhyamurali1203@gmail.com
            </p>

            <p>
              <strong>Location:</strong> Chennai, India
            </p>

          </div>

        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;