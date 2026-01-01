import React, { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(1);

  const next = () => setScreen((s) => Math.min(4, s + 1));
  const prev = () => setScreen((s) => Math.max(1, s - 1));

  return (
    <div className="app-root">
      <div className="phone">
        {screen === 1 && <WelcomeScreen onCreate={() => setScreen(3)} onLogin={() => setScreen(2)} />}
        {screen === 2 && <LoginScreen />}
        {screen === 3 && <SignupScreen onCreated={() => setScreen(4)} />}
        {screen === 4 && <AccountScreen />}
      </div>

      <div className="bottom-nav">
        <span className="home-icon"></span>
        <button onClick={prev} disabled={screen === 1}>
          {"<"}
        </button>
        <span>{screen} of 4</span>
        <button onClick={next} disabled={screen === 4}>
          {">"}
        </button>
      </div>
    </div>
  );
}

function WelcomeScreen({ onCreate, onLogin }) {
  return (
    <div className="screen">
      <div className="dots-diagonal">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="dot">
            {n}
          </div>
        ))}
      </div>

      <div className="content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button className="btn primary" onClick={onCreate}>
          Create Account
        </button>
        <button className="btn secondary" onClick={onLogin}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="screen">
      <div className="content">
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <label className="field-label">Email Address</label>
        <input className="input" type="email" placeholder="Enter email address" />

        <label className="field-label">Password</label>
        <input className="input" type="password" placeholder="Enter password" />

        <button className="btn disabled">Login</button>
      </div>
    </div>
  );
}

function SignupScreen({ onCreated }) {
  return (
    <div className="screen">
      <div className="content">
        <h1>Create your PopX account</h1>

        <FormField label="Full Name *" placeholder="Marry Doe" />
        <FormField label="Phone number *" placeholder="Marry Doe" />
        <FormField label="Email address *" placeholder="Marry Doe" />
        <FormField label="Password *" placeholder="Marry Doe" type="password" />
        <FormField label="Company name" placeholder="Marry Doe" />

        <p className="field-label">Are you an Agency? *</p>
        <div className="radio-group">
          <label>
            <input type="radio" name="agency" defaultChecked /> Yes
          </label>
          <label>
            <input type="radio" name="agency" /> No
          </label>
        </div>

        <button className="btn primary" onClick={onCreated}>
          Create Account
        </button>
      </div>
    </div>
  );
}

function FormField({ label, placeholder, type = "text" }) {
  return (
    <div className="field">
      <label className="field-label">{label}</label>
      <input className="input" type={type} placeholder={placeholder} />
    </div>
  );
}

function AccountScreen() {
  return (
    <div className="screen">
      <div className="account-header">Account Settings</div>

      <div className="account-body">
        <div className="profile-row">
          <div className="avatar">
            {/* use any image url here */}
          </div>
          <div className="profile-info">
            <div className="name">nikhil</div>
            <div className="email">nikhil@gmail.com</div>
          </div>
          <div className="camera-badge">📷</div>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </p>
      </div>
    </div>
  );
}

export default App;
