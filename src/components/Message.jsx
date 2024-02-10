import "../styles/Message/Message.css";

export default function Message({ children }) {
  return (
    <div className="message">
      <h3>{children}</h3>
    </div>
  );
}
