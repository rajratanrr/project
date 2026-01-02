import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>🎓 UniEvent</h1>
      <p>Discover and participate in college events</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/login">
          <button style={{ marginRight: "10px" }}>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
