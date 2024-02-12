import "../styles/Footer/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h1>{year} Popcorn MovieList</h1>
    </div>
  );
}
