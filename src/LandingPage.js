// Triggering GitHub Actions Deployment

import { useState } from "react";
import "./LandingPage.css"; // Import CSS file
import logo from "./Logo.png"; // Ensure the logo file is in src folder

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(0);

  const handleJoinWaitlist = () => {
    if (email.trim() !== "") {
      setWaitlistCount(waitlistCount + 1);
      setEmail("");
      alert("You have joined the waitlist!");
    }
  };

  return (
    <div className="landing-container">
      {/* Logo at the top */}
      <img src={logo} alt="AI Tax Bot Logo" className="logo" />

      <h1>Launching Soon: Your AI Tax Assistant</h1>
      <p>Join our waitlist to be the first to experience a smarter way to handle your taxes.<br />
         Powered by AI, simplified for you.</p>

      <div>
        <input
          type="email"
          placeholder="Enter your email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="waitlist-button" onClick={handleJoinWaitlist}>
          Join Waitlist →
        </button>
      </div>

      <p className="waitlist-counter">👥 {waitlistCount} people on the waitlist</p>
    </div>
  );
}
