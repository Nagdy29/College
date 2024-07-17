import React, { useState } from "react";
import video from "../assets/video_2024-07-16_21-17-58.mp4";
import { FaGooglePlay } from "react-icons/fa";

const VideoModal = () => {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button
        onClick={playVideo}
        className="btn-play flex items-center justify-center"
      >
        <FaGooglePlay className="icons" />
      </button>
      {showVideo && (
        <div className="video-overlay">
          <video controls autoPlay>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="close-button" onClick={closeVideo}>
            &times;
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
