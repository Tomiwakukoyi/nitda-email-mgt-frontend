import React from 'react'

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/auth/login";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Traditional login not implemented yet.");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>NITDA</h2>
        <p className="subtitle">AI-Based Email Management</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email or phone" required />
          <input type="password" placeholder="Password" required />

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <button
              type="button"
              className="link-button forgot-password"
              onClick={() => alert('Set New Password')}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="google-login-btn">
          <button onClick={handleGoogleLogin}>
            Sign in with Google
          </button>
        </div>

        <p className="signup">
          Don't have an account?{" "}
          <button
            className="link-button signup-link"
            onClick={() => alert('Sign up here')}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;