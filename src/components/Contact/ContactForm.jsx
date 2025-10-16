import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    // Create plain text message from formData
    const plainTextMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
Subscribed to newsletter: ${formData.subscribe ? "Yes" : "No"}
  `.trim();

    try {
      const response = await fetch("https://myweb.com/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: plainTextMessage,
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
        message: "",
        subscribe: false,
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Oops! Something went wrong while sending your message.");
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
