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

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    function primeFirstFrame() {
      if (hasStarted) return;

      try {
        if (videoElement.readyState >= 2) {
          videoElement.currentTime = 0.05;
        }
      } catch (error) {
        console.error("Could not prepare first frame:", error);
      }
    }

    videoElement.preload = "auto";
    videoElement.load();

    videoElement.addEventListener("loadeddata", primeFirstFrame);

    return () => {
      videoElement.removeEventListener("loadeddata", primeFirstFrame);
    };
  }, [hasStarted]);

  return (
    <section className="fullscreen-video">
      <div className="fullscreen-video__stage">
        <video
          ref={videoRef}
          className="fullscreen-video__media"
          src={experience.videoUrl}
          playsInline
          preload="auto"
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
      </div>
    </section>
  );
}

export default VideoHero;
