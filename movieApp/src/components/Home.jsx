import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home--container">
      <h1>Welcome to our Movie Search App</h1>
      <Link to="/movies"> List films</Link>
    </div>
  );
}
