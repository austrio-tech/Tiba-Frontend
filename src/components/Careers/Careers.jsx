import React, { useState } from "react";
import styles from "./Careers.module.css"; // Reuse existing styles

const CareersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    message: "",
    relocate: false,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("linkedin", formData.linkedin);
    formPayload.append("message", formData.message);
    formPayload.append("relocate", formData.relocate ? "Yes" : "No");
    formPayload.append("resume", formData.resume);

    try {
      const response = await fetch("https://myweb.com/apply", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      alert("Thanks for applying! We'll be in touch.");
      console.log("Application submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        message: "",
        relocate: false,
        resume: null,
      });

      // Optional: reset file input manually
      document.getElementById("resumeUpload").value = null;
    } catch (error) {
      console.error("Application failed:", error);
      alert("Something went wrong while submitting your application.\n\nYou can submit your application by sending an email to mail@tibaoman.com");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Join Our Team</h2>

      <label>
        Full Name: <br />
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
          placeholder="Email address"
        />
      </label>

      <label>
        Phone Number: <br />
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number"
        />
      </label>

      <label>
        LinkedIn Profile: <br />
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </label>

      <label>
        Cover Letter / Message: <br />
        <textarea
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about yourself and why you want to work with us"
        />
      </label>

      <label>
        Upload Resume (PDF, DOC): <br />
        <input
          type="file"
          id="resumeUpload"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
          onChange={handleChange}
        />
      </label>

      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="relocate"
          checked={formData.relocate}
          onChange={handleChange}
        />
        I'm open to relocation
      </label>

      <button type="submit">Submit Application</button>
    </form>
  );
};

export default CareersForm;
