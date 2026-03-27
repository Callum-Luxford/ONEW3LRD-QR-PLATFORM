import { Link } from "react-router-dom";

function JoinUsButton({ label = "Join Us", visible = false }) {
  return (
    <Link to="/join" className={`chat-button ${visible ? "show" : "hidden"}`}>
      <span>{label}</span>
    </Link>
  );
}

export default JoinUsButton;
