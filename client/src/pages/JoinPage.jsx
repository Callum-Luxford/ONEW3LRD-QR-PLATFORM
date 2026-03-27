import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import JoinForm from "../components/JoinForm";
import { getExperience } from "../services/experienceService";

function JoinPage() {
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    async function loadExperience() {
      const data = await getExperience();
      setExperience(data);
    }

    loadExperience();
  }, []);

  if (!experience) {
    return (
      <section className="join-page">
        <div className="join-panel">
          <p>Loading join page...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="join-page">
      <div className="join-panel">
        <div className="join-panel__header">
          <h1 className="join-panel__title">Contact Information</h1>
          <p className="join-panel__subtitle">
            Enter your contact details below to receive further information.
          </p>
        </div>

        <JoinForm />

        <Link to="/" className="join-back-link">
          Back to video
        </Link>
      </div>
    </section>
  );
}

export default JoinPage;
