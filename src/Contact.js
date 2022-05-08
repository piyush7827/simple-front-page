import React from "react";
import "./Contact.css";

import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="contact">
      <h1>This is Contact</h1>
      <button onClick={navigateToHome}>Go to home</button>
    </div>
  );
}

export default Contact;
