import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi2";

function JoinUsButton({ label = "Join Us", visible = false }) {
  return (
    <Link to="/join" className={`chat-button ${visible ? "show" : "hidden"}`}>
      <HiUserGroup size={20} style={{ marginRight: "8px" }} />
      <span>{label}</span>
    </Link>
  );
}

export default JoinUsButton;
