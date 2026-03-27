import { useEffect, useState } from "react";
import VideoHero from "../components/VideoHero";
import JoinUsButton from "../components/JoinUsButton";
import { getExperience } from "../services/experienceService";

function VideoPage() {
  const [experience, setExperience] = useState(null);
  const [showJoinButton, setShowJoinButton] = useState(false);

  useEffect(() => {
    async function loadExperience() {
      const data = await getExperience();
      setExperience(data);
    }

    loadExperience();
  }, []);

  if (!experience) {
    return (
      <section className="video-loading-screen">
        <p>Loading experience...</p>
      </section>
    );
  }

  return (
    <section className="video-page-shell">
      <VideoHero
        experience={experience}
        onVideoStart={() => setShowJoinButton(true)}
      />

      <JoinUsButton label={experience.ctaLabel} visible={showJoinButton} />
    </section>
  );
}

export default VideoPage;
