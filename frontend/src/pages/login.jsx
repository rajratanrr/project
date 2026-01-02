import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <input placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button>Login</button>

      <p style={{ marginTop: "10px" }}>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
