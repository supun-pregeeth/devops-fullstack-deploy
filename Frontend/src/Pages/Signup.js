import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Signup() {
  const navigate = useNavigate();
  // Form states
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Message to show success/error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Frontend validation
    if (password !== confirmPassword) {
      setMessage("❌ Password and Confirm Password do not match");
      return;
    }

    try {
      // ✅ IMPORTANT: use relative URL so Nginx can proxy /api to backend
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // ✅ Backend expects { name, email, password }
        body: JSON.stringify({ username, email, password }),
      });

      // safer than res.json() if backend returns non-JSON
      const text = await res.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = { message: text }; // if backend returns plain text/html
      }

      if (!res.ok) {
        setMessage(`❌ ${data.message || "Signup failed"}`);
        return;
      }

      setMessage(`✅ ${data.message || "Signup successful!"}`);

      // Redirect after 1 second
     setTimeout(() => {
      navigate("/admin"); // or "/dashboard"
       }, 1000);

      // Clear fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error. Is backend running?");
    }
  };

  return (
    <div className="login-container">
      <h2>EG/2022/5453</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Name"
            className="login-input"
            value={username}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
            required
          />
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm Password"
            className="login-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>

        <button type="submit" className="login-button">
          EG/2022/5453
        </button>
      </form>

      {message && (
        <p
          style={{
            color: message.startsWith("✅") ? "green" : "red",
            marginTop: "10px",
          }}
        >
          {message}
        </p>
      )}

      <div className="login-options">
        <p className="signup-text">
          Already have an account?{" "}
          <a href="/login" className="signup-link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
