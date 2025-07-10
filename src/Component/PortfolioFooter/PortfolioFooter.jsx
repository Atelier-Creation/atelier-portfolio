import React, { useState } from "react";
import "./PortfolioFooter.css";
import { useNavigate } from "react-router-dom";
function PortfolioFooter() {
  const navigate = useNavigate();
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = async () => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyMUdvsX4oc6gDrYlmRnvVrna2VS5s9F4ZHt17dmbHuTD2I3YosQBBUXbkTf2vz2-QB-w/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        ...formData,
        apiKey: "atelierSecret123", 
      }),
      });

      if (response.ok) {
        alert("Message sent and saved successfully!");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        alert("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="portfolio-footer-container">
      <div className="footer-container-port">
        <div className="portfolio-left-conatiner">
          <h1>Let's Connect</h1>
          <div className="footer-left-text">
            <p className="portfolio-para">
              Tell us about your business. Let's get this conversation started.
              Fill in the form or send us an email.
            </p>
            <div className="footer-arrow-icon-text">
              <i className="bi bi-arrow-right"></i>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=atelierhub.official@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link-footer"
              >
                atelierhub.official@gmail.com
              </a>
            </div>
            <div className="footer-left-connect-container">
              <div className="address-head">
                <p>(connect)</p>
                <a
                  className="social-link"
                  href="https://www.facebook.com/share/15MJ3q1Z4y/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Facebook</h4>
                </a>

                <a
                  className="social-link"
                  href="https://www.instagram.com/atelier__creations?igsh=MWIyMzBlMmZ4MmFxeg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Instagram</h4>
                </a>

                <a
                  className="social-link"
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Linkedin</h4>
                </a>
              </div>
              <div className="address-head">
                <p>(Visit Us)</p>
                <h4>No 293/6 R G Complex 1st Floor, </h4>
                <h4>Perur Main Road, Telungapalayam,</h4>
                <h4>Near Canara Bank, Coimbatore - 641039</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-form">
          <div className="text-and-input">
            <p>Name</p>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="john doe" />
          </div>
          <div className="text-and-input">
            <p>Email Address</p>
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="abc@gmail.com" />
          </div>
          <div className="text-and-input">
            <p>Company Name</p>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="ABC company" />
          </div>
          <div className="text-and-input">
            <p>Message</p>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="i want to build a.." />
          </div>
          <button className="footer-submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <hr className="footer-hr-line" />
      <div className="copy-right-text">
        <p>Copyright © 2025 Atelier Creation. All rights reserved.</p>
        <a
          href="#top"
          style={{
            color: "white",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Back to top
        </a>

        <p onClick={() => navigate("/")}>
          created by{" "}
          <strong style={{ color: "white", cursor: "pointer" }}>
            Atelier Creation
          </strong>
        </p>
      </div>
    </div>
  );
}

export default PortfolioFooter;
