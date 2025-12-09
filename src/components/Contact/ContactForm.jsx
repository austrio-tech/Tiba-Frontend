import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { API_ENDPOINTS } from "../../config/api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create JSON message from formData
    const jsonMessage = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      subscribe: formData.subscribe,
      from: "tiba",
      to: "admin",
      sourcetype: "contact-website",
    };

    try {
      const response = await fetch(API_ENDPOINTS.SEND_CONTACT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonMessage),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      alert("Thank you! Your message has been sent.");
      console.log("Form submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribe: false,
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Something went wrong while submitting your application.\n\nYou can submit your application by sending an email to mail@tibaoman.com"); 
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <label>
        Name: <br />
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
      </label>

      <label>
        Email: <br />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>

      <label>
        Phone Number: <br />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </label>

      <label>
        Subject: <br />
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
        />
      </label>

      <label>
        Message: <br />
        <textarea
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message/query"
        />
      </label>

      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        Subscribe to monthly newsletter
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
