import { useEffect, useRef, useState } from "react";

function VideoHero({ experience, onVideoStart }) {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  async function handleStartVideo() {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    try {
      await videoElement.play();
      setHasStarted(true);
    } catch (error) {
      console.error("Video playback failed:", error);
    }
  }

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    let hasTriggeredStart = false;

    function handleTimeUpdate() {
      if (!hasTriggeredStart && videoElement.currentTime >= 3) {
        hasTriggeredStart = true;
        onVideoStart?.();
      }
    }

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onVideoStart]);

  return (
    <section className="fullscreen-video">
      <video
        ref={videoRef}
        className="fullscreen-video__media"
        src={experience.videoUrl}
        playsInline
        preload="metadata"
        controls={false}
      />

      {!hasStarted ? (
        <button
          type="button"
          className="play-button-overlay"
          onClick={handleStartVideo}
          aria-label="Play video"
        >
          <span className="play-icon-shape" />
        </button>
      ) : null}
    </section>
  );
}

export default VideoHero;
